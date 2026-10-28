import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { company, footerNav, legalLinks, APPLY_URL } from "@/lib/nav";

/** Equal Housing Opportunity mark — inline SVG (standard compliance graphic). */
function EqualHousingMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 48"
      className={className}
      role="img"
      aria-label="Equal Housing Opportunity"
    >
      <rect width="64" height="48" className="fill-background" />
      <path
        d="M32 6 L52 22 V42 H12 V22 Z"
        className="fill-none stroke-foreground"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="26" y="30" width="12" height="12" className="fill-foreground" />
      <text
        x="32"
        y="46.5"
        textAnchor="middle"
        className="fill-foreground"
        fontSize="4.5"
        fontWeight="700"
      >
        EQUAL OPPORTUNITY
      </text>
    </svg>
  );
}

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/40">
      {/* CTA band */}
      <div className="band-navy">
        <div className="container-hb flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-display text-xl font-bold text-primary-foreground">
              Ready to talk through your options?
            </p>
            <p className="mt-1 text-sm text-primary-foreground/80">
              A low-pressure conversation or a ready-to-apply path — your call.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button asChild variant="onDarkOutline" size="sm">
              <Link to="/personalized-quote">Get a Quote</Link>
            </Button>
            <Button asChild variant="onDark" size="sm">
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-hb grid grid-cols-2 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Identity */}
        <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
          <BrandMark variant="default" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {company.legalName} — residential mortgage purchases and refinances
            throughout {company.serviceArea}. Work directly with our team from
            first question to closing.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={company.emailHref}
                className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                {company.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2 text-muted-foreground">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        {/* Link columns */}
        {footerNav.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
              {col.title}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Compliance + legal bar */}
      <div className="border-t border-border">
        <div className="container-hb flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <div className="flex items-center gap-4">
            <EqualHousingMark className="h-9 w-12" />
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck
                className="h-4 w-4 text-primary"
                aria-hidden="true"
              />
              <span>
                {company.legalName} · NMLS #{company.nmls} ·{" "}
                <a
                  href={company.nmlsConsumerAccessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline-offset-2 hover:text-primary hover:underline"
                >
                  NMLS Consumer Access
                </a>
              </span>
            </div>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="container-hb pb-6">
          <p className="text-center text-[0.7rem] leading-relaxed text-muted-foreground/80 md:text-left">
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved. Licensed in {company.serviceArea}. This is not a
            commitment to lend. Programs, rates, and availability are subject to
            change without notice. All loans subject to credit approval and
            underwriting guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
};
