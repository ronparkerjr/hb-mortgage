import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  HeartHandshake,
  GraduationCap,
  Compass,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, APPLY_URL } from "@/lib/nav";
import { CompactHero } from "@/components/CompactHero";

/**
 * About Us page.
 * Owner's service philosophy, direct relationship, educational approach, local focus.
 * No invented founding story, experience count, or awards.
 */
const AboutUs = () => {
  const philosophyImg =
    "https://vibe.filesafe.space/1788700173943534517/assets/f644e173-f892-429f-8211-cb886ed8140f.png";
  const heroImg =
    "https://vibe.filesafe.space/1788700173943534517/assets/4f8fb187-c4b8-40de-baf4-c47968308800.png";

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <CompactHero
        eyebrow="Based in Scarborough"
        title="A Local Mortgage Team That Stays With You"
        subtitle="Home Base Mortgage Group helps homebuyers and homeowners across Maine and New Hampshire. We work directly with you from your first question through closing — explaining your options, comparing the trade-offs, and keeping your transaction moving."
        bgImage={heroImg}
        bgAlt="The friendly local HB Mortgage Group team meeting with clients in their Scarborough office"
        meta={{
          title: "About Us — A Local Mortgage Team That Stays With You",
          description:
            "Home Base Mortgage Group is a local Maine and New Hampshire residential mortgage team. Work directly with us from first question to closing — educational, personalized service, no handoffs.",
          path: "/about-us",
        }}
        primaryCta={{ label: "Talk With Our Team", to: "/contact-us" }}
        secondaryCta={{ label: "Start My Application", to: APPLY_URL }}
      />

      {/* ===================== SERVICE PHILOSOPHY ===================== */}
      <section className="section">
        <div className="container-hb grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-[var(--radius)] shadow-lg">
              <img
                src={philosophyImg}
                alt="A mortgage advisor reviewing financing options with clients at a desk"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden max-w-[12rem] rounded-[var(--radius)] border border-border bg-card p-4 shadow-lg sm:block">
              <p className="font-display text-sm font-bold text-foreground">
                Direct service, start to closing
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                No handoff to an unfamiliar contact.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="eyebrow">Our Approach</span>
            <h2 className="mt-3 h2">
              Personal Guidance, From First Question to Closing
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                We start with your goals &mdash; the property you have in mind,
                your timing, your budget, and the questions on your mind. Before
                anyone pushes an application, we talk through payment estimates
                and the financing that could fit your situation.
              </p>
              <p>
                You work directly with the HB team throughout the transaction.
                We process our own loans and stay involved in lender
                coordination instead of passing your relationship to an
                unfamiliar contact. That means consistent answers and a team
                that knows where your file stands.
              </p>
              <p>
                Our approach is educational and personalized. We compare
                available financing options, rates, and closing costs so you can
                decide with clarity &mdash; without pressure and without
                overpromising.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild variant="quote">
                <Link to="/contact-us">
                  Let&rsquo;s Talk About Your Goals
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/home-purchase">Explore Buying a Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHAT SETS HB APART ===================== */}
      <section className="section bg-secondary/40">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">What Sets HB Apart</span>
            <h2 className="mt-3 h2">A Different Kind of Mortgage Experience</h2>
            <p className="mt-3 lead">
              The difference is in how we work &mdash; directly, patiently, and
              with you at the center of every decision.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "A consistent point of contact",
                body: "You stay with the HB team from your first conversation through closing &mdash; no handoff to someone you haven&rsquo;t met.",
              },
              {
                icon: GraduationCap,
                title: "Explanations before decisions",
                body: "We walk through payment estimates and program details so you can make choices with clarity, not pressure.",
              },
              {
                icon: Compass,
                title: "Options tailored to you",
                body: "Financing shaped by your goals, property, budget, and timeline &mdash; not a one-size-fits-all script.",
              },
              {
                icon: HeartHandshake,
                title: "A team that stays involved",
                body: "HB processes its own loans and helps coordinate lender review, keeping your transaction moving.",
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
        </div>
      </section>

      {/* ===================== HOW WE WORK ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-3 h2">Goals First, Application When Ready</h2>
            <p className="mt-3 lead">
              We earn your trust by explaining the path &mdash; not by rushing
              you into it.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Start with your questions",
                body: "Share your location, property type, budget, timeline, and what you&rsquo;re hoping to accomplish. Nothing is pulled or committed yet.",
              },
              {
                step: "02",
                title: "Understand your options",
                body: "We discuss estimated payments and suitable financing, comparing rates and closing costs. When it makes sense, we move toward prequalification or application together.",
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
                <p
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </div>
            ))}
          </div>

          {/* Lender-approval clarification */}
          <div className="mx-auto mt-10 max-w-3xl rounded-[var(--radius)] border border-border bg-muted/40 p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 flex-none text-accent"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-muted-foreground">
                We explain HB&rsquo;s direct service confidently and help
                coordinate the process &mdash; while making clear that formal
                loan approval depends on the lender&rsquo;s underwriting review
                of your completed application and the property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHO WE SERVE ===================== */}
      <section className="section bg-secondary/40">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Who We Serve</span>
            <h2 className="mt-3 h2">
              Built for Buyers, Homeowners &amp; Realtors
            </h2>
            <p className="mt-3 lead">
              Whether you&rsquo;re buying your first home, refinancing the one
              you love, or guiding clients as a real estate agent, HB is ready
              to help.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: ClipboardList,
                title: "Homebuyers",
                body: "First-time and experienced buyers across Maine and New Hampshire. We start with your goals and map out the financing that fits.",
                link: { label: "Explore Buying a Home", to: "/home-purchase" },
              },
              {
                icon: HeartHandshake,
                title: "Homeowners",
                body: "Considering a refinance or your home equity options? We&rsquo;ll help you compare the trade-offs before you decide.",
                link: {
                  label: "Review Refinance Options",
                  to: "/home-refinance",
                },
              },
              {
                icon: Users,
                title: "Real Estate Agents",
                body: "A dependable mortgage partner who communicates, coordinates, and helps your buyers understand their financing.",
                link: { label: "Partner With HB", to: "/contact-us" },
              },
            ].map(({ icon: Icon, title, body, link }) => (
              <div key={title} className="surface-card flex flex-col p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 h3">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
                <Link
                  to={link.to}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            ))}
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
                Let&rsquo;s Find Your Next Step Home
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
                Have a question or ready to get started? We&rsquo;ll help you
                understand the right next move &mdash; no pressure.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="cta" size="lg">
                  <Link to="/contact-us">
                    Talk With Our Team
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

export default AboutUs;
