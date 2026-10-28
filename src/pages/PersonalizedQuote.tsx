import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Calculator,
  FileText,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, APPLY_URL } from "@/lib/nav";
import { HeroLeadForm } from "@/components/HeroLeadForm";
import { usePageMeta } from "@/hooks/usePageMeta";

/**
 * Stage 14 — Personalized Quote page.
 * Low-pressure conversation path: share goals, get payment estimates and
 * option comparisons. No live rate table; no promised savings or rate offers.
 */
const PersonalizedQuote = () => {
  usePageMeta({
    title: "Request a Personalized Mortgage Conversation",
    description:
      "Instead of a generic rate table, talk through your goals, property, budget, and timing with HB Mortgage Group. Get estimated payments, option comparisons, and clear next steps — no pressure.",
    path: "/personalized-quote",
  });
  // No default goal — visitor selects their own.
  const heroImg =
    "https://vibe.filesafe.space/1788700173943534517/assets/11dbeb8f-89eb-428f-8f32-bd17d5116974.png";

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="A mortgage advisor on a phone call discussing personalized financing options"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(120deg, hsl(var(--primary) / 0.82) 0%, hsl(var(--primary) / 0.72) 55%, hsl(var(--primary-glow) / 0.65) 100%)",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="container-hb relative py-16 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              No Pressure, No Obligation
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Request a Personalized Conversation
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Instead of a generic rate table, let&rsquo;s talk through your
              goals, property, budget, and timing. We&rsquo;ll walk through
              estimated payments, suitable financing options, and closing costs
              &mdash; so you can decide with clarity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild variant="cta" size="lg">
                <a href={company.phoneHref}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {company.phone}
                </a>
              </Button>
              <Button asChild variant="onDarkOutline" size="lg">
                <Link to="/mortgage-calculators">
                  Explore Payment Estimates
                </Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/75">
              {company.legalName} &middot; NMLS #{company.nmls} &middot;{" "}
              {company.serviceArea}
            </p>
          </div>
        </div>
      </section>

      {/* ===================== WHAT TO EXPECT ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What You&rsquo;ll Get</span>
            <h2 className="mt-3 h2">A Conversation, Not a Sales Pitch</h2>
            <p className="mt-3 lead">
              Share what you have in mind, and we&rsquo;ll help you understand
              the trade-offs before any application.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Calculator,
                title: "Estimated payments",
                body: "We discuss monthly payment estimates based on your scenario &mdash; clearly labeled as estimates, not an offer to lend.",
              },
              {
                icon: FileText,
                title: "Option comparisons",
                body: "Compare available financing options, rate structures, and closing costs side by side, with the trade-offs explained.",
              },
              {
                icon: HelpCircle,
                title: "Clear next steps",
                body: "When you&rsquo;re ready, we&rsquo;ll outline the path to prequalification or application &mdash; at your pace.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="surface-card flex flex-col p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 h3">{title}</h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-[var(--radius)] border border-border bg-muted/40 p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 flex-none text-accent"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-muted-foreground">
                We don&rsquo;t promise the lowest rate, guaranteed approval, or
                universal savings. Estimates are illustrative; formal approval
                depends on the lender&rsquo;s underwriting review of your
                completed application and the property. A conversation does not
                automatically pull your credit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUOTE FORM ===================== */}
      <section className="section bg-secondary/40">
        <div className="container-hb grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="eyebrow">Start Here</span>
            <h2 className="mt-3 h2">Tell Us About Your Goals</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Share a few details and we&rsquo;ll reach out to walk through your
              options. This is a conversation request &mdash; not a loan
              application, and not a commitment to lend.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Buying or refinancing in Maine or New Hampshire.",
                "Residential mortgages only &mdash; no commercial lending.",
                "You work directly with the HB team throughout.",
                "Home equity inquiries welcome &mdash; we&rsquo;ll confirm available products with you.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 flex-none text-accent"
                    aria-hidden="true"
                  />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <Button asChild variant="default">
                <Link to="/mortgage-calculators">
                  <Calculator className="h-4 w-4" aria-hidden="true" />
                  Try the Payment Calculator
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <HeroLeadForm />
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
                Ready to Move Faster?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
                If you&rsquo;re ready to apply, you can start your application
                directly &mdash; or keep the conversation going first.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="cta" size="lg">
                  <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                    Start My Application
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="onDarkOutline" size="lg">
                  <a href={company.phoneHref}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call {company.phone}
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

export default PersonalizedQuote;
