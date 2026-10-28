import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, APPLY_URL } from "@/lib/nav";
import { usePageMeta } from "@/hooks/usePageMeta";

interface Cta {
  label: string;
  to: string;
}

interface CompactHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  bgImage: string;
  bgAlt: string;
  meta: {
    title: string;
    description: string;
    path: string;
  };
  primaryCta?: Cta;
  secondaryCta?: Cta;
}

/** Render a CTA as the correct element based on its destination protocol. */
const CtaLink = ({
  cta,
  variant,
}: {
  cta: Cta;
  variant: "cta" | "onDarkOutline";
}) => {
  const { to, label } = cta;
  const isExternal = to.startsWith("http");
  const isTelOrMail = to.startsWith("tel:") || to.startsWith("mailto:");
  const showPhoneIcon = to.startsWith("tel:");

  const inner = (
    <>
      {showPhoneIcon && <Phone className="h-4 w-4" aria-hidden="true" />}
      {label}
      {!showPhoneIcon && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </>
  );

  if (isExternal) {
    return (
      <Button asChild variant={variant} size="lg">
        <a href={to} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      </Button>
    );
  }
  if (isTelOrMail) {
    return (
      <Button asChild variant={variant} size="lg">
        <a href={to}>{inner}</a>
      </Button>
    );
  }
  return (
    <Button asChild variant={variant} size="lg">
      <Link to={to}>{inner}</Link>
    </Button>
  );
};

/**
 * Compact page hero for sub-pages.
 * Short height, on-topic background image, no webform — gets visitors to
 * content quickly without scrolling past a tall hero.
 */
export const CompactHero = ({
  eyebrow,
  title,
  subtitle,
  bgImage,
  bgAlt,
  meta,
  primaryCta = { label: "Talk With a Mortgage Expert", to: "/contact-us" },
  secondaryCta = { label: "Start My Application", to: APPLY_URL },
}: CompactHeroProps) => {
  usePageMeta(meta);

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={bgAlt}
          className="h-full w-full object-cover opacity-55"
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, hsl(var(--primary) / 0.55) 0%, hsl(var(--primary) / 0.42) 42%, hsl(var(--primary) / 0.20) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="container-hb relative py-10 lg:py-14">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {eyebrow} &middot; {company.serviceArea}
          </span>

          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CtaLink cta={primaryCta} variant="cta" />
            <CtaLink cta={secondaryCta} variant="onDarkOutline" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactHero;
