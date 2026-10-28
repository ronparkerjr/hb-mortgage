import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Home,
  Users,
  ClipboardList,
  SlidersHorizontal,
  Handshake,
  CheckCircle2,
  Calculator,
  BookOpen,
  RefreshCw,
  HelpCircle,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { company, APPLY_URL } from "@/lib/nav";
import { CompactHero } from "@/components/CompactHero";

/**
 * Stage 9 — Buy a Home page.
 * Addresses first-time and experienced buyers in Maine & New Hampshire.
 * Educational approach: goals + payment expectations first, then next steps.
 * No invented income limits, minimum scores, rate offers, or time guarantees.
 */
const HomePurchase = () => {
  const heroImg =
    "https://vibe.filesafe.space/1788700173943534517/assets/ecb65346-2047-4949-b8d9-55c2f8978b87.png";

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <CompactHero
        eyebrow="Buying a Home"
        title="Make Your Next Move With a Clear Mortgage Plan"
        subtitle="Whether it's your first home or your next one, HB starts with your goals and payment expectations — then helps you understand the right next steps. You work directly with our team from first conversation through closing."
        bgImage={heroImg}
        bgAlt="A couple receiving the keys to their new New England colonial home at golden hour"
        meta={{
          title: "Buy a Home — Mortgage Purchase Guidance",
          description:
            "Buying a home in Maine or New Hampshire? HB Mortgage Group starts with your goals and payment expectations, then guides prequalification, program options, and next steps — no pressure.",
          path: "/home-purchase",
        }}
        primaryCta={{ label: "Get Help Getting Started", to: "/contact-us" }}
        secondaryCta={{ label: "Start My Application", to: APPLY_URL }}
      />

      {/* ===================== BENEFITS ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Buyers Choose HB</span>
            <h2 className="mt-3 h2">A Mortgage Plan Built Around Your Goals</h2>
            <p className="mt-3 lead">
              We don&rsquo;t start with an application. We start with what
              you&rsquo;re trying to accomplish &mdash; then map out the
              financing that fits.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Work with one team",
                body: "You stay with the HB team from your first question through closing &mdash; no handoff to an unfamiliar contact.",
              },
              {
                icon: ClipboardList,
                title: "Explanations first",
                body: "We walk through payment estimates and program details so you can make decisions with clarity, not pressure.",
              },
              {
                icon: SlidersHorizontal,
                title: "Options tailored to you",
                body: "Financing shaped by your goals, property, budget, and timeline &mdash; not a one-size-fits-all script.",
              },
              {
                icon: Handshake,
                title: "Coordination that continues",
                body: "HB processes its own loans and helps coordinate lender review, keeping your transaction moving.",
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
      <section className="section bg-secondary/40">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How It Works</span>
            <h2 className="mt-3 h2">Your Path to Purchase</h2>
            <p className="mt-3 lead">
              Three straightforward steps. We move at your pace and explain each
              one as we go.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us your goals",
                body: "Share your location, property type, budget, timeline, and the questions on your mind. Nothing is pulled or committed yet.",
              },
              {
                step: "02",
                title: "Understand your options",
                body: "We discuss estimated payments and suitable financing. When it makes sense, we move toward prequalification or application together.",
              },
              {
                step: "03",
                title: "Move forward with support",
                body: "HB helps coordinate the application, documentation, lender review, and closing process &mdash; staying involved throughout.",
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

          {/* Prequalification vs. preapproval clarification */}
          <div className="mx-auto mt-10 max-w-3xl rounded-[var(--radius)] border border-border bg-muted/40 p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 flex-none text-accent"
                aria-hidden="true"
              />
              <div className="text-sm leading-relaxed text-muted-foreground">
                <p className="font-semibold text-foreground">
                  Prequalification vs. preapproval
                </p>
                <p className="mt-1.5">
                  <span className="font-medium text-foreground">
                    Prequalification
                  </span>{" "}
                  is an early, informal estimate based on the basics you share
                  &mdash; helpful for setting expectations and a budget range.
                  <span className="font-medium text-foreground">
                    {" "}
                    Preapproval
                  </span>{" "}
                  goes further: it involves a credit check and documented
                  financial details, giving sellers and agents a stronger signal
                  of your borrowing power. Neither is a final loan approval.
                  Formal approval depends on lender underwriting review of your
                  completed application and the property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LOAN PROGRAM LINKS ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Loan Programs</span>
            <h2 className="mt-3 h2">Financing That Fits Your Purchase</h2>
            <p className="mt-3 lead">
              We&rsquo;ll help you understand which programs make sense &mdash;
              then compare the details together.
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
                <Link
                  to="/loan-programs"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>

          {/* First-time buyer + all programs */}
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
                  to="/contact-us"
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
                  across Maine and New Hampshire.
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

      {/* ===================== COMMON QUESTIONS ===================== */}
      <section className="section bg-secondary/40">
        <div className="container-hb grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <span className="eyebrow">Common Questions</span>
            <h2 className="mt-3 h2">Buying a Home, Answered</h2>
            <p className="mt-4 lead">
              Straight answers to the questions buyers ask most. Have one that
              isn&rsquo;t here? We&rsquo;re happy to talk it through.
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
                q: "Where do you help buyers purchase?",
                a: "We help homebuyers throughout Maine and New Hampshire with residential purchases. We don\u2019t handle commercial lending.",
              },
              {
                q: "Can we talk before I apply?",
                a: "Yes \u2014 and we encourage it. Start with your questions, goals, and timeline. We\u2019ll discuss payment estimates and options before you move toward an application or prequalification.",
              },
              {
                q: "What\u2019s the difference between prequalification and preapproval?",
                a: "Prequalification is an early, informal estimate based on the basics you share. Preapproval goes further \u2014 it involves a credit check and documented financial details. Neither is a final loan approval; formal approval depends on lender underwriting of your completed application and the property.",
              },
              {
                q: "Do you work with first-time buyers?",
                a: "Absolutely. First-time buyer guidance is a service we provide \u2014 we walk through budget, timing, and prequalification step by step. It isn\u2019t a separate loan type.",
              },
              {
                q: "Will your team stay involved after I apply?",
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
                Ready to Take the Next Step?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
                Whether you&rsquo;re ready to apply or just have a few
                questions, we&rsquo;ll help you find the right next move &mdash;
                no pressure.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="cta" size="lg">
                  <Link to="/contact-us">
                    Get Help Getting Started
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
    </>
  );
};

export default HomePurchase;
