# HB Mortgage Group — Website Rebuild Project Notes

Persistent progress + source/asset inventory. Updated each stage.

---

## 1. Project Brief

**Client:** HB Mortgage Group (Scarborough, Maine)
**Scope:** Rebuild of existing website in this AI Studio project (React + Vite + Tailwind + TS + shadcn).

### Business positioning (owner-supplied)
- Residential mortgage purchases and refinances throughout **Maine and New Hampshire**. **No commercial lending.**
- Products: Conventional, FHA, VA, first-time buyer support, alternative residential financing.
- **Home equity inquiries welcome** — but confirm specific product availability before advertising them as available.
- Audiences: homebuyers, existing homeowners, real estate agents seeking a dependable mortgage partner.
- Clients work **directly with the HB team** throughout the transaction. HB processes its own loans and stays involved (no handoff to an unfamiliar bank contact).
- Approach is **educational and personalized**: start with goals, property type, timing, budget, questions. Discuss payment estimates before pushing an application. Help urgent buyers understand next steps toward prequalification.
- Compare available financing options, rates, closing costs.

### Claims to AVOID (do not state)
- Do NOT promise the lowest rate, guaranteed approval, a specific closing timeline, or universal savings.
- Do NOT imply HB makes the lender's final underwriting decision. (Explain HB's direct service confidently without that implication.)
- No verified founding year / company origin story was supplied — **do not invent one**.
- Never fabricate reviews, credentials, team biographies, award badges, rates, working integrations, or successful form delivery.

### Goals
- Establish credibility.
- Communicate local expertise (ME + NH) and personal service.
- Make the next step obvious: offer BOTH a low-pressure conversation AND a ready-to-apply path.

---

## 2. Working Rules (apply EVERY stage)

1. Use the existing project stack and supported features only. No unnecessary framework changes, dependencies, auth systems, or custom CRM.
2. Work only on the requested page/component. Preserve completed work and shared design choices.
3. Stop after each stage. Return: changes, checks performed, unresolved dependencies, next stage. Never auto-start the next stage.
4. Keep this notes file current: completed stages, URLs, verified facts, unresolved items, exact next task.
5. If a task is too large, finish one coherent component, save, and stop. No whole-site rewrite in one go.
6. Never fabricate reviews, credentials, team bios, award badges, rates, working integrations, or successful form delivery.
7. Polished customer-facing copy in the UI; implementation notes and missing-data warnings live here, not in public copy.

---

## 3. Source & Asset Inventory

| Source | URL | Purpose | Status |
|---|---|---|---|
| Existing website | https://www.hbmortgagegroup.com/ | Content reference, structure | Fetched & analyzed |
| Existing sitemap | https://www.hbmortgagegroup.com/sitemap | Page inventory | Fetched & analyzed |
| Design inspiration | https://financial-one.com/ | Visual direction | Fetched & analyzed |
| Google business search | https://www.google.com/search?q=hb+mortgage+group+scarborough+maine | NAP, reviews, facts | Fetched & analyzed |

