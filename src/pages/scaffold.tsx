import { useEffect } from "react";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { APPLY_URL } from "@/lib/nav";

/**
 * Scaffolded route pages. Each maps to an inventoried nav entry.
 * All are placeholders — tracked as unfinished, not launch-ready.
 *
 * Pages now built as real pages (removed from here):
 *   /home-purchase, /home-refinance, /about-us, /loan-programs,
 *   /mortgage-calculators, /contact-us, /personalized-quote
 */

export const SelectLoanOfficer = () => (
  <PagePlaceholder
    title="Select a Loan Officer"
    description="Choose a loan officer to begin your application."
  />
);

export const PreQualify = () => (
  <PagePlaceholder
    title="Pre-Qualify"
    description="Understand your next steps toward prequalification."
  />
);

export const ApplyNow = () => {
  useEffect(() => {
    window.location.href = APPLY_URL;
  }, []);
  return null;
};

export const DownloadApp = () => (
  <PagePlaceholder
    title="Download the Mobile App"
    description="Access your loan details on the go."
  />
);

export const DownloadEbook = () => (
  <PagePlaceholder
    title="Download Your Guide"
    description="A helpful guide for homebuyers and homeowners."
  />
);

export const ThankYou = () => (
  <PagePlaceholder
    title="Thank You"
    description="Thanks for reaching out — we'll be in touch shortly."
  />
);

export const Legal = () => (
  <PagePlaceholder
    title="Legal"
    description="Legal information and disclosures."
  />
);

export const PrivacyPolicy = () => (
  <PagePlaceholder
    title="Privacy Policy"
    description="How we handle your information."
  />
);

export const AccessibilityStatement = () => (
  <PagePlaceholder
    title="Accessibility Statement"
    description="Our commitment to accessibility."
  />
);

export const SiteMap = () => (
  <PagePlaceholder
    title="Site Map"
    description="A map of all pages on this site."
  />
);
