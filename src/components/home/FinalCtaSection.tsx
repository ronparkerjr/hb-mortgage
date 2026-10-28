import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, APPLY_URL } from "@/lib/nav";

/**
 * Stage 8 — Final CTA band.
 * "Let's Find Your Next Step Home" with Talk With a Mortgage Expert
 * and Start My Application.
 */
export const FinalCtaSection = () => {
  return (
    <section className="section bg-secondary/40">
      <div className="container-hb">
        <div className="relative overflow-hidden rounded-[var(--radius)] bg-primary px-6 py-14 text-center text-primary-foreground shadow-lg sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(60% 60% at 80% 20%, hsl(var(--primary-glow)) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="h2 text-primary-foreground">
              Let&rsquo;s Find Your Next Step Home
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
              Whether you&rsquo;re ready to apply or just have a few questions,
              we&rsquo;ll help you take the right next step &mdash; no pressure.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact-us">
                  Talk With a Mortgage Expert
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="onDarkOutline" size="lg">
                <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                  Start My Application
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70">
              {company.legalName} &middot; NMLS #{company.nmls} &middot;{" "}
              {company.serviceArea}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
