import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Clock,
  Building2,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, APPLY_URL } from "@/lib/nav";
import { HeroLeadForm } from "@/components/HeroLeadForm";
import { CompactHero } from "@/components/CompactHero";

/**
 * Contact page.
 * Click-to-call/email, confirmed address, ME/NH service area, inquiry form
 * (awaiting connection), and a clear application link.
 */
const ContactUs = () => {
  const mapQuery = encodeURIComponent(`${company.addressLines.join(", ")}`);
  const heroImg =
    "https://vibe.filesafe.space/1788700173943534517/assets/606deb57-408b-4670-9b83-78f6d4b006e3.png";

  return (
    <>
      {/* ===================== PAGE HERO ===================== */}
      <CompactHero
        eyebrow="Scarborough, Maine"
        title="Let's Talk About Your Next Step"
        subtitle="Reach the HB Mortgage Group team by phone, email, or the inquiry form below. We serve homebuyers and homeowners across Maine & New Hampshire — and we're glad to start with your questions."
        bgImage={heroImg}
        bgAlt="The welcoming front entrance of HB Mortgage Group's Scarborough, Maine office"
        meta={{
          title: "Contact Us — Scarborough, Maine Mortgage Team",
          description:
            "Contact Home Base Mortgage Group in Scarborough, ME. Call (207) 215-5071, email, or send an inquiry. Residential mortgages in Maine and New Hampshire — start with your questions.",
          path: "/contact-us",
        }}
        primaryCta={{ label: company.phone, to: company.phoneHref }}
        secondaryCta={{ label: "Email Us", to: company.emailHref }}
      />

      {/* ===================== CONTACT + FORM ===================== */}
      <section className="section">
        <div className="container-hb grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Contact details */}
          <div>
            <span className="eyebrow">Get In Touch</span>
            <h2 className="mt-3 h2">Contact Information</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Prefer to reach out directly? Here&rsquo;s how to connect with our
              Scarborough office. We&rsquo;ll help you understand the right next
              move &mdash; no pressure.
            </p>

            <div className="mt-7 space-y-4">
              <a
                href={company.phoneHref}
                className="surface-card flex items-center gap-4 p-4 transition-colors hover:border-primary/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <p className="font-display text-base font-bold text-foreground">
                    {company.phone}
                  </p>
                </div>
              </a>

              <a
                href={company.emailHref}
                className="surface-card flex items-center gap-4 p-4 transition-colors hover:border-primary/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="font-display text-base font-bold text-foreground">
                    {company.email}
                  </p>
                </div>
              </a>

              <div className="surface-card flex items-start gap-4 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Building2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Office
                  </p>
                  <p className="font-display text-base font-bold text-foreground">
                    {company.addressLines[0]}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {company.addressLines[1]}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                    Get directions
                  </a>
                </div>
              </div>

              <div className="surface-card flex items-start gap-4 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Licensed Service Area
                  </p>
                  <p className="font-display text-base font-bold text-foreground">
                    {company.serviceArea}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Residential purchases and refinances only.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-[var(--radius)] border border-border bg-muted/40 p-5">
              <div className="flex items-start gap-3">
                <Clock
                  className="mt-0.5 h-5 w-5 flex-none text-accent"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ready to move forward with an application? You can{" "}
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    start your application here
                  </a>
                  , or reach out first and we&rsquo;ll walk you through the next
                  steps.
                </p>
              </div>
            </div>
          </div>

          {/* Inquiry form — same compact hero form as the homepage */}
          <div>
            <HeroLeadForm />
          </div>
        </div>
      </section>

      {/* ===================== CLOSING CTA ===================== */}
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
                Prefer to Talk It Through First?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
                We&rsquo;re happy to start with your questions &mdash; payment
                estimates, program options, and the right next step for your
                situation.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild variant="cta" size="lg">
                  <a href={company.phoneHref}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call {company.phone}
                  </a>
                </Button>
                <Button asChild variant="onDarkOutline" size="lg">
                  <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                    Start My Application
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
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

export default ContactUs;
