import React from "react";
import {
  Star,
  ExternalLink,
  MessageSquarePlus,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  GoogleReviewCard,
  GoogleReviewData,
} from "@/components/GoogleReviewCard";

/**
 * Verified Google Business Reviews Data for Home Base Mortgage Group, LLC (Scarborough, ME)
 * All 18 reviews copied directly from the business's Google Reviews page by the owner.
 * Overall rating: 5.0 across 18 Google reviews (all five-star).
 * Verification date: September 2026
 */
export const VERIFIED_GOOGLE_DATA = {
  businessName: "Home Base Mortgage Group, LLC",
  location: "Scarborough, ME",
  overallRating: 5.0,
  totalReviews: 18,
  verificationDate: "September 2026",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Home+Base+Mortgage+Group+Scarborough+ME",
  writeReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Home+Base+Mortgage+Group+Scarborough+ME",
};

/**
 * All 18 verified Google reviews, ordered newest-first.
 * Reviewer names, dates, and text are preserved exactly as they appear on Google.
 */
export const VERIFIED_REVIEWS: GoogleReviewData[] = [
  {
    id: "rev-1",
    reviewerName: "Luke Hayward",
    rating: 5,
    date: "2 weeks ago",
    text: "I'm a real estate agent and refer my clients to Jacob Auger at Home Base Mortgage Group whenever they're in need of financing, and I genuinely can't recommend them enough. Jacob is extremely knowledgeable, responsive, honest, and always takes the time to explain the process clearly to buyers. In real estate, having a lender who communicates well, stays ahead of deadlines, and can be counted on when things get complicated makes a huge difference, and Jacob consistently delivers. I've also had the opportunity to meet the owner of Home Base Mortgage Group, and it's easy to see why the company operates at such a high level. He runs a very good company, and it shows in the professionalism, service, and care their team provides. Every client I've sent their way has been taken care of exceptionally well, and I always feel confident knowing they're in good hands. Home Base Mortgage Group is an outstanding company, and I truly can't recommend them enough.",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-2",
    reviewerName: "Taylor Mitsin",
    rating: 5,
    date: "2 months ago",
    text: "My boyfriend and I just bought our first home and we used Jake from Home Base Mortgage. He was absolutely amazing through every step of the process. His communication was top notch. He made what is usually a stressful process very easy and seamless. He worked with us through every step, including the complications, and went above and beyond to make sure we were taken care of. I genuinely could not recommend him more to anyone in need of a mortgage lender!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-3",
    reviewerName: "Alex Berthiaume",
    rating: 5,
    date: "3 months ago",
    text: "Ian is very easy to work with and communicates well about the process. He made a tedious process painless, strongly recommend!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-4",
    reviewerName: "Jessica Auer",
    rating: 5,
    date: "4 months ago",
    text: "Highly recommend Home Base Mortgage Group. Ian is fantastic! He is extremely knowledgeable, professional, and responsive. He made it easy for us throughout the entire home buying process by providing all the answers and tools we needed along the way to obtain financing, from day one through the closing.",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-5",
    reviewerName: "Pat Wolfe",
    rating: 5,
    date: "4 months ago",
    text: "Smooth and easy process with Ian! Highly recommend his services. He was great with communication and available for questions when needed when buying our new home. Will absolutely use him in the future!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-6",
    reviewerName: "Florent Hoxha",
    rating: 5,
    date: "a year ago",
    text: "I used Ian for my mortgage and also a few times to refinance. Also recommended him to family and friends. They do an amazing job making the process easy and quick. Ian is always available to answer any questions and also a great guide for anything mortgage. Him and his team are the Best in the Business.",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-7",
    reviewerName: "Luke Morris",
    rating: 5,
    date: "a year ago",
    text: "Ian has been an integral part of my real estate business for 6 years. As a realtor I've worked with a lot of lenders and I can confidently say that Ian and the team at Home Base Mortgage are the cream of the crop. If you're looking for a lender that will take the time to really explain to you the the ins and outs of financing a home purchase, and will do everything in their power to get even the most complicated deals closed, Ian is your guy!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-8",
    reviewerName: "Donavin Henson",
    rating: 5,
    date: "a year ago",
    text: "Very thorough with all of your finances to make sure you're set for your home. Quick to communicate and works efficiently. Highly recommend working with Ian.",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-9",
    reviewerName: "Kim Bartlett",
    rating: 5,
    date: "2 years ago",
    text: "We have used Ian to buy our last 2 homes. He has kept us informed of everything that needed to be done along the way and where we were in the process. Ian was extremely prompt at getting back to us with any concerns or questions. I would highly recommend Ian for any of your mortgage needs! Kim & Kenny Bartlett",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-10",
    reviewerName: "Daniel Chasse",
    rating: 5,
    date: "2 years ago",
    text: "Working with Ian was great! He was there for us along every step of the way buying our home. If we ever had any questions he was always more than willing to go the extra mile to answer them!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-11",
    reviewerName: "Reef",
    rating: 5,
    date: "2 years ago",
    text: "Ian is an absolute rockstar! When we moved from Colorado to Maine, Ian was our financial rock throughout this stressful time. If you're looking for someone who takes care of everything, even the little things you don't think of, Ian's your guy. He's so prepared, honest, and a total hustler! Don't miss out on this amazing person. Highly recommended!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-12",
    reviewerName: "John Rizeakos",
    rating: 5,
    date: "2 years ago",
    text: "Have nothing but good things to say. They made my buying experience very easy. Ian is professional, and knows how to get the job done right. Highly recommend!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-13",
    reviewerName: "JJ Marcigliano",
    rating: 5,
    date: "4 years ago",
    text: "Ian was absolutely awesome for our first house buying experience. He was helping us and answering question before we even decided to go with Home Base. Made it so we closed in under 45 days with no hiccups. Would highly recommend and we got locked in at a super low rate!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-14",
    reviewerName: "Leah Carter",
    rating: 5,
    date: "4 years ago",
    text: "I would highly recommend Ian to anyone looking for a knowledgeable and trust worthy mortgage broker! As first time home buyers, he made this process seem much less daunting than we expected. His responsiveness made us feel supported through the entire process. We never once felt like we were just another client to Ian!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-15",
    reviewerName: "Karen Tanguay",
    rating: 5,
    date: "4 years ago",
    text: "I just recently purchased my second home. Brittney & Ian at Home Base Mortgage were absolutely amazing to work with. I highly recommend them as they were knowledgeable, efficient and extremely friendly to work with. The whole process was extremely smooth and I could not be happier! I will refer all my friends to Home Base Mortgage for any of their mortgage needs!:-)",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-16",
    reviewerName: "Noah Coyle",
    rating: 5,
    date: "5 years ago",
    text: "As a first time home buyer I was overwhelmed with the financial aspect of purchasing a home. My realtor suggested I speak with Ian and I am glad I did. Ian called me and took the time to explain the home buying process and what options I had for a mortgage. He was always available and kept me up to date with the home buying process.",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-17",
    reviewerName: "Calvin Stevens",
    rating: 5,
    date: "5 years ago",
    text: "As a first time home buyer and not knowing anything about purchasing, Ian Bushover made it into a cake walk. I appreciate all the work he had done for me, and look forward to working with him again in the future. I highly recommend reaching out the Home Base Mortgage Group, LLC when planning on purchasing a new home, especially if you're a first time buyer!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
  {
    id: "rev-18",
    reviewerName: "Bailey Pate",
    rating: 5,
    date: "6 years ago",
    text: "I'm a real estate agent, so I work with many different lenders on a regular basis. I chose to use Ian Bushover at Home Base Mortgage Group for financing on my first home. The decision was easy... Ian is by far one of the best lenders out there. His communication, experience, and level of service are far above his competition. Ian truly cares about his clients and it shows. I highly recommend Ian Bushover at Home Base Mortgage Group to anyone looking for financing services. Five stars all the way!",
    sourceUrl: VERIFIED_GOOGLE_DATA.googleMapsUrl,
    sourceName: "Google Review",
  },
];

interface GoogleReviewsSectionProps {
  /** Number of reviews to display (default: 6). Pass 0 or omit count to show all. */
  limit?: number;
}

export const GoogleReviewsSection: React.FC<GoogleReviewsSectionProps> = ({
  limit = 6,
}) => {
  const displayedReviews =
    limit && limit > 0 ? VERIFIED_REVIEWS.slice(0, limit) : VERIFIED_REVIEWS;

  return (
    <section
      className="section bg-primary/5 relative overflow-hidden scroll-mt-28"
      id="client-reviews"
    >
      <div className="container-hb">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Verified Client Feedback
          </div>

          <h2 className="mt-4 h2">What Our Clients Say on Google</h2>

          <p className="mt-3 lead">
            Real feedback from local Maine and New Hampshire buyers and
            homeowners who worked directly with our team.
          </p>

          {/* Aggregate Rating Summary Badge */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 rounded-[var(--radius)] border border-border bg-background/95 p-4 shadow-sm backdrop-blur-xs sm:gap-6">
            <div className="flex items-center gap-2">
              {/* Google G logo */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200">
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="font-display text-xl font-extrabold text-foreground">
                    {VERIFIED_GOOGLE_DATA.overallRating.toFixed(1)}
                  </span>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Based on {VERIFIED_GOOGLE_DATA.totalReviews} verified Google
                  reviews
                </p>
              </div>
            </div>

            <div
              className="h-8 w-px bg-border hidden sm:block"
              aria-hidden="true"
            />

            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs"
              >
                <a
                  href={VERIFIED_GOOGLE_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5 text-primary" />
                  Read Google Reviews
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="gap-1.5 text-xs"
              >
                <a
                  href={VERIFIED_GOOGLE_DATA.writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquarePlus className="h-3.5 w-3.5 text-accent" />
                  Write a Review
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Grid of Reviews */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedReviews.map((review) => (
            <GoogleReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Footnote / verification info */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>
            Verified Google reviews for{" "}
            <span className="font-semibold text-foreground">
              {VERIFIED_GOOGLE_DATA.businessName}
            </span>{" "}
            in {VERIFIED_GOOGLE_DATA.location}.
          </p>
          <a
            href={VERIFIED_GOOGLE_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            See all verified reviews on Google Maps
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
