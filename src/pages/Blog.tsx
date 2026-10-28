import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/nav";
import { CompactHero } from "@/components/CompactHero";

const HERO_IMG =
  "https://vibe.filesafe.space/1788700173943534517/assets/62930a28-19df-46fe-a9ee-870d8e8a78b0.png";

/**
 * Blog Index Page (`/blog`).
 * Built using exact articles, dates, summaries, and images scraped from client's current blog.
 */
export const Blog = () => {
  const articles = [
    {
      title: "Ignite Buyer Frenzy: Price Your Home Right from Day One",
      summary:
        "Learn how pricing your home right from day one captures maximum buyer momentum and avoids the stale listing trap.",
      date: "08/31/2026",
      img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/1ed8ad249a5f6d4907a3a4be7c3d594baa811d82.jpg?format=webp",
    },
    {
      title: "Why August-to-Winter Is the Ultimate Buyer Negotiation Window",
      summary:
        "Discover why August through winter may give prepared homebuyers more inventory, less competition and greater negotiating power on price, repairs and incentives.",
      date: "08/24/2026",
      img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/76513342ffba1c7ae6fce45045e76a1f5c7efec3.jpg?format=webp",
    },
    {
      title: "What Is Mortgage Escrow?",
      summary:
        "Discover what mortgage escrow is and how it protects your funds and documents during a home purchase. Learn key tips for buyers to ensure a smooth closing process.",
      date: "08/17/2026",
      img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/8c8a531777bf3af9a7d8a93d70e0792aa4caa57c.jpg?format=webp",
    },
    {
      title: "Should I Buy a House Now or Wait?",
      summary:
        "Learn why current opportunities exist for homebuyers despite mortgage rate fluctuations, and why personal readiness often matters more than trying to perfectly time the market.",
      date: "08/10/2026",
      img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/26e2ec2380bab0350c1a3e2f8dac8e1c22f19860.jpg?format=webp",
    },
    {
      title: "Why Homes Near a University Can Be a Smart Buy",
      summary:
        "Discover why homes near a university can be a smart choice for homebuyers. Learn how strong local employment, steady housing demand, and community amenities support long term value.",
      date: "08/03/2026",
      img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/dc024d73191d994ddde8b4a0d4052550f473d0f1.jpg?format=webp",
    },
    {
      title: "Should You Sell Your Current Home Before Buying a New One?",
      summary:
        "Should you sell your current home before buying your next one? Learn the pros, cons, financing options, and key factors that can help you make the best move for your financial situation.",
      date: "07/27/2026",
      img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/097168c1a789b53653d86cd559a4a522de5e464d.jpg?format=webp",
    },
    {
      title: "Hazard Insurance vs Homeowners Insurance",
      summary:
        "Learn the difference between hazard insurance and homeowners insurance, what lenders require, what each policy covers, and how understanding both helps prevent closing day surprises.",
      date: "07/20/2026",
      img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/66f6283b24932bf476b025a3307b8f932a01b3b3.jpg?format=webp",
    },
    {
      title: "Medical Debt Doesn't Kill Approval",
      summary:
        "Understand how medical debt is evaluated during mortgage underwriting and why past medical bills don't automatically prevent you from securing a home loan.",
      date: "07/13/2026",
      img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/a8a1dfeb132be98254fea3d8f4c9034ae0f75abd.png?format=webp",
    },
    {
      title: "Active Duty. VA Benefit. Use It Now",
      summary:
        "Discover how active-duty military personnel and veterans can maximize their VA home loan benefits, zero-down financing options, and competitive interest rates.",
      date: "06/29/2026",
      img: "https://d2vfmc14ehtaht.cloudfront.net/9550632135c787760e/cc838be1b08db358552f3045c36268d721626508.jpg?format=webp",
    },
  ];

  return (
    <>
      <CompactHero
        eyebrow="Mortgage Insights"
        title="Recent Articles & Advice"
        subtitle="Stay informed with real estate news, homebuying tips, escrow advice, and financing strategies from HB Mortgage Group."
        bgImage={HERO_IMG}
        bgAlt="Stack of newspapers and magazines with coffee, real estate news concept"
        meta={{
          title: "Mortgage Blog — Homebuyer Insights & Market Advice",
          description:
            "Read recent articles and homebuying tips from HB Mortgage Group: home pricing strategies, escrow explanations, market timing, hazard insurance, VA benefits, and more.",
          path: "/blog",
        }}
      />

      {/* ===================== ARTICLES LIST ===================== */}
      <section className="section bg-secondary/30">
        <div className="container-hb">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Industry News</span>
            <h2 className="mt-3 h2">Mortgage &amp; Real Estate Articles</h2>
            <p className="mt-3 lead">
              Educational reading to help you make informed decisions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map(({ title, summary, date, img }) => (
              <div
                key={title}
                className="surface-card flex flex-col justify-between overflow-hidden p-0 transition-shadow hover:shadow-md"
              >
                <div>
                  <img
                    src={img}
                    alt={title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar
                        className="h-3.5 w-3.5 text-accent"
                        aria-hidden="true"
                      />
                      <span>Published on {date}</span>
                    </div>
                    <h3 className="mt-2.5 h3 text-lg">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {summary}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    Read &amp; discuss with an expert
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CLOSING CTA BANNER ===================== */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container-hb text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="h2 text-primary-foreground">
              Have Questions About an Article or Your Situation?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
              Contact our Scarborough team directly to discuss home financing in
              Maine and New Hampshire.
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

export default Blog;
