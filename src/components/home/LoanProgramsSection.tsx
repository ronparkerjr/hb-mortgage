import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Home,
  Users,
  ClipboardList,
  Calculator,
  BookOpen,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Stage 8 — Loan program overview.
 * Features Conventional, FHA, VA; first-time buyer guidance as a service;
 * links to all programs, calculators, and learning resources.
 * No numeric eligibility claims.
 */
export const LoanProgramsSection = () => {
  return (
    <section className="section bg-primary/5">
      <div className="container-hb">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Loan Programs</span>
          <h2 className="mt-3 h2">Financing That Fits Your Situation</h2>
          <p className="mt-3 lead">
            We&rsquo;ll help you understand which programs make sense for your
            goals &mdash; then compare the details together.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Conventional",
              body: "A flexible option for buyers with steady credit and income. We&rsquo;ll walk through down payment and payment scenarios so you can compare with confidence.",
            },
            {
              icon: Home,
              title: "FHA",
              body: "Often a fit for buyers working with a smaller down payment or a shorter credit history. We&rsquo;ll explain how it works and whether it suits your situation.",
            },
            {
              icon: Users,
              title: "VA",
              body: "For eligible service members, veterans, and qualified family members. We&rsquo;ll help you understand your eligibility and how VA financing compares.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="surface-card flex flex-col p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 h3">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* First-time buyer guidance + all-programs link */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="surface-card flex items-start gap-4 p-6">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
              <ClipboardList className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                First-Time Homebuyer Guidance
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                New to this? We start with your questions and walk through the
                process step by step &mdash; from budget and timing to
                prequalification. It&rsquo;s a service we provide, not a
                separate loan.
              </p>
              <Link
                to="/home-purchase"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Explore first-time buyer support
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="surface-card flex items-center justify-between gap-4 p-6">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                See All Loan Programs
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Conventional, FHA, VA, and alternative residential financing
                options across Maine and New Hampshire.
              </p>
            </div>
            <Button asChild variant="default" className="flex-none">
              <Link to="/loan-programs">
                All Programs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick resource links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <Link
            to="/mortgage-calculators"
            className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
          >
            <Calculator className="h-4 w-4" aria-hidden="true" />
            Mortgage Calculators
          </Link>
          <Link
            to="/mortgage-basics"
            className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Mortgage Basics
          </Link>
          <Link
            to="/loan-process"
            className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Loan Process
          </Link>
        </div>
      </div>
    </section>
  );
};
