import {
  Home,
  RefreshCw,
  Calculator,
  BookOpen,
  FileText,
  HelpCircle,
  Newspaper,
  MapPin,
  Star,
  type LucideIcon,
} from "lucide-react";

export interface NavLeaf {
  label: string;
  to: string;
  description?: string;
  icon?: LucideIcon;
  /** Optional external URL. When set, renders as an anchor opening in a new tab. */
  href?: string;
}

export interface NavGroup {
  label: string;
  children: NavLeaf[];
}

export interface NavTop {
  label: string;
  to?: string;
  group?: NavGroup;
}

/** Top-level desktop nav. Single links use `to`; dropdowns use `group`. */
export const primaryNav: NavTop[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about-us",
  },
  {
    label: "Buy a Home",
    to: "/home-purchase",
  },
  {
    label: "Refinance",
    to: "/home-refinance",
  },
  {
    label: "Mortgage Calculators",
    to: "/mortgage-calculators",
  },
  {
    label: "Resources",
    group: {
      label: "Resources",
      children: [
        {
          label: "Loan Programs",
          to: "/loan-programs",
          description:
            "Conventional, FHA, VA, and alternative residential options.",
          icon: FileText,
        },
        {
          label: "Loan Process",
          to: "/loan-process",
          description: "What to expect from application to closing.",
          icon: RefreshCw,
        },
        {
          label: "Mortgage Basics",
          to: "/mortgage-basics",
          description: "Plain-English guides to key mortgage concepts.",
          icon: BookOpen,
        },
        {
          label: "Online Forms",
          to: "/online-forms",
          description: "Application and pre-qualification forms.",
          icon: FileText,
        },
        {
          label: "FAQ",
          to: "/faq",
          description: "Answers to common mortgage questions.",
          icon: HelpCircle,
        },
        {
          label: "Blog",
          to: "/blog",
          description: "Industry news and homebuyer insights.",
          icon: Newspaper,
        },
        {
          label: "Our Reviews",
          to: "/#client-reviews",
          description: "Verified client feedback from Google.",
          icon: Star,
        },
        {
          label: "Leave a Review",
          to: "#leave-a-review",
          href: "https://www.google.com/maps/search/?api=1&query=Home+Base+Mortgage+Group+Scarborough+ME",
          description: "Share your experience on Google.",
          icon: Star,
        },
      ],
    },
  },
  {
    label: "Contact",
    to: "/contact-us",
  },
];

/** Utility bar links (top strip). */
export const utilityLinks: NavLeaf[] = [];

/** Footer link columns. */
export const footerNav: { title: string; links: NavLeaf[] }[] = [
  {
    title: "Buy & Refinance",
    links: [
      { label: "Home Purchase", to: "/home-purchase" },
      { label: "Refinance", to: "/home-refinance" },
      { label: "Loan Programs", to: "/loan-programs" },
      { label: "Mortgage Calculators", to: "/mortgage-calculators" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Loan Process", to: "/loan-process" },
      { label: "Mortgage Basics", to: "/mortgage-basics" },
      { label: "Online Forms", to: "/online-forms" },
      { label: "FAQ", to: "/faq" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About Us", to: "/about-us" },
      { label: "Contact", to: "/contact-us" },
    ],
  },
];

export const legalLinks: NavLeaf[] = [
  { label: "Legal", to: "/legal" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Accessibility Statement", to: "/accessibility-statement" },
  { label: "Site Map", to: "/site-map" },
];

/** Verified HB online application destination (Blink Mortgage). */
export const APPLY_URL =
  "https://www.blink.mortgage/app/signup/p/homebasemortgagegroupllc/ianbushover";

/** Company facts (pending owner confirmation before launch). */
export const company = {
  legalName: "Home Base Mortgage Group, LLC",
  shortName: "HB Mortgage Group",
  nmls: "1621025",
  phone: "(207) 215-5071",
  phoneHref: "tel:+12072155071",
  email: "ian@hbmortgagegroup.com",
  emailHref: "mailto:ian@hbmortgagegroup.com",
  addressLines: ["243 US Route 1", "Scarborough, ME 04074"],
  serviceArea: "Maine & New Hampshire",
  nmlsConsumerAccessUrl: "https://www.nmlsconsumeraccess.org/",
} as const;

/** All routes that exist as placeholders (tracked unfinished). */
export const scaffoldRoutes = [
  "/home-purchase",
  "/home-refinance",
  "/loan-programs",
  "/mortgage-calculators",
  "/loan-process",
  "/mortgage-basics",
  "/online-forms",
  "/faq",
  "/blog",
  "/about-us",
  "/contact-us",
  "/select-loan-officer",
  "/pre-qualify",
  "/apply-now",
  "/personalized-quote",
  "/download-app",
  "/download-ebook",
  "/thank-you",
  "/legal",
  "/privacy-policy",
  "/accessibility-statement",
  "/site-map",
] as const;
