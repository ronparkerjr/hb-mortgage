import React, { useState } from "react";
import { Star, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface GoogleReviewData {
  id: string;
  reviewerName: string;
  reviewerPhoto?: string;
  location?: string;
  rating: number; // e.g. 5
  date: string; // e.g. "December 2021"
  text: string;
  sourceUrl: string;
  sourceName?: string; // "Google Business Review"
}

interface GoogleReviewCardProps {
  review: GoogleReviewData;
  maxLength?: number;
}

export const GoogleReviewCard: React.FC<GoogleReviewCardProps> = ({
  review,
  maxLength = 180,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLong = review.text.length > maxLength;

  const displayText =
    isLong && !isExpanded
      ? `${review.text.substring(0, maxLength).trim()}...`
      : review.text;

  return (
    <div className="surface-card flex flex-col justify-between p-6 transition-all hover:shadow-md border border-border/80">
      <div>
        {/* Source badge & Stars header */}
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-border/60">
          <div className="flex items-center gap-1.5">
            {/* Google G logo indicator */}
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200">
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
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
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {review.sourceName || "Google Review"}
            </span>
          </div>

          <span className="text-xs text-muted-foreground">{review.date}</span>
        </div>

        {/* Rating stars */}
        <div
          className="mt-4 flex items-center gap-1"
          aria-label={`${review.rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < review.rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-muted text-muted"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Review body text */}
        <p className="mt-3 text-sm leading-relaxed text-foreground/90 italic">
          &ldquo;{displayText}&rdquo;
        </p>

        {/* Read more button if truncated */}
        {isLong && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 inline-flex items-center gap-1 rounded-sm text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                Show less <ChevronUp className="h-3 w-3" />
              </>
            ) : (
              <>
                Read full review <ChevronDown className="h-3 w-3" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Reviewer signature */}
      <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
        <div>
          <p className="font-display text-sm font-bold text-foreground">
            {review.reviewerName}
          </p>
          {review.location && (
            <p className="text-xs text-muted-foreground">{review.location}</p>
          )}
        </div>

        <a
          href={review.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors p-1"
          title="View on Google Maps"
          aria-label={`View ${review.reviewerName}'s review on Google`}
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
};
