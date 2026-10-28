import React, { useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/nav";
import { usePageMeta } from "@/hooks/usePageMeta";
import { CalculatorHero } from "@/components/calculator/CalculatorHero";
import { CALCULATOR_INVENTORY } from "@/components/calculator/calculatorData";
import { InteractivePaymentCalculator } from "@/components/calculator/InteractivePaymentCalculator";
import { CalculatorCta } from "@/components/calculator/CalculatorCta";

export const MortgageCalculators = () => {
  usePageMeta({
    title: "Mortgage Calculators — Estimate Your Monthly Payment",
    description:
      "Estimate your monthly mortgage payment with HB Mortgage Group's calculator. Adjust home price, down payment, term, rate, taxes, and insurance. Estimates only — not an approval or loan offer.",
    path: "/mortgage-calculators",
  });
  const [activeCalc, setActiveCalc] = useState<string>("purchase");

  return (
    <>
      {/* Hero */}
      <CalculatorHero />

      {/* Main Interactive Tool Section */}
      <section className="section bg-background">
        <div className="container-hb">
          {/* Inventory Switcher Header */}
          <div className="mb-10">
            <div className="flex items-center justify-between">
              <div>
                <span className="eyebrow">Interactive Estimator</span>
                <h2 className="mt-1 h2">Monthly Payment Breakdown</h2>
              </div>
              <p className="hidden text-sm text-muted-foreground md:block">
                Tailored for homebuyers in {company.serviceArea}
              </p>
            </div>

            {/* Inventory Selector Grid */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
              {CALCULATOR_INVENTORY.map((calc) => {
                const Icon = calc.icon;
                const isActive = activeCalc === calc.id;
                return (
                  <button
                    key={calc.id}
                    onClick={() => setActiveCalc(calc.id)}
                    className={`flex flex-col items-center justify-center rounded-[var(--radius)] border p-3 text-center transition-all ${
                      isActive
                        ? "border-primary bg-primary/10 text-primary font-semibold shadow-sm"
                        : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    <Icon
                      className="h-5 w-5 mb-1.5 flex-none"
                      aria-hidden="true"
                    />
                    <span className="text-xs leading-tight line-clamp-2">
                      {calc.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {activeCalc !== "purchase" && (
              <div className="mt-4 rounded-md border border-primary/20 bg-primary/5 p-4 text-sm text-foreground flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <Info className="h-4 w-4 text-primary flex-none" />
                  <span>
                    Showing inputs for{" "}
                    <strong>
                      {
                        CALCULATOR_INVENTORY.find((c) => c.id === activeCalc)
                          ?.title
                      }
                    </strong>
                    . Adjust loan amount, rate, and terms below.
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveCalc("purchase")}
                >
                  Reset to Purchase Calculator
                </Button>
              </div>
            )}
          </div>

          {/* Core Monthly Payment Calculator Component */}
          <InteractivePaymentCalculator />
        </div>
      </section>

      {/* Full Calculator Inventory Grid */}
      <section className="section bg-secondary/30">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Complete Suite</span>
            <h2 className="mt-2 h2">All Mortgage Calculators &amp; Tools</h2>
            <p className="mt-3 lead">
              Explore specialized calculators for refinancing, home
              affordability, debt consolidation, and point comparisons.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CALCULATOR_INVENTORY.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="surface-card flex flex-col p-6 hover:border-primary/50 transition-colors cursor-pointer"
                  onClick={() => {
                    setActiveCalc(item.id);
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                      Interactive Tool
                    </span>
                  </div>

                  <h3 className="mt-4 h3 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Use this estimator</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-sm bg-background border-t border-border">
        <div className="container-hb">
          <div className="rounded-[var(--radius)] border border-border bg-muted/30 p-6">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Info className="h-4 w-4 text-primary" />
              Calculator Disclaimer &amp; Disclosures
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Information and interactive calculators are made available to you
              as self-help tools for your independent use and are not intended
              to provide financial or investment advice. We cannot and do not
              guarantee their applicability or accuracy in regards to your
              individual circumstances. All examples are hypothetical and are
              for illustrative purposes. Results do not constitute an approval,
              prequalification, or commitment to lend. We encourage you to seek
              personalized advice from qualified mortgage professionals at Home
              Base Mortgage Group, LLC (NMLS #{company.nmls}) regarding all
              personal finance issues.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CalculatorCta />
    </>
  );
};

export default MortgageCalculators;