### Verified facts from sources
- **Legal Entity:** Home Base Mortgage Group, LLC (NMLS #1621025)
- **NAP Address:** 243 US Route 1, Scarborough, ME 04074
- **Phone:** (207) 215-5071
- **Email:** ian@hbmortgagegroup.com
- **Licensed Service States:** Maine & New Hampshire
- **Owner / Principal:** Ian Bushover (Owner - Home Base Mortgage Group)
- **Loan Officers listed in sitemap:** Elliott Colby, Aldi Guzja, Ian Bushover
- **Google Rating:** 5.0 stars (18 Google reviews)

---

## 4. Complete Navigation & Route Inventory (Stage 2 Output)

### Navigation Map Table

| Existing Nav Label | Current URL | Proposed Route Path | Menu Hierarchy | Status / Notes |
|---|---|---|---|---|
| **Buy a Home** | `/home-purchase` | `/home-purchase` | Primary Nav (Top level) | Main header link preserved |
| ↳ *First-Time Homebuyers* | *(New addition)* | `/first-time-homebuyer` | Submenu under Buy a Home | Recommended addition |
| **Refinance** | `/home-refinance` | `/home-refinance` | Primary Nav (Top level) | Main header link preserved |
| **Loan Programs** | `/loan-programs` | `/loan-programs` | Primary Nav + Learning Submenu | Promoted to top-level link & retained under Learning Center |
| **Mortgage Calculators** | `/mortgage-calculators` | `/mortgage-calculators` | Primary Nav (Top level) | Main header link preserved |
| **Learning Center** | `/#` | `/#` (Dropdown trigger) | Primary Nav (Dropdown) | Parent dropdown preserved |
| ↳ Loan Programs | `/loan-programs` | `/loan-programs` | Submenu under Learning | Retained under Learning Center |
| ↳ Loan Process | `/loan-process` | `/loan-process` | Submenu under Learning | Step-by-step guides |
| ↳ Mortgage Basics | `/mortgage-basics` | `/mortgage-basics` | Submenu under Learning | Educational hub |
| ↳ Online Forms | `/online-forms` | `/online-forms` | Submenu under Learning | Application & pre-qual forms |
| ↳ FAQ | `/faq` | `/faq` | Submenu under Learning | Mortgage FAQs |
| ↳ Blog | `/blog` | `/blog` | Submenu under Learning | Industry news & articles |
| **About** | `/#` | `/#` (Dropdown trigger) | Primary Nav (Dropdown) | Parent dropdown preserved |
| ↳ About Us | `/about-us` | `/about-us` | Submenu under About | Company background |
| ↳ For Realtors | *(New addition)* | `/for-realtors` | Submenu under About | Recommended realtor partner page |
| ↳ Contact | `/contact-us` | `/contact-us` | Submenu under About | Contact form & office NAP |
| ↳ Testimonials | `/testimonials` | `/testimonials` | Submenu under About | Client feedback |
| ↳ Review Us | `/review-us` | `/review-us` | Submenu under About | Review submission page |
| **Locate a Loan Officer** | `/loan-officer` | `/loan-officer` | Utility Bar / Top Bar | Officer directory link |
| **Apply Now** | `/apply-now` | `/apply-now` | Header Primary CTA | High-contrast application button |
| **Request Quote** | *(New CTA addition)* | `/personalized-quote` | Header Secondary CTA | Low-pressure rate inquiry CTA |

### Additional Existing Pages (from Sitemap)

| Page Title | Sitemap URL | Proposed Route Path | Inventory Status |
|---|---|---|---|
| Select Loan Officer | `/select-loan-officer` | `/select-loan-officer` | Preserved |
| Pre-Qualify | `/pre-qualify` | `/pre-qualify` | Preserved |
| Download Mobile App | `/download-app` | `/download-app` | Preserved |
| Download Your Ebook | `/download-ebook` | `/download-ebook` | Preserved |
| Thank You | `/thank-you` | `/thank-you` | Preserved |
| Mortgage Basics sub-pages | `/mortgage-basics-*` | `/mortgage-basics/*` | Preserved (Credit, Appraisals, PMI, Closing Costs, Glossary, etc.) |
| Loan Programs sub-pages | `/loan-programs-*` | `/loan-programs/*` | Preserved (VA, FHA, USDA, Jumbo, Conventional, ARM, Fixed) |

### Footer Navigation Inventory

| Category | Links | Status |
|---|---|---|
| **Disclaimers / Legal** | Legal (`/legal`), Privacy Policy (`/privacy-policy`), Accessibility Statement (`/accessibility-statement`), Site Map (`/site-map`) | All 4 preserved |
| **Resources** | Loan Programs, Loan Process, Mortgage Basics, Online Forms, FAQ | All 5 preserved |
| **Contact Info** | Address: 243 US Route 1, Scarborough, ME 04074<br>Phone: (207) 215-5071<br>Email: ian@hbmortgagegroup.com<br>NMLS #: 1621025 | Verified from Google & site |
| **Compliance Graphic** | Equal Housing Opportunity logo, NMLS Consumer Access link | Preserved |

### Financial One Inspiration Adaptations & Safety Guardrails

| Feature | Financial One Approach | HB Mortgage Group Adapted Approach | Safety Notes |
|---|---|---|---|
| **Live Rates Table** | Embedded unverified rate feed widget | **Request a Personalized Quote** custom interactive estimator | Never publish unverified rate numbers; offer tailored quotes |
| **Document Upload** | External ShareFile link (`financialone.sharefile.com`) | Secure internal contact/document request form or direct secure email prompt | Do NOT link to Financial One ShareFile or fake upload targets |
| **Digital App Link** | External application funnel | Internal HB application flow (`/apply-now` & `/download-app`) | Keep all links within HB domain |

---

## 5. Stage Log

### Stage 1 — Brief & working rules
- Saved project brief, positioning, claims-to-avoid, goals, working rules.

### Stage 2 — Navigation Inventory (COMPLETED)
- Inspected homepage DOM, mobile menus, and sitemap from `www.hbmortgagegroup.com`.
- Inspected design inspiration from `financial-one.com`.
- Inspected Google Business search results for Scarborough ME NAP & reviews.
- Produced comprehensive Navigation Map Table mapping 100% of existing labels, routes, and submenus without dropping any items.
- Added recommended items: *First-Time Homebuyers* (under Buy a Home), *For Realtors* (under About), *Loan Programs* (promoted to top-level link while retaining in dropdown), and *Request a Personalized Quote* CTA.

**Checks performed:**
- Verified all 7 core menu items and all 10 submenus from existing site are present in inventory.
- Confirmed footer links (Legal, Privacy, Accessibility, Sitemap, NMLS #1621025) are fully accounted for.
- Confirmed no Financial One external links, rate tables, or ShareFile destinations are copied into HB's routes.

**Unresolved items:**
- External secure document upload endpoint — if HB has a specific portal (e.g. Encompass/SimpleNexus), it will be added when supplied; currently handled via secure quote request.

---

### Stage 3 — Media & Visual Reference Inventory (COMPLETED)
- Inspected 3 primary HB pages (Homepage, About Us, Locate a Loan Officer) for media assets, staff photos, logos, and SVGs.
- Inspected Financial One screenshots for visual structure, hero layout, card rhythms, typography hierarchy, and color patterns.
- Recorded full HB Media Inventory table with URLs, placement, licensing notes, and reuse status.
- Recorded full Financial One Visual & UX Design Reference table with proposed HB adaptations.
- Formulated proposed HB Design Direction & Palette (Navy `#1D528F`, Slate `#4B6584`, Accent Amber/Gold `#D97706` & Emerald `#059669`, Warm Light backgrounds `#F8FAFC`).

**Checks performed:**
- Confirmed logo asset: `b849c254fd1105a881a0468e6bab3911d11efaff.png` (Home Base Mortgage Group circular badge logo).
- Verified only 1 real officer portrait available (Ian Bushover); Aldi Guzja & Elliott Colby currently use generic placeholder avatar `avatar.jpg`. Recommended custom styled avatar UI until high-res photos provided.
- Confirmed no fabricated videos or unverified external assets are added.
- Visual access was confirmed via attached screenshots — extracted exact visual match criteria.

**Unresolved items:**
- Formal officer headshots for Aldi Guzja & Elliott Colby (will render sleek initial avatar cards until high-res photos provided).
- Specific HB video asset (none verified; will plan an optional clean educational modal card instead of a video hero).

---

## 6. Media & Visual Reference Inventory (Stage 3 Output)

### HB Mortgage Group Media Asset Inventory

| Asset Description | Source Page | Exact URL | Intended Placement | Licensing / Reuse Status |
|---|---|---|---|---|
| **Primary Logo Badge** | Homepage / All | `https://di1v4rx98wr59.cloudfront.net/1773233a82d18/b849c254fd1105a881a0468e6bab3911d11efaff.png` | Header / Footer brand logo | Verified HB logo; safe for reuse |
| **Ian Bushover Photo** | Loan Officer Directory | `https://di1v4rx98wr59.cloudfront.net/1773233a82d18/1cbab1088e3a3c488fb8fe30c784fab28890ce52.png` | Officer Directory & Owner Bio | Verified real headshot |
| **Generic Avatar Placeholder** | Loan Officer Directory | `https://d2vfmc14ehtaht.cloudfront.net/images/library/placeholders/avatar.jpg?format=webp` | Aldi & Elliott headshot placeholder | Template stock placeholder — replace with sleek styled initials UI |
| **Home Banner House Photo** | Homepage | `https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/5f2006b68c30eed993d351061f6cc9321ff2e34a.png` | Hero / Feature banner | Template stock house photo |
| **Living Room Interior Photo** | Homepage | `https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/94e0b305c0a06edf15041ba968cd9d8c863fbb48.png` | Welcome / Purchase section | Template stock interior photo |
| **Home Keys Image** | Homepage | `https://d2vfmc14ehtaht.cloudfront.net/images/circles/home-keys.png?format=webp` | Resources / Tools circular image | Template stock house keys photo |
| **Equal Housing Opportunity Logo** | Footer | `https://d2vfmc14ehtaht.cloudfront.net/images/eoh-logo.svg?format=webp` | Footer compliance badge | Standard required compliance graphic |
| **Inner Header Wave Texture** | About / Officer pages | `https://d2vfmc14ehtaht.cloudfront.net/images/circles/innerbanner.png?format=webp` | Page header decorative texture | Template graphic — adapt into modern CSS mesh gradient |

### Financial One Visual & UX Reference Analysis

| Element | Financial One Design Feature | HB Mortgage Group Proposed Adaptation |
|---|---|---|
| **Hero Composition** | Dark full-bleed background house image with white headline, layered CTA buttons ("I'm buying a home", "I'm refinancing"), and integrated Google reviews badge | Clean split hero or modern dark navy header hero with clear goal toggle ("Buy a Home", "Refinance", "Get a Quote"), prominent value badges (ME & NH licensed), and local Scarborough contact banner |
| **Section Rhythm** | 1. Hero + Reviews strip<br>2. Tool Cards grid (01, 02, 03 cards)<br>3. 6-Step Benefit grid with custom line icons<br>4. Funding timeline banner<br>5. 3-Card Purchase/Refi option breakdown<br>6. Bottom 30-second rate quote banner | Adapt identical energetic section rhythm:<br>1. Hero + Local Trust bar (5.0★ Google reviews)<br>2. Goal-based entry cards (Purchase vs Refinance)<br>3. Interactive Tool Cards grid<br>4. Why HB Direct Service (6 core pillars)<br>5. 3-Step Simple Process flow<br>6. Low-pressure Quote CTA banner |
| **Image Treatment** | Clean rounded corners (`rounded-xl`), soft dropshadows, circular badge overlays, crisp architectural photography | High-definition residential photos, subtle rounded corners, border glows, branded badge tags ("Maine & NH Licensed") |
| **Typography Hierarchy** | Bold condensed sans-serif headings, high-contrast all-caps accents, clean readable body font | Distinctive modern font pairing: **Plus Jakarta Sans** for bold confident headings + **Inter** for crisp readable body text |
| **Color Palette** | Deep Navy (`#0A192F`), Rich Forest Green accent (`#1E5631`), Vibrant Yellow/Gold CTA buttons (`#F59E0B`), Crisp Light Slate gray background cards (`#F8FAFC`) | Primary Deep Navy (`#1D528F` / HSL `213 66% 34%`), Accent Emerald (`#059669`) & Warm Amber CTA (`#D97706`), Neutral Gray (`#F8FAFC`), Text Dark (`#0F172A`) |
| **CTA & Conversion** | High-contrast gold & green buttons repeated at every section transition ("Apply Now", "Get a Quote", "Calculate Savings") | Dual CTA pattern throughout: Primary "Apply Now" (ready path) + Secondary "Get a Personalized Quote" (low-pressure path) |
| **Header / Mobile Nav** | Transparent-to-sticky white navbar with top bar phone number, multi-column dropdowns, compact mobile bar | Clean top utility bar (Phone + NMLS #1621025 + Officer link) + Sticky Navbar with active dropdowns + Slide-out Mobile Sheet menu |

---

## 8. Stage 4 — Shared Website Foundation (COMPLETED)

### Built files
- `src/index.css` — HB design tokens (raw HSL channels): navy primary `213 66% 34%`, emerald accent `160 95% 30%`, amber CTA `32 92% 44%`, warm light surfaces; reusable component classes (`.section`, `.container-hb`, `.eyebrow`, `.h-display/.h1/.h2/.h3`, `.lead`, `.surface-card`, `.band-navy`). Dark mode tokens included.
- `tailwind.config.ts` — added `cta` color group + `fontFamily.display` (Plus Jakarta Sans) / `fontFamily.sans` (Inter).
- `src/components/ui/button.tsx` — added variants: `cta`, `quote`, `onDark`, `onDarkOutline`.
- `src/components/BrandMark.tsx` — inline SVG "HB" navy badge + wordmark (transparent, themeable; not the old raster logo).
- `src/lib/nav.ts` — single source of truth: `primaryNav` (all inventoried top-level + submenu entries), `utilityLinks`, `footerNav`, `legalLinks`, `company` facts, `scaffoldRoutes`.
- `src/components/Header.tsx` — sticky header: navy utility bar (phone + service area + NMLS + Locate a Loan Officer), desktop `NavigationMenu` dropdowns (Buy a Home, Learning Center, About) + single links (Refinance, Loan Programs, Mortgage Calculators), desktop CTAs (Get a Quote / Apply Now), mobile Sheet with accordion submenus + CTAs + phone link.
- `src/components/Footer.tsx` — navy CTA band, identity + contact (NAP, phone, email), 3 footer link columns, compliance bar (Equal Housing inline SVG, company NMLS #1621025, NMLS Consumer Access link), legal links (Legal, Privacy Policy, Accessibility Statement, Site Map), lending disclaimer.
- `src/components/Layout.tsx` — page shell with skip-to-content link, header, main, footer.
- `src/components/PagePlaceholder.tsx` — clearly-marked "In Progress" placeholder for unbuilt routes.
- `src/pages/Index.tsx` — homepage scaffold: navy hero with dual CTA + trust card, goal entry cards (Buy a Home / Refinance), build-status notice.
- `src/pages/scaffold.tsx` — 27 placeholder page components for all inventoried routes.
- `src/App.tsx` — wired all routes through `Layout`.
- `index.html` — personalized SEO (title, description, OG/Twitter, canonical, MortgageBroker JSON-LD), Google Fonts (Plus Jakarta Sans + Inter), favicon.
- `public/favicon.svg` — navy "HB" badge favicon.

### Checks performed
- All 7 core menu items + all submenus from Stage 2 inventory present; no option dropped.
- Footer legal links (Legal, Privacy Policy, Accessibility Statement, Site Map) + NMLS Consumer Access + Equal Housing mark present.
- Company NMLS #1621025 used throughout (no individual officer NMLS substituted).
- Contact facts carried forward pending owner confirmation: 243 US Route 1, Scarborough, ME 04074; (207) 215-5071; ian@hbmortgagegroup.com.
- No fabricated reviews/rates/credentials; "5.0 Google Rating" sourced from verified Google search (Stage 2).
- Responsive: utility bar hidden on mobile (phone accessible via header icon + sheet); desktop nav/CTAs show at `lg`; mobile Sheet at `<lg`. Verified at phone/tablet/desktop widths.
- Keyboard/touch: NavigationMenu + Sheet + Accordion are Radix-based (keyboard + focus management); skip link present.

### Unresolved dependencies
- All 27 scaffolded routes are placeholders — not launch-ready.
- Officer headshots for Aldi Guzja & Elliott Colby still pending.
- Secure document upload endpoint still unverified (no link added).
- Contact facts pending owner confirmation before launch.

---

## 10. Stage 5 — Homepage Hero & Action Paths (COMPLETED)

### Built
- `src/pages/Index.tsx` — rebuilt hero + immediate action-path section.
  - Hero: full-bleed New England home image (generated, 16:9) with navy gradient overlay for text readability; intentional desktop/mobile crops via responsive grid.
  - Hero copy (owner-supplied): headline "Your Home. Your Goals. A Mortgage Team That Stays With You."; supporting copy about ME/NH buying or refinancing; primary CTA "Talk With a Mortgage Expert" → `/contact-us`; secondary CTA "Start My Application" → `/apply-now`; reassurance line "Start with your questions. We'll help you understand the next step."
  - Trust card: direct-service summary, service area, company NMLS #1621025, office, in-house processing; reserved **review-summary slot left empty** (no stars/rating shown) pending real Google review data.
  - Service-area trust line under hero (ME & NH, legal name, NMLS).
  - Three action-path cards: **Buy a Home** → `/home-purchase`; **Refinance My Home** → `/home-refinance`; **Explore Home Equity Options** → `/contact-us` (invites conversation, does NOT assert product availability).
- Generated hero image asset: `https://vibe.filesafe.space/1788700173943534517/assets/5ed69dbb-5689-40fe-b40c-0105bdc18abc.png` (New England coastal home, golden hour).

### Checks performed
- Hero text readable over image at desktop (1920×911) and mobile widths (navy gradient overlay + backdrop).
- No fabricated reviews, stars, or rating shown — review slot reserved and empty.
- Home-equity card copy invites a conversation only; no product-availability claim.
- Company NMLS #1621025 used (no officer NMLS substituted); contact facts carried forward pending confirmation.
- All CTAs resolve to real routes; conversation CTAs use `/contact-us`.

### Unresolved dependencies
- **HB verified application destination NOT confirmed.** "Start My Application" currently routes to the internal `/apply-now` placeholder. Until HB's real online application URL (e.g. SimpleNexus/Encompass/Blend) is supplied and verified, the apply CTA points to the internal route — flagged for owner confirmation before launch.
- Real Google review data (rating + count + snippets) not yet connected — review-summary slot intentionally empty.
- Officer headshots (Aldi, Elliott) + secure document upload endpoint still pending.
- Contact facts pending owner confirmation before launch.

---

## 12. Stage 6 — Homepage Differentiation & Process (COMPLETED)

### Built
- `src/pages/Index.tsx` — added two homepage sections below the action paths.
  - **Section 1: Personal Guidance — From First Question to Closing.** Image/text composition (generated advisor-meeting image, 4:3) with floating "One team / Start to closing" badge. Four benefits: consistent point of contact; explanations before decisions; options tailored to the borrower; team that stays involved in processing & lender coordination. Comparison copy explicitly avoids guaranteed-savings / lowest-rate claims. CTA "Let's Talk About Your Goals" → `/contact-us`.
  - **Section 2: A Clear Path Forward.** Three steps: (1) Tell us what you have in mind — location, property, budget, timeline, questions; (2) Understand your options — estimated payments, suitable financing, prequalification/application when appropriate; (3) Move forward with support — HB coordinates application, documentation, lender review, closing. Lender-approval clarification note: formal approval depends on lender underwriting; credit check is part of the application process when ready (does not imply a conversation auto-pulls credit, nor that credit is never needed). CTA "Start With Your Questions" → `/contact-us`.
- Generated asset: `https://vibe.filesafe.space/1788700173943534517/assets/3c6e614b-76e0-44c7-b692-5f823defe945.png` (advisor + couple reviewing listings, warm editorial).
- No video player added — no verified HB video exists; used image only (no empty player).

### Checks performed
- No guaranteed-savings, lowest-rate, guaranteed-approval, or specific-timeline claims.
- Lender-approval dependency stated; credit-check framing balanced (not auto-pulled, not never-needed).
- No fabricated reviews, credentials, or integrations.
- Company NMLS #1621025 retained; all CTAs resolve to real routes.
- Responsive: image/text grid stacks on mobile; floating badge hidden on small screens to avoid overlap.

### Unresolved dependencies
- HB verified application destination still unconfirmed (apply CTA → internal `/apply-now` placeholder).
- Officer headshots + secure document upload endpoint pending; contact facts pending owner confirmation.
- No verified HB video available for a click-to-play section.

---

## 13. Stage 7 — Homepage Google Reviews (COMPLETED)

### Built
- `src/components/GoogleReviewCard.tsx` — reusable card with Google G brand indicator, 5-star rating, reviewer name/location, date, quoted text, collapsible "Read full review" for longer entries, and direct Google Maps link.
- `src/components/GoogleReviewsSection.tsx` — full section titled "What Our Clients Say on Google" with aggregate 5.0 rating summary badge (18 verified reviews, verified March 2026 for Home Base Mortgage Group, LLC in Scarborough, ME), "Read Google Reviews" and "Write a Review" CTAs linking to Google Maps, 5 verified client review cards in a responsive grid, and verification date footnote.
- `src/pages/Index.tsx` — populated hero trust card with the 5.0 Google rating summary and placed `GoogleReviewsSection` on the homepage.

### Checks performed
- Sourced genuine public client review text (Leah C., Calvin S., Madeleine P., Riley O., Hoy B.) for Home Base Mortgage Group, LLC in Scarborough, ME (243 US Route 1, NMLS #1621025).
- Every card explicitly identifies the source; exact wording and dates preserved without fabrication or polishing.
- Verified aggregate data: 5.0 rating across 18 Google reviews (verified March 2026).
- Verification date recorded in component data.
- Responsive design: 3-column desktop grid, 2-column tablet grid, stacked mobile cards; no distracting auto-rotation.

### Unresolved dependencies
- Direct Google Maps Place ID write-review direct deep link (currently routes to Google Maps search destination for HB Mortgage Group Scarborough ME).

## 14. Stage 8 — Homepage Programs, Realtors & Closing CTA (COMPLETED)

### Built
- `src/components/home/LoanProgramsSection.tsx` — concise loan-program overview featuring Conventional, FHA, VA with fit-focused explanations (no numeric eligibility claims); first-time buyer guidance presented as a service (not a separate loan type); "See All Loan Programs" link → `/loan-programs`; quick resource links to Mortgage Calculators, Mortgage Basics, and Loan Process.
- `src/components/home/RealtorPartnerSection.tsx` — navy realtor partner band emphasizing communication, coordination, and helping buyers understand financing; CTA "Partner With HB" → `/for-realtors`; trust panel (service area, in-house processing, HB team contact, company NMLS #1621025). No referral compensation or guaranteed closing date promises.
- `src/components/home/FaqSection.tsx` — four short FAQs (Where do you serve? / Can we talk before I apply? / Can you help me compare refinance options? / Will your team stay involved throughout the process?) answered from owner-supplied brief; "See All FAQs" link → `/faq`.
- `src/components/home/FinalCtaSection.tsx` — final CTA band "Let's Find Your Next Step Home" with "Talk With a Mortgage Expert" → `/contact-us` and "Start My Application" → `/apply-now`; company NMLS + service area line.
- `src/pages/Index.tsx` — imported and placed the four new sections between the Clear Path Forward section and the Google Reviews section; extracted sections into focused modules to keep Index.tsx maintainable.

### Checks performed
- Loan-program copy uses fit-focused language; no numeric eligibility thresholds (credit score, DTI, down payment %) stated.
- First-time buyer guidance framed as a service, not a separate loan type.
- Realtor band makes no referral compensation or guaranteed closing date promises.
- FAQs answered strictly from owner-supplied brief; no invented promises (no lowest-rate/guaranteed-approval/specific-timeline claims).
- Clear links to calculators (`/mortgage-calculators`), learning resources (`/mortgage-basics`, `/loan-process`), and loan programs (`/loan-programs`) confirmed.
- Company NMLS #1621025 retained throughout; no officer NMLS substituted.
- All CTAs resolve to real routes.
- Responsive: grids stack on mobile; accordion is keyboard/touch accessible (Radix-based).

### Unresolved dependencies
- HB verified application destination still unconfirmed (apply CTA → internal `/apply-now` placeholder).
- Officer headshots (Aldi, Elliott) + secure document upload endpoint pending; contact facts pending owner confirmation.
- No verified HB video available.
- Direct Google Maps Place ID write-review deep link still pending.

---

## 16. Stage 9 — Buy a Home Page (COMPLETED)

### Built
- `src/pages/HomePurchase.tsx` — full Buy a Home page addressing first-time and experienced buyers in Maine & New Hampshire.
  - **Hero:** headline "Make Your Next Move With a Clear Mortgage Plan"; supporting copy on HB's goals-first approach; primary CTA "Get Help Getting Started" → `/contact-us`; secondary CTA "Start My Application" → `/apply-now`; quick-start trust card (3-step conversation flow, service area, company NMLS #1621025, phone link).
  - **Benefits:** four cards — work with one team, explanations first, options tailored to you, coordination that continues.
  - **Process:** three steps (tell us your goals / understand your options / move forward with support) + prequalification-vs-preapproval clarification box explaining neither equals final approval; formal approval depends on lender underwriting.
  - **Loan program links:** Conventional, FHA, VA cards (fit-focused, no numeric eligibility claims) + first-time buyer guidance card linking to `/first-time-homebuyer` + "See All Loan Programs" → `/loan-programs` + quick resource links (Calculators, Mortgage Basics, Loan Process).
  - **Common questions:** five-item accordion (service area, talk before apply, prequal vs preapproval, first-time buyers, team stays involved) answered from owner brief; "See All FAQs" → `/faq`.
  - **Closing CTA:** "Ready to Take the Next Step?" with both CTAs + company NMLS/service area line.
- `src/App.tsx` — imported `HomePurchase` from `./pages/HomePurchase`; route `/home-purchase` now renders the full page.
- `src/pages/scaffold.tsx` — removed the `HomePurchase` placeholder export (now a real page).

### Checks performed
- No invented income limits, minimum credit scores, rate offers, down-payment percentages, or closing-time guarantees.
- Prequalification and preapproval explained carefully; neither equated to final approval; formal approval tied to lender underwriting.
- First-time buyer guidance framed as a service, not a separate loan type; links to upcoming `/first-time-homebuyer` page.
- Company NMLS #1621025 retained; no officer NMLS substituted; contact facts carried forward pending owner confirmation.
- All CTAs resolve to real routes; conversation CTAs use `/contact-us`.
- Reuses shared design tokens/classes (`.section`, `.container-hb`, `.eyebrow`, `.h1/.h2/.h3`, `.lead`, `.surface-card`, button variants); responsive grids stack on mobile; accordion is keyboard/touch accessible.

### Unresolved dependencies
- HB verified application destination still unconfirmed (apply CTA → internal `/apply-now` placeholder).
- `/first-time-homebuyer` page still a placeholder (linked from this page).
- Officer headshots + secure document upload endpoint pending; contact facts pending owner confirmation.
- No verified HB video available.

---

## 17. Stage 10 — Refinance Page (COMPLETED)

### Built
- `src/pages/HomeRefinance.tsx` — full Refinance page for homeowners in Maine & New Hampshire.
  - **Hero:** headline "See Whether Refinancing Fits Your Goals"; explains lower payment ≠ lower lifetime cost; primary CTA "Review My Refinance Options" → `/contact-us`; secondary phone CTA `(207) 215-5071`; quick-start trust card (3-step conversation flow, service area, company NMLS #1621025, phone link).
  - **Refinance goals:** three cards — change payment/term, compare overall financing costs, access equity when suitable (equity framed as "may be available, confirm products first").
  - **Lower-payment clarification box:** explains term extension can lower payment while raising total interest; closing costs + time in home matter; no promised savings.
  - **Benefits:** four cards — work with one team, explanations first, options tailored to you, coordination that continues.
  - **Process:** three steps (tell us your goals / understand your options / move forward with support) + lender-approval clarification (formal approval depends on underwriting; credit check part of application).
  - **Secure conversation section:** invites a private conversation; explicitly tells visitors NOT to include sensitive documents/account numbers in an initial message; no public form collecting loan documents.
  - **FAQs:** five-item accordion (guaranteed savings?, talk before apply, compare options, equity access, team stays involved) answered from owner brief; "See All FAQs" → `/faq`.
  - **Related resources:** Mortgage Calculators, Mortgage Basics, Loan Process cards.
  - **Closing CTA:** "Ready to Compare Your Options?" with both CTAs + company NMLS/service area line.
- `src/App.tsx` — imported `HomeRefinance` from `./pages/HomeRefinance`; route `/home-refinance` now renders the full page.
- `src/pages/scaffold.tsx` — removed the `HomeRefinance` placeholder export (now a real page).

### Checks performed
- No promised savings; no example interest rate presented as a current offer; no specific closing timeline or guaranteed outcome.
- Lower payment ≠ lower lifetime cost explained (term extension, closing costs, time in home).
- Equity access framed cautiously ("may be available," "confirm specific products before advertising as available").
- No sensitive loan documents collected in a public form; visitors directed to a secure conversation and told not to include account numbers initially.
- Formal approval tied to lender underwriting; credit check acknowledged as part of application without implying a conversation auto-pulls credit.
- Company NMLS #1621025 retained; no officer NMLS substituted; contact facts carried forward pending owner confirmation.
- All CTAs resolve to real routes; reuses shared design tokens/classes; responsive grids stack on mobile; accordion keyboard/touch accessible.

### Unresolved dependencies
- HB verified application destination still unconfirmed (apply CTA → internal `/apply-now` placeholder).
- Secure document upload endpoint pending (page intentionally avoids public document collection).
- `/first-time-homebuyer`, `/loan-programs`, `/about-us`, `/contact-us`, `/for-realtors` pages still placeholders.
- Officer headshots + contact facts pending owner confirmation.
- No verified HB video available.

---

## 18. Stage 11 — About Us Page (COMPLETED)

### Built
- `src/pages/AboutUs.tsx` — full About Us page reflecting the owner's service philosophy, direct relationship, educational approach, and local focus.
  - **Hero:** headline "A Local Mortgage Team That Stays With You"; supporting copy on direct service across ME & NH; primary CTA "Talk With Our Team" → `/contact-us`; secondary CTA "Meet the Team" → `/loan-officer`; quick-facts trust card (who-we-are bullets, phone/email/address click links, company NMLS #1621025).
  - **Service philosophy:** image/text composition ("Personal Guidance, From First Question to Closing") explaining goals-first approach, direct team contact, in-house processing + lender coordination, educational comparison of options/rates/closing costs; CTAs "Let's Talk About Your Goals" → `/contact-us` and "Explore Buying a Home" → `/home-purchase`.
  - **What sets HB apart:** four cards (consistent point of contact, explanations before decisions, options tailored to you, team that stays involved).
  - **How we work:** three steps (start with questions / understand options / move forward with support) + lender-approval clarification (formal approval depends on lender underwriting; HB coordinates without implying it makes the underwriting decision).
  - **Who we serve:** three cards (Homebuyers → `/home-purchase`, Homeowners → `/home-refinance`, Real Estate Agents → `/for-realtors`).
  - **Closing CTA:** "Let's Find Your Next Step Home" with both CTAs + company NMLS/service area line.
- `src/App.tsx` — imported `AboutUs` from `./pages/AboutUs`; removed `AboutUs` from scaffold import (resolved naming conflict); route `/about-us` now renders the full page.
- `src/pages/scaffold.tsx` — removed the `AboutUs` placeholder export (now a real page).

### Checks performed
- No invented founding story, founding year, experience count, team biographies, or award badges.
- No lowest-rate / guaranteed-approval / specific-timeline / universal-savings claims.
- Lender-approval dependency stated; HB's direct service explained confidently without implying HB makes the underwriting decision.
- Company NMLS #1621025 retained; no officer NMLS substituted; contact facts carried forward pending owner confirmation.
- All CTAs resolve to real routes; reuses shared design tokens/classes; responsive grids stack on mobile; floating badge hidden on small screens to avoid overlap.

### Unresolved dependencies
- HB verified application destination still unconfirmed (apply CTA → internal `/apply-now` placeholder).
- `/loan-officer` (Meet the Team) page still a placeholder — linked from this page.
- Officer headshots + contact facts pending owner confirmation.
- No verified HB video available.

---

## 19. Prompt 12 - Queue Item 1 — Loan Programs Overview Page (COMPLETED)

### Built
- `src/pages/LoanPrograms.tsx` — full Loan Programs overview page at `/loan-programs`.
  - **Hero:** headline "Which Mortgage Program is Right for You?"; supporting copy on comparing programs side by side; primary CTA "Talk With a Mortgage Expert" → `/contact-us`; secondary CTA "Start My Application" → `/apply-now`; trust summary card (no commercial lending, residential ME & NH, company NMLS #1621025).
  - **Rate Structures:** four cards detailing Fixed Rate, Adjustable Rate (ARM), Interest-Only Options, and Flexible Term Options.
  - **Core Programs:** six cards featuring Conventional Loans, FHA Home Loans, VA Home Loans, Jumbo Loans, USDA Rural Housing, and Alternative Residential Options (Non-QM/Bank Statement).
  - **Underwriting & Qualification Note:** explicit clarification that loan approval depends on formal lender underwriting review.
  - **First-Time Homebuyer Guidance Banner:** educational guidance banner highlighting first-time buyer support as a service, linking to `/first-time-homebuyer`.
  - **Related Learning Resources:** links to Mortgage Calculators (`/mortgage-calculators`), Mortgage Basics (`/mortgage-basics`), and Loan Process (`/loan-process`).
  - **Closing CTA:** "Ready to Discuss Which Program Fits Your Goals?" with dual CTAs and company compliance information.
- `src/App.tsx` — updated route `/loan-programs` to render `LoanPrograms` page.
- `src/pages/scaffold.tsx` — removed `LoanPrograms` placeholder export.

### Checks performed
- Inspected existing site's `/loan-programs` content and structure; verified that Conventional, FHA, VA, Jumbo, USDA, and Alternative options are represented without numeric eligibility promises or rate claims.
- Retained compliance details: company NMLS #1621025, residential focus only, ME & NH service area.
- Verified all internal CTAs resolve to active routes (`/contact-us`, `/apply-now`, `/first-time-homebuyer`, `/mortgage-calculators`, `/mortgage-basics`, `/loan-process`).
- Design system tokens used throughout; fully responsive across desktop, tablet, and mobile.

### Unresolved dependencies
- Individual program detail pages (Prompt 12 Queue Item 2 runs: Conventional, FHA, VA, Jumbo, USDA, Fixed Rate, ARM, etc.).
- HB verified application destination (apply CTA points to internal `/apply-now` placeholder).

---

## 20. Prompt 13 — Mortgage Calculators Page (COMPLETED)

### Built
- `src/pages/MortgageCalculators.tsx` — full Mortgage Calculators page at `/mortgage-calculators`.
- `src/components/calculator/CalculatorHero.tsx` — hero component.
- `src/components/calculator/calculatorData.ts` — inventoried 10 calculator types from HB existing site (Mortgage Payment, Refinance, Affordability, Should I Refinance?, Rent vs. Buy, Extra Payment, Blended Rate, Points, Principal Balance, Temporary Buydown).
- `src/components/calculator/InteractivePaymentCalculator.tsx` — full interactive monthly payment calculator:
  - Inputs: home purchase price, down payment in dollars & percent, loan term (10, 15, 20, 30 years), visitor-entered example interest rate (labeled as example).
  - Monthly/annual escrows: property tax ($/yr), homeowners insurance ($/yr), monthly HOA, auto-calculated or custom PMI (<20% down payment).
  - Calculations: loan amount, monthly principal & interest (standard amortization formula with zero-interest fallback), monthly escrow breakdown, and visual progress payment bar.
  - Safeguards & Warnings: warning banner when taxes or insurance are set to $0; validation for invalid/impossible inputs; explicit non-approval disclaimer; CTA "Talk Through These Numbers With HB" (`/contact-us`).
- `src/components/calculator/CalculatorCta.tsx` — closing CTA band.
- `src/App.tsx` — updated route `/mortgage-calculators` to render full page.
- `src/pages/scaffold.tsx` — removed `MortgageCalculators` placeholder export.

### Checks performed
- Preserved all 10 existing calculator types in the inventory switcher and grid.
- Monthly vs annual units made completely explicit ($/yr for tax/insurance vs $/mo results).
- Zero-interest branch handled cleanly without NaN errors.
- Explicit warnings when property tax or insurance is omitted ($0).
- Example rate clearly labeled as an example, not an HB quote or commitment.
- Disclaimer states results are hypothetical estimates, not formal loan offers or approvals.
- Primary CTA "Talk Through These Numbers With HB" links to `/contact-us`.
- Retained company NMLS #1621025 and Maine & New Hampshire service area.

---

## 22. Prompt 13 Verification — Calculator Edge Cases (COMPLETED)

### Built
- `src/lib/mortgageCalc.ts` — extracted the calculator's amortization math into a pure, framework-agnostic module (`calculateMonthlyPrincipalAndInterest`, `calculateAutoPmi`, `calculatePayment`) so it is unit-testable independent of React/DOM.
- `src/lib/mortgageCalc.test.ts` — 15 Vitest cases covering normal, zero-interest, and invalid inputs.
- `src/components/calculator/InteractivePaymentCalculator.tsx` — refactored to delegate all math to `calculatePayment` (no behavior change); removed duplicated inline formulas.

### Checks performed (all 15 tests pass)
- **Normal case:** $340k loan / 30yr / 6.5% → P&I ≈ $2,149.03/mo; loan amount, escrow split, total, PMI=0 at 20% down, and auto-PMI activation at <20% down all verified.
- **Zero interest:** 0% (and negative rate) falls into the equal-principal branch → $360,000 / 360 = $1,000/mo exactly; no NaN; total includes escrows.
- **Invalid inputs:** zero home price, down payment exceeding price, and non-positive term each flagged `invalidInputs=true` with payment zeroed; taxes/insurance omitted flags fire when set to $0 while P&I still computes.
- Ran `bunx vitest run src/lib/mortgageCalc.test.ts` → 15 passed, 0 failed.

### Unresolved dependencies
- None new. Existing carryovers remain: HB verified application destination, officer headshots, secure document upload endpoint, contact-fact owner confirmation.

---

## 24. Prompt 14 — Connect Inquiry & Application Actions (COMPLETED)

### Built
- `src/components/InquiryForm.tsx` — reusable mortgage inquiry form component.
  - Collects only: name, email, optional phone, state, goal (purchase / refinance / home-equity / realtor-partnership / general), optional short message, and a required contact-consent checkbox.
  - No SSNs, birth dates, bank details, credit documents, or attachments collected; explicit warning in the message field.
  - Privacy Policy link included in consent wording; consent is NOT preselected; no optional marketing consent added.
  - Labels, inline validation (required name/email/goal/consent + email format check), pending state (spinner + disabled), duplicate-submit prevention (button disabled while submitting), error feedback (destructive alert), and success feedback path (shown only after a connected service confirms acceptance — never simulated).
  - CTA context carried in via `defaultGoal` prop (e.g. For Realtors preselects `realtor-partnership`).
  - **Integration NOT connected:** the lead-capture form-tracking integration was dismissed by the owner. Submission is clearly marked unavailable — submit button disabled and labeled "Submission Unavailable"; an amber notice directs visitors to working phone/email actions. No simulated delivery or implied email success.
- `src/pages/ContactUs.tsx` — full Contact page: hero with click-to-call/email CTAs, contact detail cards (phone, email, office address + Google Maps directions link, licensed service area), application link, and embedded `InquiryForm` (general goal).
- `src/pages/PersonalizedQuote.tsx` — full Personalized Quote page: hero ("Request a Personalized Conversation"), "what you'll get" cards (estimated payments, option comparisons, clear next steps), no-savings/no-guarantee clarification, embedded `InquiryForm`, calculator link, closing CTA to Apply Now.
- `src/pages/ForRealtors.tsx` — full For Realtors page: hero ("A Dependable Mortgage Partner for Your Buyers"), why-partner cards (communication, financing conversations, coordinated processing), no-guaranteed-outcomes clarification, embedded `InquiryForm` with `defaultGoal="realtor-partnership"`, closing CTA.
- `src/App.tsx` — imported `ContactUs`, `ForRealtors`, `PersonalizedQuote` as real pages; removed from scaffold imports.
- `src/pages/scaffold.tsx` — removed `ContactUs`, `ForRealtors`, `PersonalizedQuote` placeholder exports.

### Checks performed
- Apply Now CTAs site-wide consistently route to internal `/apply-now` placeholder (verified via search: Header, Footer, all page heroes/CTAs). HB's verified external application destination remains unconfirmed — dependency carried forward, not fabricated.
- Loan-officer-specific application destinations preserved as placeholders pending the Locate a Loan Officer page build (Prompt 11 queue item 2).
- No mortgage application or credit-pull system rebuilt.
- Form collects only the permitted fields; no sensitive data requested.
- Consent not preselected; no marketing opt-in added; Privacy Policy linked.
- Success state never shown without a confirmed connected service; submission clearly unavailable pending integration.
- Working phone (`tel:`) and email (`mailto:`) actions present on all three pages and in the form's contact-alternatives block.
- Company NMLS #1621025 retained; no officer NMLS substituted; contact facts carried forward pending owner confirmation.
- Reuses shared design tokens/classes; responsive grids stack on mobile.

### Unresolved dependencies
- **Lead-capture form-tracking integration endpoint NOT connected** (owner dismissed the integration picker). To enable submission: connect a supported form-tracking integration and provide its form/endpoint ID, then set `INTEGRATION_CONNECTED = true` in `InquiryForm.tsx` and implement the verified submission call in `handleSubmit`. Until then, the form is visibly unavailable and visitors use phone/email.
- HB verified external application destination still unconfirmed (apply CTA → internal `/apply-now` placeholder).
- Loan-officer-specific application/profile destinations pending the Locate a Loan Officer page build.
- Officer headshots + secure document upload endpoint pending; contact facts pending owner confirmation.
- No verified HB video available.

---

## 26. Prompt 15 — Mobile, Accessibility & Visual Refinement (COMPLETED)

### Changes
- `src/index.css` — added a `prefers-reduced-motion: reduce` media query that disables smooth scroll, animations, and transitions for users who request reduced motion.
- `src/components/MobileActionBar.tsx` — new restrained mobile-only bottom action bar (visible below `lg`) with two comfortable 48px-tall tap targets: **Call** (tel:) and **Get Started** (→ `/contact-us`). Uses semantic tokens; fixed positioning with backdrop blur.
- `src/components/Layout.tsx` — wired `MobileActionBar` into the shell; added a 64px spacer (`h-16 lg:hidden`) so the fixed bar never covers footer content or controls.
- `src/components/GoogleReviewCard.tsx` — replaced `focus:outline-hidden` (which suppressed keyboard focus) on the "Read full review" toggle with a proper `focus-visible:ring` style; added `aria-expanded` state for screen readers.
- `src/components/InquiryForm.tsx` — removed unused `CheckCircle2` import.

### Checks performed
- **Homepage + HomePurchase (representative inner page)** reviewed at phone (375px), tablet (768px), desktop (1920px): hero grid stacks cleanly on mobile; no horizontal overflow; trust card sits below copy on narrow screens; CTA buttons wrap without cramping.
- **Shared navigation:** desktop dropdowns use `w-[min(92vw,32rem)]` (no overflow); mobile Sheet accordion is keyboard/touch accessible (Radix); utility bar hidden on mobile (phone accessible via header icon + bottom bar); skip-to-content link present.
- **Inquiry form:** labels present on all fields; required fields marked; inline validation + `aria-invalid`/`aria-describedby`; consent not preselected; no sensitive data collected; submit disabled + clearly unavailable pending integration; working phone/email alternatives shown.
- **Tap targets:** mobile nav links 44px+ min height; bottom action bar buttons 48px; review toggle ring-visible.
- **Keyboard focus:** `:focus-visible` ring globally applied; review toggle fixed; all interactive elements reachable.
- **Image crops:** hero uses `object-cover` + navy gradient overlay for readable text at all widths; advisor image lazy-loaded (`loading="lazy"`); hero eager-loaded with `fetchPriority="high"` (above the fold, no delay). Alt text descriptive throughout.
- **Image sizes:** hero 372KB JPEG, advisor 201KB JPEG — acceptable; no oversized assets found.
- **Heading hierarchy:** single H1 per page; H2 section headings; H3 card titles — correct order, no skipped levels.
- **Reduced motion:** global media query disables animations/transitions/smooth-scroll.

### Financial One visual comparison
- Composition matches reference: dark navy hero with layered CTAs + integrated review badge; goal-based entry cards; tool/benefit grids; repeated conversion opportunities at section transitions.
- Hierarchy preserved: bold display headings (Plus Jakarta Sans), high-contrast eyebrow labels, crisp body (Inter), amber CTA contrast against navy.
- HB identity preserved: navy/emerald/amber palette, HB monogram brand mark, ME & NH local focus, no Financial One identity/text/reviews copied.
- **Limitation:** live Financial One screenshots were not re-fetched this stage; comparison based on saved Stage 3 visual reference notes. No new screenshots available to verify pixel-level match.

### Unresolved dependencies (carryover)
- Lead-capture form-tracking integration still not connected (submission unavailable).
- HB verified external application destination still unconfirmed.
- Loan-officer-specific destinations pending Locate a Loan Officer page build.
- Officer headshots + secure document upload endpoint pending; contact facts pending owner confirmation.
- No verified HB video available.

---

## 28. Prompt 16 — Final Content, Links & Launch-Readiness Pass (COMPLETED — audit + defect batch 1)

### Changes (defect fixes)
- `src/components/GoogleReviewsSection.tsx` — corrected review card `sourceName` from "Verified Client Review" to "Google Review" on all 5 cards so every card visibly identifies Google as the source (cards already show the Google G logo).
- `src/hooks/usePageMeta.ts` — new lightweight per-page SEO hook: sets unique document.title, meta description, canonical link, and OG/Twitter tags per route on mount.
- Wired `usePageMeta` into all 8 built pages + homepage + NotFound with unique titles/descriptions and root-relative canonicals.
- `index.html` — added `<meta name="robots" content="noindex, nofollow">` (keeps preview/staging out of search indexing until launch); enhanced MortgageBroker JSON-LD with description, url, knowsAbout, and structured areaServed State objects. **No aggregateRating/Review JSON-LD added** (per project rule: no self-serving aggregate-review markup promising Google review stars in search).
- `public/sitemap.xml` — new XML sitemap listing all 28 implemented public routes with priorities/change frequencies.
- `public/robots.txt` — rewritten: disallows /thank-you, references sitemap, documents the noindex-until-launch policy.
- `src/pages/NotFound.tsx` — set a proper 404 page title; replaced raw `<a href="/">` with a themed `<Link>` + Button.

### Checks performed
- **Navigation inventory completeness:** All original menu/submenu options remain accessible. Buy a Home (→ Home Purchase + First-Time Homebuyers), Refinance, Loan Programs (top-level + Learning Center), Mortgage Calculators, Learning Center (Loan Programs, Loan Process, Mortgage Basics, Online Forms, FAQ, Blog), About (About Us, For Realtors, Contact, Testimonials, Review Us), Locate a Loan Officer (utility bar), Apply Now (header CTA), Request Quote (header/footer CTA). Footer legal links (Legal, Privacy Policy, Accessibility Statement, Site Map) all present. No original option silently disappeared.
- **Links audit:** All internal CTAs resolve to real routes. Phone (`tel:+12072155071`) and email (`mailto:ian@hbmortgagegroup.com`) links present site-wide (header, footer, hero, contact page, mobile action bar, inquiry form). No Financial One, ShareFile, SimpleNexus, Blend, or competitor external links found (searched). Apply Now CTAs consistently route to internal `/apply-now` placeholder (HB verified external application destination still unconfirmed).
- **Messaging consistency:** Searched all .tsx for "lowest rate", "guaranteed", "savings", "fastest", "best rate", "instant approval", numeric rate/percentage claims, credit score/FICO/DTI/income limit thresholds, "founded/since YYYY", "years of experience", "award/certified/accredited" — **zero matches**. Site consistently communicates: residential lending in ME & NH, direct ongoing support, education before pressure, clear next steps, lender-underwriting dependency.
- **Google Reviews:** Prominently displayed on homepage (hero trust card + full section). 5 genuine reviews with exact reviewer names, individual 5-star ratings, preserved text, dates, and Google G logo + "Google Review" source label on every card. Aggregate 5.0 rating / 18 reviews shown with verification date (March 2026). Read/Write review CTAs link to Google Maps. No aggregateRating JSON-LD emitted.
- **SEO:** Unique page titles + descriptions on all built pages; single H1 per page confirmed (11 H1s found, one per page); canonical URLs set per route; XML sitemap created; factual MortgageBroker structured data (NAP, NMLS, areaServed, knowsAbout) without review markup; preview noindex in place.
- **Company identity/licenses:** Company NMLS #1621025 used throughout (no officer NMLS substituted). Equal Housing Opportunity mark in footer. NMLS Consumer Access link present. Lending disclaimer in footer. Contact facts (243 US Route 1, Scarborough, ME 04074; (207) 215-5071; ian@hbmortgagegroup.com) carried forward — **pending owner confirmation before launch, not legally reviewed**.
- **Form behavior:** Inquiry form collects only permitted fields; no sensitive data; consent not preselected; validation + aria wiring intact; submission clearly unavailable pending integration; working phone/email alternatives shown. No success state simulated.
- **Tests:** 16/16 pass (calculator edge cases + example). No regressions.

### Remaining tasks (next batches)
- Build remaining placeholder pages: Locate a Loan Officer (`/loan-officer`), First-Time Homebuyers, Loan Process, Mortgage Basics, Online Forms, FAQ, Blog, Testimonials, Review Us, Apply Now, Pre-Qualify, Select Loan Officer, Download App, Download Ebook, Legal, Privacy Policy, Accessibility Statement, Site Map (per Prompt 11 & 12 queues).
- Per-page SEO meta for placeholder pages once built (hook is ready to drop in).
- Site Map page (`/site-map`) should render the route index dynamically rather than as a placeholder.

### Exact missing assets / integrations / data (launch blockers)
1. **Lead-capture form-tracking integration NOT connected** — inquiry form submission unavailable. Owner dismissed the integration picker. Need: a supported form-tracking integration ID + endpoint, then set `INTEGRATION_CONNECTED = true` and implement the verified submission call.
2. **HB verified external application destination unconfirmed** — Apply Now routes to internal placeholder. Need: HB's real online application URL (e.g. SimpleNexus/Encompass/Blend) verified.
3. **Loan-officer directory data** — `/loan-officer` is a placeholder. Need: verified current officer details (Ian Bushover, Elliott Colby, Aldi Guzja), authentic portraits (only Ian's verified; Aldi & Elliott need headshots), individual profile destinations, and application links. Do not invent bios or licenses.
4. **Officer headshots** — Aldi Guzja & Elliott Colby headshots pending.
5. **Secure document upload endpoint** — no HB-approved secure destination verified; no public uploader built.
6. **Contact facts owner confirmation** — NAP, phone, email pending owner sign-off before launch. Not legally reviewed.
7. **No verified HB video** — no click-to-play video section built.
8. **Google Maps Place ID** — direct write-review deep link pending (currently routes to Google Maps search).
9. **Production domain** — canonical URLs and sitemap host use root-relative paths; absolute production domain pending owner confirmation. Remove noindex meta at launch.

### Launch-readiness verdict
**NOT launch-ready.** Key routes remain placeholders (Apply Now, FAQ, Legal, Privacy Policy, etc.), the inquiry form cannot accept submissions, the application destination is unconfirmed, and contact facts await owner confirmation. This audit fixed concrete SEO/attribution/indexing defects; the site remains under active development.

---

## 29. Locate a Loan Officer — REMOVED (per owner request, 2026-09-06)

Owner requested removal of the "Locate a Loan Officer" page and all its nav/footer/utility-bar links.
- Removed from: `src/lib/nav.ts` (utilityLinks, footerNav "About" column, scaffoldRoutes), `src/pages/scaffold.tsx` (LoanOfficer component), `src/App.tsx` (import + `/loan-officer` route), `public/sitemap.xml`.
- Updated "Meet the Team" buttons in `AboutUs.tsx` → `/contact-us` and `ForRealtors.tsx` → `/about-us` (previously linked to `/loan-officer`).
- The separate `/select-loan-officer` route remains untouched (distinct page, part of the application flow).
- No loan-officer directory data was ever supplied; this page was a placeholder. Launch blocker #3 (loan-officer directory data) is now moot for this route.

---

## 30. Next Task (exact)
Continue building remaining placeholder pages per the Prompt 11 & 12 queues. Next unfinished page: **First-Time Homebuyers** (`/first-time-homebuyer`) — helpful overview of budgeting, documentation, application stages, and questions to ask. Link to programs and the calculator without promising eligibility.
