/**
 * Pure mortgage payment calculation helpers.
 * Extracted from InteractivePaymentCalculator so the math is unit-testable
 * independent of React/DOM.
 */

export interface PaymentInputs {
  homePrice: number;
  downPaymentAmount: number;
  loanTermYears: number;
  interestRate: number; // annual percent, visitor-entered example
  annualPropertyTax: number;
  annualInsurance: number;
  monthlyHoa: number;
  monthlyPmi: number; // explicit override (used when autoPmi is off)
  useAutoPmi: boolean;
}

export interface PaymentResult {
  loanAmount: number;
  effectiveDownPaymentPercent: number;
  monthlyPrincipalAndInterest: number;
  monthlyPropertyTax: number;
  monthlyInsurance: number;
  monthlyPmi: number;
  totalMonthlyPayment: number;
  taxesOmitted: boolean;
  insuranceOmitted: boolean;
  invalidInputs: boolean;
}

/** Standard amortization formula with a zero-interest fallback. */
export const calculateMonthlyPrincipalAndInterest = (
  loanAmount: number,
  loanTermYears: number,
  interestRate: number,
): number => {
  if (loanAmount <= 0 || loanTermYears <= 0) return 0;

  const numberOfPayments = loanTermYears * 12;

  // Zero-interest branch: equal principal payments only.
  if (interestRate <= 0) {
    return loanAmount / numberOfPayments;
  }

  const monthlyRate = interestRate / 100 / 12;
  const factor = Math.pow(1 + monthlyRate, numberOfPayments);
  const payment = (loanAmount * (monthlyRate * factor)) / (factor - 1);

  return isNaN(payment) || !isFinite(payment) ? 0 : payment;
};

/** Auto-estimate PMI when down payment is below 20%. */
export const calculateAutoPmi = (
  loanAmount: number,
  effectiveDownPaymentPercent: number,
): number => {
  if (effectiveDownPaymentPercent < 20 && loanAmount > 0) {
    return Math.round((loanAmount * 0.0055) / 12);
  }
  return 0;
};

export const calculatePayment = (input: PaymentInputs): PaymentResult => {
  const loanAmount = Math.max(0, input.homePrice - input.downPaymentAmount);
  const effectiveDownPaymentPercent =
    input.homePrice > 0 ? (input.downPaymentAmount / input.homePrice) * 100 : 0;

  const monthlyPrincipalAndInterest = calculateMonthlyPrincipalAndInterest(
    loanAmount,
    input.loanTermYears,
    input.interestRate,
  );

  const monthlyPropertyTax = input.annualPropertyTax / 12;
  const monthlyInsurance = input.annualInsurance / 12;

  const monthlyPmi = input.useAutoPmi
    ? calculateAutoPmi(loanAmount, effectiveDownPaymentPercent)
    : input.monthlyPmi;

  const totalMonthlyPayment =
    monthlyPrincipalAndInterest +
    monthlyPropertyTax +
    monthlyInsurance +
    input.monthlyHoa +
    monthlyPmi;

  const taxesOmitted = input.annualPropertyTax === 0;
  const insuranceOmitted = input.annualInsurance === 0;
  const invalidInputs =
    input.homePrice <= 0 ||
    input.downPaymentAmount > input.homePrice ||
    input.loanTermYears <= 0;

  return {
    loanAmount,
    effectiveDownPaymentPercent,
    monthlyPrincipalAndInterest,
    monthlyPropertyTax,
    monthlyInsurance,
    monthlyPmi,
    totalMonthlyPayment,
    taxesOmitted,
    insuranceOmitted,
    invalidInputs,
  };
};
