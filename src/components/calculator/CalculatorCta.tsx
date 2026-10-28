import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, APPLY_URL } from "@/lib/nav";

export const CalculatorCta = () => (
  <section className="section bg-primary text-primary-foreground">
    <div className="container-hb text-center">
      <h2 className="h2 text-primary-foreground">Ready for Exact Numbers?</h2>
      <p className="mt-3 max-w-xl mx-auto text-lg text-primary-foreground/85">
        Let&rsquo;s walk through your property, budget, and financing options
        together &mdash; with zero pressure.
      </p>
      <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
        <Button asChild variant="cta" size="lg">
          <Link to="/contact-us">
            Talk With a Mortgage Expert
            <ArrowRight className="h-4 w-4 ml-1.5" />
          </Link>
        </Button>
        <Button asChild variant="onDarkOutline" size="lg">
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
            Start My Application
          </a>
        </Button>
      </div>
      <p className="mt-5 text-xs text-primary-foreground/70">
        {company.legalName} &middot; NMLS #{company.nmls} &middot; Licensed in{" "}
        {company.serviceArea}
      </p>
    </div>
  </section>
);
