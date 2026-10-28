import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/nav";
import { CompactHero } from "@/components/CompactHero";

const HERO_IMG =
  "https://vibe.filesafe.space/1788700173943534517/assets/b457c151-7607-4526-a169-7a64e7726741.png";

/**
 * Mortgage Basics Page (`/mortgage-basics`).
 * Built using the exact content and images from the client's current website:
 * Cards for Application Checklist, Credit, Closing Costs, Appraisals,
 * Private Mortgage Insurance (PMI), Refinance, Glossary of Terms, and Foreclosure.
 */
export const MortgageBasics = () => {
  const topics = [
    {
      title: "Application Checklist",
      img: "https://d2vfmc14ehtaht.cloudfront.net/images/library/mortgage-basics/app-checklist.png?format=webp",
      desc: "Applying for a mortgage can seem like a daunting process. We've created a checklist of items for you to compile, complete, and acknowledge before applying.",
    },
    {
      title: "Credit",
      img: "https://d2vfmc14ehtaht.cloudfront.net/images/library/mortgage-basics/credit.png?format=webp",
      desc: "Credit history is a recorded file of past and current credit that is utilized to compile a credit score. Learn about how credit works and how to improve your score.",
    },
    {
      title: "Closing Costs",
      img: "https://d2vfmc14ehtaht.cloudfront.net/images/library/mortgage-basics/closing-costs.png?format=webp",
      desc: "A closing cost is a payment required to finalize a home loan and is separate from a down payment. Read about closing costs, their purpose, and how you can pay them.",
    },
    {
      title: "Appraisals",
      img: "https://d2vfmc14ehtaht.cloudfront.net/images/library/mortgage-basics/appraisals.png?format=webp",
      desc: "An appraisal is an estimate of a property's fair market value required by a lender to ensure the loan amount is not more than the property value.",
    },
    {
      title: "Private Mortgage Insurance (PMI)",
      img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/7e9d6526d63ba6b820fc0ebac516a9d5bd0f8fc8.png",
      desc: "PMI protects a lender from increased risk when borrowers put less than 20% down on a home. Learn about how PMI works, costs, and how to avoid it.",
    },
    {
      title: "Refinance",
      img: "https://d2vfmc14ehtaht.cloudfront.net/images/library/mortgage-basics/refinance.png?format=webp",
      desc: "Refinancing your mortgage is a common practice used to lower monthly payments, lower interest rates, adjust loan terms, or access home equity.",
    },
    {
      title: "Glossary of Terms",
      img: "https://d2vfmc14ehtaht.cloudfront.net/images/library/mortgage-basics/glossary.png?format=webp",
      desc: "Explore a full dictionary of essential homebuying and mortgage terms to help you navigate your financing journey with confidence.",
    },
    {
      title: "Foreclosure",
      img: "https://d2vfmc14ehtaht.cloudfront.net/images/library/mortgage-basics/foreclosure.png?format=webp",
      desc: "Foreclosure is the legal process of a lender seizing a property due to defaulted payments. Learn about the process and key steps to avoid it.",
    },
  ];

  return (
    <>
      <CompactHero
        eyebrow="Mortgage Basics"
        title="Jump in and Get an Overview of Common Mortgage Terms"
        subtitle="Demystifying the language of real estate financing so you feel fully informed and confident at every turn."
        bgImage={HERO_IMG}
        bgAlt="Open book and reading glasses with a house figurine, educational concept"
        meta={{
          title: "Mortgage Basics — Overview of Key Mortgage Terms",
          description:
            "Jump in and get an overview of common mortgage terms with HB Mortgage Group: Application Checklist, Credit, Closing Costs, Appraisals, PMI, Refinancing, and Glossary.",
          path: "/mortgage-basics",
        }}
        secondaryCta={{ label: "Explore Loan Programs", to: "/loan-programs" }}
      />

      {/* ===================== TOPICS GRID ===================== */}
      <section className="section bg-secondary/30">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Knowledge Center</span>
            <h2 className="mt-3 h2">Mortgage Basics Topics</h2>
            <p className="mt-3 lead">
              Click any card to discuss that topic directly with our local
              mortgage advisors.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map(({ title, img, desc }) => (
              <div
                key={title}
                className="surface-card flex flex-col justify-between overflow-hidden p-0 transition-shadow hover:shadow-md"
              >
                <div>
                  <img
                    src={img}
                    alt={title}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <h3 className="h3 text-base">{title}</h3>
                    <div className="my-2 h-0.5 w-8 bg-accent" />
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {desc}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="cta" size="lg">
              <Link to="/loan-programs">
                Learn About Our Loan Programs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
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
              Contact our Scarborough team for plain-English advice and clear
              options.
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

export default MortgageBasics;
