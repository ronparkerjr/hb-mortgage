import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Lock,
  Sliders,
  Percent,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/nav";
import { CompactHero } from "@/components/CompactHero";

const HERO_IMG =
  "https://vibe.filesafe.space/1788700173943534517/assets/43c5328c-6580-40bf-a127-953a6902b373.png";

/**
 * Loan Programs Overview Page (`/loan-programs`).
 * Populated from the client's current website structure and content.
 */
export const LoanPrograms = () => {
  return (
    <>
      <CompactHero
        eyebrow="Loan Programs"
        title="Which Mortgage is Right for You?"
        subtitle="There are a number of different types of home loans available to you, and it can pay to familiarize yourself with them. Luckily we're here to help you choose the best type of home loan for your needs."
        bgImage={HERO_IMG}
        bgAlt="Mortgage loan program documents and calculator on a desk"
        meta={{
          title: "Loan Programs — Conventional, FHA, VA & Jumbo",
          description:
            "Which mortgage is right for you? Compare Conventional, FHA, VA, and Jumbo loan programs available in Maine and New Hampshire with HB Mortgage Group.",
          path: "/loan-programs",
        }}
      />

      {/* ===================== MORTGAGE RATE OPTIONS ===================== */}
      <section className="section bg-primary/5">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Rate Structures</span>
            <h2 className="mt-3 h2">Mortgage Rate Options</h2>
            <p className="mt-3 lead">
              Understand how your interest rate and monthly payments are
              structured over the life of your loan.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Lock,
                title: "Fixed Rate",
                body: "The most common type of loan option, the traditional fixed-rate mortgage includes monthly principal and interest payments which never change during the loan's lifetime.",
              },
              {
                icon: Sliders,
                title: "Adjustable ARM",
                body: "Adjustable-rate mortgages include interest payments which shift during the loan's term, depending on current market conditions. Typically, these loans carry a lower initial rate.",
              },
              {
                icon: Percent,
                title: "Interest Only",
                body: "Interest only mortgages are home loans in which borrowers make monthly payments solely toward the interest accruing on the loan, rather than the principal, for a specified initial period.",
              },
              {
                icon: TrendingUp,
                title: "Graduated Payments",
                body: "Graduated Payment Mortgages are loans in which mortgage payments increase annually for a predetermined period of time (e.g. five or ten years) before leveling off.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="surface-card flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 h3">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
                <div className="mt-6 pt-3">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LOAN PROGRAM OPTIONS ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Program Choices</span>
            <h2 className="mt-3 h2">Loan Program Options</h2>
            <p className="mt-3 lead">
              Explore standard conforming, government-backed, and high-balance
              loan programs available.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/f9865728293d2adda8df33ddc3c2eb405a46c974.png",
                title: "Conventional Loans",
                body: "A conventional loan is a type of loan that is not insured by the government. Conventional loans offer more flexibility and fewer restrictions for borrowers, especially those with good credit and steady income.",
              },
              {
                img: "https://d2vfmc14ehtaht.cloudfront.net/images/blue-fha-loans.png?format=webp",
                title: "FHA Home Loans",
                body: "FHA home loans are mortgages which are insured by the Federal Housing Administration (FHA), allowing borrowers to get low mortgage rates with a minimal down payment.",
              },
              {
                img: "https://d2vfmc14ehtaht.cloudfront.net/images/blue-va-loans.png?format=webp",
                title: "VA Loans",
                body: "VA loans are mortgages guaranteed by the Department of Veterans Affairs. These loans offer military veterans exceptional benefits, including competitive interest rates and zero down payment options.",
              },
              {
                img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/d7e29abaaa522a3c7583f56f6e250daf64b617f9.png",
                title: "Jumbo Loans",
                body: "A jumbo loan is a mortgage used to finance properties that exceed local conforming loan limits. Perfect for luxury home purchases or high-cost real estate markets.",
              },
            ].map(({ img, title, body }) => (
              <div
                key={title}
                className="surface-card flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <img
                    src={img}
                    alt={title}
                    className="h-44 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="h3">{title}</h3>
                    <div className="my-3 h-0.5 w-10 bg-accent" />
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-[var(--radius)] border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 flex-none text-accent"
              aria-hidden="true"
            />
            <p>
              <strong className="font-semibold text-foreground">
                Underwriting &amp; Qualification Note:
              </strong>{" "}
              All mortgage applications are subject to formal lender
              underwriting review, credit check, and appraisal. Home Base
              Mortgage Group, LLC compares options and processes loans directly
              with you throughout your transaction.
            </p>
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
              Contact our team in Scarborough, Maine to discuss loan programs,
              get payment estimates, or begin your path toward homeownership.
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

export default LoanPrograms;
