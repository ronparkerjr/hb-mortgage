import { describe, it, expect } from "vitest";
import {
  calculateMonthlyPrincipalAndInterest,
  calculateAutoPmi,
  calculatePayment,
} from "@/lib/mortgageCalc";

const baseInput = {
  homePrice: 425000,
  downPaymentAmount: 85000, // 20%
  loanTermYears: 30,
  interestRate: 6.5,
  annualPropertyTax: 5100,
  annualInsurance: 1440,
  monthlyHoa: 0,
  monthlyPmi: 0,
  useAutoPmi: true,
};

describe("calculateMonthlyPrincipalAndInterest", () => {
  it("computes a normal amortized payment", () => {
    // $340,000 loan, 30yr, 6.5% -> ~$2149.03/mo P&I
    const p = calculateMonthlyPrincipalAndInterest(340000, 30, 6.5);
    expect(p).toBeCloseTo(2149.03, 1);
    expect(p).toBeGreaterThan(0);
  });

  it("handles zero interest by dividing principal evenly", () => {
    // $360,000 / (30*12) = $1000 exactly
    const p = calculateMonthlyPrincipalAndInterest(360000, 30, 0);
    expect(p).toBe(1000);
  });

  it("handles negative interest as zero-interest", () => {
    const p = calculateMonthlyPrincipalAndInterest(360000, 30, -2);
    expect(p).toBe(1000);
  });

  it("returns 0 for non-positive loan amount", () => {
    expect(calculateMonthlyPrincipalAndInterest(0, 30, 6.5)).toBe(0);
    expect(calculateMonthlyPrincipalAndInterest(-100, 30, 6.5)).toBe(0);
  });

  it("returns 0 for non-positive term", () => {
    expect(calculateMonthlyPrincipalAndInterest(340000, 0, 6.5)).toBe(0);
    expect(calculateMonthlyPrincipalAndInterest(340000, -5, 6.5)).toBe(0);
  });
});

describe("calculateAutoPmi", () => {
  it("estimates PMI when down payment is below 20%", () => {
    // loan 340000, 10% down -> 340000*0.0055/12 = 155.83 -> rounded 156
    expect(calculateAutoPmi(340000, 10)).toBe(156);
  });

  it("returns 0 when down payment is 20% or more", () => {
    expect(calculateAutoPmi(340000, 20)).toBe(0);
    expect(calculateAutoPmi(340000, 25)).toBe(0);
  });

  it("returns 0 when loan amount is 0", () => {
    expect(calculateAutoPmi(0, 5)).toBe(0);
  });
});

describe("calculatePayment — normal case", () => {
  it("produces a complete, sensible payment breakdown", () => {
    const r = calculatePayment(baseInput);

    expect(r.loanAmount).toBe(340000);
    expect(r.effectiveDownPaymentPercent).toBeCloseTo(20, 5);
    expect(r.monthlyPrincipalAndInterest).toBeCloseTo(2149.03, 1);
    expect(r.monthlyPropertyTax).toBeCloseTo(425, 1); // 5100/12
    expect(r.monthlyInsurance).toBeCloseTo(120, 1); // 1440/12
    expect(r.monthlyPmi).toBe(0); // 20% down -> no PMI
    expect(r.totalMonthlyPayment).toBeCloseTo(2149.03 + 425 + 120 + 0 + 0, 1);
    expect(r.taxesOmitted).toBe(false);
    expect(r.insuranceOmitted).toBe(false);
    expect(r.invalidInputs).toBe(false);
  });

  it("adds auto PMI when down payment is under 20%", () => {
    const r = calculatePayment({
      ...baseInput,
      downPaymentAmount: 42500, // 10% down
    });
    expect(r.effectiveDownPaymentPercent).toBeCloseTo(10, 5);
    expect(r.loanAmount).toBe(382500);
    expect(r.monthlyPmi).toBe(calculateAutoPmi(382500, 10));
    expect(r.monthlyPmi).toBeGreaterThan(0);
  });
});

describe("calculatePayment — zero interest", () => {
  it("evenly divides principal with no interest", () => {
    const r = calculatePayment({
      ...baseInput,
      interestRate: 0,
      homePrice: 450000,
      downPaymentAmount: 90000, // 20% down -> loan = 360000, no PMI
    });
    // 360000 / 360 = 1000
    expect(r.monthlyPrincipalAndInterest).toBe(1000);
    expect(r.monthlyPmi).toBe(0); // 20% down, no auto PMI
    expect(r.totalMonthlyPayment).toBeCloseTo(1000 + 425 + 120 + 0 + 0, 1);
    expect(r.invalidInputs).toBe(false);
  });
});

describe("calculatePayment — invalid inputs", () => {
  it("flags zero home price as invalid and zeroes the payment", () => {
    const r = calculatePayment({ ...baseInput, homePrice: 0 });
    expect(r.invalidInputs).toBe(true);
    expect(r.loanAmount).toBe(0);
    expect(r.monthlyPrincipalAndInterest).toBe(0);
  });

  it("flags down payment exceeding home price as invalid", () => {
    const r = calculatePayment({
      ...baseInput,
      downPaymentAmount: 500000, // > 425000
    });
    expect(r.invalidInputs).toBe(true);
    expect(r.loanAmount).toBe(0); // clamped via Math.max
  });

  it("flags non-positive term as invalid", () => {
    const r = calculatePayment({ ...baseInput, loanTermYears: 0 });
    expect(r.invalidInputs).toBe(true);
    expect(r.monthlyPrincipalAndInterest).toBe(0);
  });

  it("reports taxes/insurance omitted when set to 0", () => {
    const r = calculatePayment({
      ...baseInput,
      annualPropertyTax: 0,
      annualInsurance: 0,
    });
    expect(r.taxesOmitted).toBe(true);
    expect(r.insuranceOmitted).toBe(true);
    // payment still computed from P&I only
    expect(r.monthlyPropertyTax).toBe(0);
    expect(r.monthlyInsurance).toBe(0);
    expect(r.monthlyPrincipalAndInterest).toBeCloseTo(2149.03, 1);
  });
});
