import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  FileText,
  Download,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, APPLY_URL } from "@/lib/nav";
import { CompactHero } from "@/components/CompactHero";

const HERO_IMG =
  "https://vibe.filesafe.space/1788700173943534517/assets/346b9bab-aa1e-441e-9aab-baaaf4156b3d.png";

/**
 * Online Forms Page (`/online-forms`).
 * Built using the exact content and download links from the client's current website:
 * Downloadable PDF URLA (Uniform Residential Loan Application) forms.
 */
export const OnlineForms = () => {
  const pdfForms = [
    {
      title: "Uniform Residential Loan Application (URLA)",
      url: "https://www.hbmortgagegroup.com/dl/urla.pdf",
      desc: "Standard Fannie Mae Form 1003 / Freddie Mac Form 65 used for residential mortgage applications.",
    },
    {
      title: "Uniform Residential Loan Application — Unmarried Addendum",
      url: "https://www.hbmortgagegroup.com/dl/urla-unmarried.pdf",
      desc: "Addendum form required for unmarried co-borrowers applying together.",
    },
    {
      title: "Uniform Residential Loan Application — Additional Borrower",
      url: "https://www.hbmortgagegroup.com/dl/urla-additional.pdf",
      desc: "Supplemental application schedule for additional co-borrowers.",
    },
  ];

  return (
    <>
      <CompactHero
        eyebrow="Online Resources"
        title="Online Forms & Applications"
        subtitle="To assist you in your mortgage process, we have provided certain forms you might need along the way. Included is the Uniform Residential Loan Application Form which you can download and print."
        bgImage={HERO_IMG}
        bgAlt="Printed mortgage application forms and documents on a desk"
        meta={{
          title: "Online Forms — Downloadable Mortgage Application PDF Forms",
          description:
            "Access downloadable Uniform Residential Loan Application (URLA) PDF forms from HB Mortgage Group, or request consultation with our local Maine team.",
          path: "/online-forms",
        }}
        primaryCta={{ label: "Start Online Application", to: APPLY_URL }}
        secondaryCta={{ label: "Talk With Our Team", to: "/contact-us" }}
      />

      {/* ===================== FORMS SECTION ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="eyebrow">Downloadable PDFs</span>
              <h2 className="mt-3 h2">Mortgage Application Documents</h2>
              <p className="mt-3 lead">
                The application should ideally be completed with the assistance
                of a mortgage professional. You can download and print these PDF
                forms prior to your consultation.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {pdfForms.map(({ title, url, desc }) => (
                <div
                  key={title}
                  className="surface-card flex flex-col justify-between p-6 sm:flex-row sm:items-center"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FileText className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="h3 text-base">{title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-4 flex-none">
                    <Button asChild variant="outline" size="sm">
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <Download
                          className="h-4 w-4 mr-1.5"
                          aria-hidden="true"
                        />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 flex items-start gap-3 rounded-[var(--radius)] border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-none text-accent"
                aria-hidden="true"
              />
              <p>
                <strong>Need help filling out these forms?</strong> Contact our
                Scarborough office at{" "}
                <a href={company.phoneHref} className="font-semibold underline">
                  {company.phone}
                </a>{" "}
                or email{" "}
                <a href={company.emailHref} className="font-semibold underline">
                  {company.email}
                </a>
                . We will happily guide you line-by-line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING CTA BANNER ===================== */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container-hb text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="h2 text-primary-foreground">
              Get Your Mortgage Questions Answered Today!
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
              Work directly with our team from application to closing.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact-us">
                  Contact Us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="onDarkOutline" size="lg">
                <a href={company.phoneHref}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {company.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineForms;
