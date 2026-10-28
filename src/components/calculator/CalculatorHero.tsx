import React from "react";
import { Calculator } from "lucide-react";
import { company } from "@/lib/nav";

const heroImg =
  "https://vibe.filesafe.space/1788700173943534517/assets/f3ba32fa-26ce-4b40-a0b2-14080212c319.png";

export const CalculatorHero = () => (
  <section className="relative overflow-hidden bg-primary text-primary-foreground">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="A person using a mortgage payment calculator on a laptop with financial charts on screen"
        className="h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, hsl(var(--primary) / 0.82) 0%, hsl(var(--primary) / 0.70) 42%, hsl(var(--primary) / 0.38) 100%)",
        }}
        aria-hidden="true"
      />
    </div>
    <div className="container-hb relative py-14 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
          <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
          Interactive Planning Tools
        </span>

        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Mortgage Calculators
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
          Estimate your monthly housing expenses, explore down payment options,
          and understand principal vs. interest breakdowns before you talk with
          an HB expert.
        </p>
      </div>
    </div>
  </section>
);
