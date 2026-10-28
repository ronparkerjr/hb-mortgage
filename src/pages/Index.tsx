import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
  Home,
  RefreshCw,
  HelpCircle,
  MessageSquare,
  Users,
  ClipboardList,
  SlidersHorizontal,
  Handshake,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, APPLY_URL } from "@/lib/nav";
import { usePageMeta } from "@/hooks/usePageMeta";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { LoanProgramsSection } from "@/components/home/LoanProgramsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroLeadForm } from "@/components/HeroLeadForm";

/**
 * Stage 5–8 — Homepage.
 * Hero, action paths, personal guidance, clear path, loan programs,
 * realtor partner band, FAQs, final CTA, and Google reviews.
 */
const Index = () => {
  usePageMeta({
    title: "HB Mortgage Group",
    description:
      "HB Mortgage Group helps homebuyers and homeowners across Maine and New Hampshire compare financing options, understand their numbers, and move forward with confidence. Work directly with our team from first question to closing.",
    path: "/",
  });
  const heroImg =
    "https://vibe.filesafe.space/1788700173943534517/assets/5ed69dbb-5689-40fe-b40c-0105bdc18abc.png";

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* Background image with navy overlay for readable text */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="A welcoming New England home with a covered front porch at golden hour"
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
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(50% 50% at 85% 15%, hsl(var(--primary-glow)) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
        </div>

        <div className="container-hb relative grid grid-cols-1 items-center gap-10 pt-10 pb-16 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pt-12 lg:pb-24">
          {/* Copy column */}
          <div className="max-w-2xl">
            <div className="mb-6">
              <img
                src="https://vibe.filesafe.space/1788700173943534517/attachments/667435df-7414-4816-adec-0a4ac4c68974.png"
                alt="5.0 Google Reviews - Trusted by Homeowners"
                className="h-28 sm:h-32 w-auto object-contain drop-shadow-md"
              />
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {company.serviceArea} Licensed
            </span>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Your Home. Your Goals. A Mortgage Team That Stays With You.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Buying or refinancing in Maine or New Hampshire? Get clear
              answers, explore your options, and work directly with a local team
              from your first conversation through closing.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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

            <p className="mt-5 text-sm text-primary-foreground/75">
              Start with your questions. We&rsquo;ll help you understand the
              next step.
            </p>

            {/* Service-area trust line */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/85">
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 font-medium transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Work directly with our team
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {company.addressLines[1]}
              </span>
            </div>
          </div>

          {/* Compact lead form */}
          <div className="relative lg:justify-self-end">
            <HeroLeadForm />
          </div>
        </div>
      </section>

      {/* ===================== GOOGLE REVIEWS SECTION ===================== */}
      <GoogleReviewsSection />

      {/* ===================== ACTION PATHS ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Where do you want to start?</span>
            <h2 className="mt-3 h2">Three clear paths forward</h2>
            <p className="mt-3 lead">
              Tell us your goal. We&rsquo;ll walk through your numbers and
              options &mdash; no pressure, no jargon.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Buy a Home */}
            <Link
              to="/home-purchase"
              className="surface-card group flex flex-col p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Home className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 h3">Buy a Home</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Prequalification guidance, payment estimates, and loan programs
                for purchases in Maine and New Hampshire.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Explore purchase options
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>

            {/* Refinance My Home */}
            <Link
              to="/home-refinance"
              className="surface-card group flex flex-col p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <RefreshCw className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 h3">Refinance My Home</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Compare refinancing options, rates, and closing costs to see
                what makes sense for your situation.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                See refinance options
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>

            {/* Explore Home Equity Options */}
            <Link
              to="/contact-us"
              className="surface-card group flex flex-col p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cta/10 text-cta transition-colors group-hover:bg-cta group-hover:text-cta-foreground">
                <HelpCircle className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 h3">Explore Home Equity Options</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Curious about tapping your home&rsquo;s equity? Let&rsquo;s talk
                through what may be available for your situation.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                Start a conversation
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>

          {/* Service-area trust line */}
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Proudly serving homebuyers and homeowners across{" "}
            <span className="font-semibold text-foreground">
              {company.serviceArea}
            </span>{" "}
            &middot; {company.legalName} &middot; NMLS #{company.nmls}
          </p>
        </div>
      </section>

      {/* ===================== PERSONAL GUIDANCE ===================== */}
      <section className="section bg-primary/5">
        <div className="container-hb grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Image column */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[var(--radius)] shadow-lg">
              <img
                src="https://vibe.filesafe.space/1788700173943534517/assets/3c6e614b-76e0-44c7-b692-5f823defe945.png"
                alt="A mortgage advisor reviewing home listings with a couple at a sunlit kitchen table"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating accent badge */}
            <div className="absolute -bottom-5 -right-3 hidden rounded-[var(--radius)] bg-primary px-5 py-4 text-primary-foreground shadow-xl sm:block">
              <p className="font-display text-2xl font-extrabold leading-none">
                One team
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/80">
                Start to closing
              </p>
            </div>
          </div>

          {/* Copy column */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Personal Guidance</span>
            <h2 className="mt-3 h2">From First Question to Closing</h2>
            <p className="mt-4 lead">
              You won&rsquo;t be handed off to an unfamiliar bank contact. The
              HB team stays with you through every step &mdash; answering
              questions, explaining your options, and coordinating the details
              that move your loan forward.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                {
                  icon: Users,
                  title: "A consistent point of contact",
                  body: "Work with the same HB team members from your first conversation through closing day.",
                },
                {
                  icon: ClipboardList,
                  title: "Explanations before decisions",
                  body: "We walk through the numbers and what they mean so you can choose with confidence.",
                },
                {
                  icon: SlidersHorizontal,
                  title: "Options tailored to you",
                  body: "Financing choices shaped by your goals, property, budget, and timeline &mdash; not a one-size script.",
                },
                {
                  icon: Handshake,
                  title: "A team that stays involved",
                  body: "HB processes its own loans and helps coordinate lender review, keeping the relationship close.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-foreground">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-muted-foreground">
              We&rsquo;ll compare available rates and closing costs so you can
              see the trade-offs &mdash; without promising the lowest rate or
              guaranteed savings.
            </p>

            <div className="mt-7">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact-us">
                  Let&rsquo;s Talk About Your Goals
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CLEAR PATH FORWARD ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How It Works</span>
            <h2 className="mt-3 h2">A Clear Path Forward</h2>
            <p className="mt-3 lead">
              Three straightforward steps &mdash; no pressure, no jargon. We
              start with your questions and help you understand the next move.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us what you have in mind",
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

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="onDarkOutline"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/contact-us">
                Start With Your Questions
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== LOAN PROGRAMS OVERVIEW ===================== */}
      <LoanProgramsSection />

      {/* ===================== FAQS ===================== */}
      <FaqSection />

      {/* ===================== FINAL CTA ===================== */}
      <FinalCtaSection />

      {/* Build-status notice (internal, not launch-ready) */}
      <section className="section-sm border-t border-border bg-muted/30">
        <div className="container-hb text-center">
          <p className="text-sm text-muted-foreground">
            This website is under active development. Pages and content are
            being added stage by stage and are not yet launch-ready.
          </p>
        </div>
      </section>
    </>
  );
};

export default Index;
