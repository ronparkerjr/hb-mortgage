import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Sliders,
  DollarSign,
  Percent,
  AlertTriangle,
  ArrowRight,
  Phone,
  ShieldCheck,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/nav";
import { calculatePayment } from "@/lib/mortgageCalc";

export const InteractivePaymentCalculator = () => {
  // Inputs
  const [homePrice, setHomePrice] = useState<number>(425000);
  const [downPaymentAmount, setDownPaymentAmount] = useState<number>(85000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTermYears, setLoanTermYears] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(6.5); // Visitor entered example rate

  // Optional Monthly/Annual Components
  const [annualPropertyTax, setAnnualPropertyTax] = useState<number>(5100);
  const [annualInsurance, setAnnualInsurance] = useState<number>(1440);
  const [monthlyHoa, setMonthlyHoa] = useState<number>(0);
  const [monthlyPmi, setMonthlyPmi] = useState<number>(0);
  const [useAutoPmi, setUseAutoPmi] = useState<boolean>(true);

  // Sync down payment dollar vs percent
  const handlePriceChange = (val: number) => {
    const validPrice = Math.max(0, val);
    setHomePrice(validPrice);
    const newDp = Math.round((validPrice * downPaymentPercent) / 100);
    setDownPaymentAmount(newDp);
  };

  const handleDpAmountChange = (val: number) => {
    const validDp = Math.max(0, Math.min(val, homePrice));
    setDownPaymentAmount(validDp);
    if (homePrice > 0) {
      setDownPaymentPercent(Number(((validDp / homePrice) * 100).toFixed(1)));
    }
  };

  const handleDpPercentChange = (val: number) => {
    const validPct = Math.max(0, Math.min(val, 100));
    setDownPaymentPercent(validPct);
    setDownPaymentAmount(Math.round((homePrice * validPct) / 100));
  };

  // Calculations (delegated to pure, tested helper)
  const result = useMemo(
    () =>
      calculatePayment({
        homePrice,
        downPaymentAmount,
        loanTermYears,
        interestRate,
        annualPropertyTax,
        annualInsurance,
        monthlyHoa,
        monthlyPmi,
        useAutoPmi,
      }),
    [
      homePrice,
      downPaymentAmount,
      loanTermYears,
      interestRate,
      annualPropertyTax,
      annualInsurance,
      monthlyHoa,
      monthlyPmi,
      useAutoPmi,
    ],
  );

  const {
    loanAmount,
    effectiveDpPct,
    monthlyPrincipalAndInterest,
    monthlyPropertyTax,
    monthlyInsurance,
    calculatedPmi,
    totalMonthlyPayment,
    taxesOmitted,
    insuranceOmitted,
    invalidInputs,
  } = {
    ...result,
    effectiveDpPct: result.effectiveDownPaymentPercent,
    calculatedPmi: result.monthlyPmi,
  };

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
      {/* INPUTS COLUMN */}
      <div className="surface-card p-6 sm:p-8 lg:col-span-7 space-y-6">
        <div className="border-b border-border pb-4 flex items-center justify-between">
          <h3 className="h3 flex items-center gap-2">
            <Sliders className="h-5 w-5 text-accent" />
            Loan &amp; Property Inputs
          </h3>
          <span className="text-xs text-muted-foreground">
            Adjust values below
          </span>
        </div>

        {/* Home Price & Down Payment */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center text-sm font-medium mb-1.5">
              <label htmlFor="home-price" className="text-foreground">
                Home Purchase Price
              </label>
              <span className="font-display font-bold text-primary">
                {formatCurrency(homePrice)}
              </span>
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                id="home-price"
                type="number"
                value={homePrice}
                onChange={(e) => handlePriceChange(Number(e.target.value))}
                className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                min={0}
                step={5000}
              />
            </div>
            <input
              type="range"
              min={100000}
              max={1500000}
              step={10000}
              value={homePrice}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="w-full accent-primary mt-2 cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="dp-amount"
                className="block text-xs font-medium text-muted-foreground mb-1"
              >
                Down Payment ($)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="dp-amount"
                  type="number"
                  value={downPaymentAmount}
                  onChange={(e) => handleDpAmountChange(Number(e.target.value))}
                  className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  min={0}
                  max={homePrice}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="dp-percent"
                className="block text-xs font-medium text-muted-foreground mb-1"
              >
                Down Payment (%)
              </label>
              <div className="relative">
                <input
                  id="dp-percent"
                  type="number"
                  value={downPaymentPercent}
                  onChange={(e) =>
                    handleDpPercentChange(Number(e.target.value))
                  }
                  className="w-full rounded-md border border-input bg-background pl-4 pr-9 py-2 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  min={0}
                  max={100}
                  step={0.5}
                />
                <Percent className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>

          <div className="rounded-md bg-secondary/60 p-3 text-xs flex justify-between items-center text-muted-foreground">
            <span>Calculated Loan Amount:</span>
            <span className="font-semibold text-foreground">
              {formatCurrency(loanAmount)}
            </span>
          </div>
        </div>

        {/* Term & Interest Rate */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-2 border-t border-border">
          <div>
            <label
              htmlFor="loan-term"
              className="block text-xs font-medium text-muted-foreground mb-1"
            >
              Loan Term (Years)
            </label>
            <select
              id="loan-term"
              value={loanTermYears}
              onChange={(e) => setLoanTermYears(Number(e.target.value))}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value={30}>30 Years Fixed</option>
              <option value={20}>20 Years Fixed</option>
              <option value={15}>15 Years Fixed</option>
              <option value={10}>10 Years Fixed</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label
                htmlFor="interest-rate"
                className="text-xs font-medium text-muted-foreground"
              >
                Interest Rate (%){" "}
                <span className="text-[10px] text-accent font-semibold">
                  (Example Rate)
                </span>
              </label>
            </div>
            <div className="relative">
              <input
                id="interest-rate"
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full rounded-md border border-input bg-background pl-4 pr-8 py-2 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                min={0}
                max={30}
                step={0.125}
              />
              <Percent className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground italic">
              * For illustration only. Rates depend on individual underwriting
              review.
            </p>
          </div>
        </div>

        {/* Optional Escrows */}
        <div className="space-y-4 pt-4 border-t border-border">
          <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
            Property Taxes, Insurance &amp; Fees (Monthly / Annual)
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="prop-tax"
                className="block text-xs font-medium text-muted-foreground mb-1"
              >
                Annual Property Tax ($/yr)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="prop-tax"
                  type="number"
                  value={annualPropertyTax}
                  onChange={(e) =>
                    setAnnualPropertyTax(Math.max(0, Number(e.target.value)))
                  }
                  className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  min={0}
                  step={100}
                />
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                = {formatCurrency(monthlyPropertyTax)} / month
              </p>
            </div>

            <div>
              <label
                htmlFor="home-ins"
                className="block text-xs font-medium text-muted-foreground mb-1"
              >
                Annual Home Insurance ($/yr)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="home-ins"
                  type="number"
                  value={annualInsurance}
                  onChange={(e) =>
                    setAnnualInsurance(Math.max(0, Number(e.target.value)))
                  }
                  className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  min={0}
                  step={50}
                />
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                = {formatCurrency(monthlyInsurance)} / month
              </p>
            </div>

            <div>
              <label
                htmlFor="hoa-fee"
                className="block text-xs font-medium text-muted-foreground mb-1"
              >
                Monthly HOA / Condo Fee ($/mo)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="hoa-fee"
                  type="number"
                  value={monthlyHoa}
                  onChange={(e) =>
                    setMonthlyHoa(Math.max(0, Number(e.target.value)))
                  }
                  className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  min={0}
                  step={25}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="pmi-fee"
                className="block text-xs font-medium text-muted-foreground mb-1"
              >
                Mortgage Insurance / PMI ($/mo)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  id="pmi-fee"
                  type="number"
                  value={calculatedPmi}
                  onChange={(e) => {
                    setUseAutoPmi(false);
                    setMonthlyPmi(Math.max(0, Number(e.target.value)));
                  }}
                  className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  min={0}
                />
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                {effectiveDpPct < 20
                  ? "Auto-estimated for <20% down payment"
                  : "Typically $0 when down payment ≥20%"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RESULTS COLUMN */}
      <div className="space-y-6 lg:col-span-5 lg:sticky lg:top-28">
        <div className="surface-card bg-primary text-primary-foreground p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
            aria-hidden="true"
          />

          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Estimated Total Monthly Payment
          </span>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              {formatCurrency(totalMonthlyPayment)}
            </span>
            <span className="text-sm text-primary-foreground/80">/ month</span>
          </div>

          {(taxesOmitted || insuranceOmitted) && (
            <div className="mt-4 rounded-md border border-amber-300/40 bg-amber-500/20 p-3 text-xs text-amber-100 flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-300 flex-none mt-0.5" />
              <div>
                <strong>Taxes or insurance set to $0:</strong> Omitted items are
                not included in this estimate. Actual monthly escrow payment
                will be higher.
              </div>
            </div>
          )}

          {invalidInputs && (
            <div className="mt-4 rounded-md border border-red-300/40 bg-red-500/20 p-3 text-xs text-red-100 flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-red-200 flex-none mt-0.5" />
              <div>
                Please enter valid positive numbers for purchase price, term,
                and down payment.
              </div>
            </div>
          )}

          {/* VISUAL BREAKDOWN BAR */}
          <div className="mt-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
              Payment Components
            </p>

            <div className="flex h-3 w-full overflow-hidden rounded-full bg-primary-foreground/20">
              <div
                style={{
                  width: `${totalMonthlyPayment > 0 ? (monthlyPrincipalAndInterest / totalMonthlyPayment) * 100 : 0}%`,
                }}
                className="bg-accent transition-all duration-300"
                title="Principal & Interest"
              />
              <div
                style={{
                  width: `${totalMonthlyPayment > 0 ? (monthlyPropertyTax / totalMonthlyPayment) * 100 : 0}%`,
                }}
                className="bg-sky-400 transition-all duration-300"
                title="Property Tax"
              />
              <div
                style={{
                  width: `${totalMonthlyPayment > 0 ? (monthlyInsurance / totalMonthlyPayment) * 100 : 0}%`,
                }}
                className="bg-amber-400 transition-all duration-300"
                title="Insurance"
              />
              <div
                style={{
                  width: `${totalMonthlyPayment > 0 ? (calculatedPmi / totalMonthlyPayment) * 100 : 0}%`,
                }}
                className="bg-purple-400 transition-all duration-300"
                title="Mortgage Insurance"
              />
              <div
                style={{
                  width: `${totalMonthlyPayment > 0 ? (monthlyHoa / totalMonthlyPayment) * 100 : 0}%`,
                }}
                className="bg-emerald-300 transition-all duration-300"
                title="HOA"
              />
            </div>

            <div className="mt-4 space-y-2.5 text-sm border-t border-primary-foreground/15 pt-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-primary-foreground/90">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  Principal &amp; Interest
                </span>
                <span className="font-semibold">
                  {formatCurrency(monthlyPrincipalAndInterest)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-primary-foreground/90">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                  Property Taxes ({formatCurrency(annualPropertyTax)}/yr)
                </span>
                <span className="font-semibold">
                  {formatCurrency(monthlyPropertyTax)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-primary-foreground/90">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  Homeowners Insurance ({formatCurrency(annualInsurance)}/yr)
                </span>
                <span className="font-semibold">
                  {formatCurrency(monthlyInsurance)}
                </span>
              </div>

              {calculatedPmi > 0 && (
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-primary-foreground/90">
                    <span className="h-2.5 w-2.5 rounded-full bg-purple-400" />
                    Mortgage Insurance (PMI)
                  </span>
                  <span className="font-semibold">
                    {formatCurrency(calculatedPmi)}
                  </span>
                </div>
              )}

              {monthlyHoa > 0 && (
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-primary-foreground/90">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    HOA / Condo Fee
                  </span>
                  <span className="font-semibold">
                    {formatCurrency(monthlyHoa)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-primary-foreground/20 space-y-3">
            <Button asChild variant="cta" className="w-full" size="lg">
              <Link to="/contact-us">
                Talk Through These Numbers With HB
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 text-xs font-semibold text-primary-foreground/90 hover:underline"
            >
              <Phone className="h-3.5 w-3.5" /> Or call our team directly at{" "}
              {company.phone}
            </a>
          </div>
        </div>

        <div className="surface-card p-5 text-xs text-muted-foreground space-y-2">
          <div className="flex items-center gap-2 font-semibold text-foreground">
            <ShieldCheck className="h-4 w-4 text-accent" />
            What to keep in mind
          </div>
          <p>
            Actual rates, closing costs, property taxes, and insurance vary by
            location and personal qualifications across Maine and New Hampshire.
            We compare exact options together before you make any decisions.
          </p>
        </div>
      </div>
    </div>
  );
};
