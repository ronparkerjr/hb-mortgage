import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  RefreshCw,
  Users,
  ClipboardList,
  SlidersHorizontal,
  Handshake,
  CheckCircle2,
  Calculator,
  BookOpen,
  HelpCircle,
  Compass,
  TrendingDown,
  Scale,
  Home,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { company } from "@/lib/nav";
import { CompactHero } from "@/components/CompactHero";

/**
 * Stage 10 — Refinance page.
 * Goals: change payment/term, compare overall financing costs, access equity when suitable.
 * Explains lower payment ≠ lower lifetime cost; closing costs + time in home matter.
 * No promised savings, no example rate presented as a current offer.
 * Invites a secure conversation; no sensitive loan documents collected in a public form.
 */
const HomeRefinance = () => {
  const heroImg =
    "https://vibe.filesafe.space/1788700173943534517/assets/9092792a-ecd1-4fc6-9dd5-598c05090f4e.png";

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <CompactHero
        eyebrow="Refinance"
        title="See Whether Refinancing Fits Your Goals"
        subtitle="Refinancing can change your payment, your term, or your overall financing — but a lower monthly payment doesn't always mean lower lifetime cost. We'll help you compare the real trade-offs so you can decide what makes sense for your home and your plans."
        bgImage={heroImg}
        bgAlt="A homeowner reviewing refinance documents at a sunlit kitchen table"
        meta={{
          title: "Refinance Your Mortgage — Compare Your Options",
          description:
            "See whether refinancing fits your goals in Maine or New Hampshire. Compare payment, term, overall financing costs, and equity options with HB Mortgage Group — no promised savings.",
          path: "/home-refinance",
        }}
        primaryCta={{ label: "Review My Refinance Options", to: "/contact-us" }}
        secondaryCta={{ label: company.phone, to: company.phoneHref }}
      />

      {/* ===================== REFINANCE GOALS ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Refinance?</span>
            <h2 className="mt-3 h2">Common Reasons Homeowners Refinance</h2>
            <p className="mt-3 lead">
              Refinancing replaces your current mortgage with a new one. The
              right reason depends on your goals &mdash; not on a rate alone.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: TrendingDown,
                title: "Change your payment or term",
                body: "Adjusting your term can raise or lower your monthly payment. A shorter term often means higher payments but less interest over time; a longer term can lower payments but cost more overall.",
              },
              {
                icon: Scale,
                title: "Compare overall financing costs",
                body: "We help you weigh the total cost of a new loan against your current one &mdash; including rate, term, and closing costs &mdash; so you see the full picture, not just the monthly number.",
              },
              {
                icon: Home,
                title: "Access equity when suitable",
                body: "If you're considering tapping your home's equity, we'll talk through what may be available and whether it fits your situation &mdash; after confirming the specific products.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="surface-card flex flex-col p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 h3">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BENEFITS ===================== */}
      <section className="section bg-secondary/40">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Homeowners Choose HB</span>
            <h2 className="mt-3 h2">A Refinance Review Built Around You</h2>
            <p className="mt-3 lead">
              We don&rsquo;t push a refinance. We help you understand whether
              one makes sense &mdash; with the same team from first question to
              closing.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Work with one team",
                body: "You stay with the HB team throughout your refinance &mdash; no handoff to an unfamiliar contact.",
              },
              {
                icon: ClipboardList,
                title: "Explanations first",
                body: "We walk through payment estimates, term changes, and closing costs so you can decide with clarity.",
              },
              {
                icon: SlidersHorizontal,
                title: "Options tailored to you",
                body: "Financing choices shaped by your goals, budget, and how long you plan to keep the home.",
              },
              {
                icon: Handshake,
                title: "Coordination that continues",
                body: "HB processes its own loans and helps coordinate lender review, keeping your refinance moving.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="surface-card flex flex-col p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 h3">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How It Works</span>
            <h2 className="mt-3 h2">Your Refinance Review</h2>
            <p className="mt-3 lead">
              Three straightforward steps. <br />
              We move at your pace and explain each one as we go.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us your goals",
                body: "Share what you'd like to change about your current loan, your budget, and how long you plan to stay in the home. Nothing is pulled or committed yet.",
              },
              {
                step: "02",
                title: "Understand your options",
                body: "We compare available refinancing options, rates, and closing costs &mdash; and walk through the real trade-offs for your situation.",
              },
              {
                step: "03",
                title: "Move forward with support",
                body: "If refinancing makes sense, HB helps coordinate the application, documentation, lender review, and closing process &mdash; staying involved throughout.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="surface-card relative flex flex-col p-7"
              >
                <span className="font-display text-4xl font-extrabold text-primary/15">
                  {step}
                </span>
                <h3 className="mt-3 h3">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Lender-approval clarification */}
          <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-[var(--radius)] border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 flex-none text-accent"
              aria-hidden="true"
            />
            <p>
              A conversation helps you understand your options and next steps.
              Formal loan approval depends on lender underwriting review, and a
              credit check is part of the application process when you&rsquo;re
              ready to move forward.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== SECURE CONVERSATION ===================== */}
      <section className="section bg-secondary/40">
        <div className="container-hb">
          <div className="mx-auto max-w-3xl rounded-[var(--radius)] border border-border bg-card p-8 shadow-sm sm:p-10">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Lock className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h2 className="h3">
                  Let&rsquo;s Talk Through Your Current Loan
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The best first step is a conversation. Share your goals and
                  questions, and we&rsquo;ll discuss your current loan details
                  through a secure, private channel &mdash; not a public form.
                  Please don&rsquo;t include sensitive documents or account
                  numbers in an initial message; we&rsquo;ll guide you to a
                  secure way to share anything needed.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact-us">
                  Review My Refinance Options
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="quote" size="lg">
                <a href={company.phoneHref}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {company.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== COMMON QUESTIONS ===================== */}
      <section className="section">
        <div className="container-hb grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <span className="eyebrow">Common Questions</span>
            <h2 className="mt-3 h2">Refinancing, Answered</h2>
            <p className="mt-4 lead">
              Straight answers to the questions homeowners ask most. Have one
              that isn&rsquo;t here? We&rsquo;re happy to talk it through.
            </p>
            <div className="mt-6">
              <Button asChild variant="quote">
                <Link to="/faq">
                  See All FAQs
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Will refinancing definitely save me money?",
                a: "Not necessarily. A lower monthly payment can still cost more over the life of the loan if the term is extended, and closing costs factor into the total picture. We'll help you compare the real trade-offs for your situation rather than promising savings.",
              },
              {
                q: "Can we talk before I apply?",
                a: "Yes \u2014 and we encourage it. Start with your goals and questions. We'll discuss your current loan, estimated payments, and options before you move toward an application.",
              },
              {
                q: "Can you help me compare refinance options?",
                a: "Absolutely. We'll compare available refinancing options, rates, and closing costs so you can see the trade-offs \u2014 including how long you'd need to stay in the home for the numbers to make sense.",
              },
              {
                q: "Can I access my home's equity through a refinance?",
                a: "Equity access may be possible depending on your situation and the products available. We'll talk through what may fit after confirming the specific products \u2014 we won't advertise a product as available before it's confirmed.",
              },
              {
                q: "Will your team stay involved throughout the process?",
                a: "Yes. You work directly with the HB team from your first conversation through closing. We process our own loans and help coordinate lender review instead of handing you off to an unfamiliar contact.",
              },
            ].map(({ q, a }, i) => (
              <AccordionItem key={q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===================== RELATED RESOURCES ===================== */}
      <section className="section bg-secondary/40">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Related Resources</span>
            <h2 className="mt-3 h2">Tools to Help You Decide</h2>
            <p className="mt-3 lead">
              Explore the numbers and concepts before you talk with our team.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Link
              to="/mortgage-calculators"
              className="surface-card group flex flex-col p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Calculator className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 h3">Mortgage Calculators</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Estimate payments and compare scenarios to see how term and rate
                changes could affect your numbers.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Open calculators
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>

            <Link
              to="/mortgage-basics"
              className="surface-card group flex flex-col p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 h3">Mortgage Basics</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Plain-English guides to the concepts behind refinancing &mdash;
                from equity to closing costs.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn the basics
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>

            <Link
              to="/loan-process"
              className="surface-card group flex flex-col p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <RefreshCw className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 h3">Loan Process</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                What to expect from application through closing when you
                refinance with HB.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                See the process
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING CTA ===================== */}
      <section className="section">
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
                Ready to Compare Your Options?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
                Whether you&rsquo;re ready to move forward or just exploring,
                we&rsquo;ll help you see whether refinancing fits your goals
                &mdash; no pressure.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="cta" size="lg">
                  <Link to="/contact-us">
                    Review My Refinance Options
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="onDarkOutline" size="lg">
                  <a href={company.phoneHref}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {company.phone}
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
    </>
  );
};

export default HomeRefinance;
