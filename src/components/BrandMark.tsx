import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BrandMarkProps {
  className?: string;
  variant?: "default" | "light";
  /** Hide the wordmark text if showing image only or compact view. */
  iconOnly?: boolean;
}

const NEW_LOGO_URL =
  "https://vibe.filesafe.space/1788700173943534517/attachments/b0f98c3b-82b0-4531-bf02-19513523a41c.png";

/**
 * HB Mortgage Group brand mark using the official full house-roof logo image.
 * Supports light and default header/footer variants with contrast handling.
 */
export const BrandMark = ({
  className,
  variant = "default",
  iconOnly = false,
}: BrandMarkProps) => {
  return (
    <Link
      to="/"
      aria-label="HB Mortgage Group — home"
      className={cn("group inline-flex items-center gap-2", className)}
    >
      <img
        src={NEW_LOGO_URL}
        alt="HB Mortgage Group"
        className={cn(
          "h-12 w-auto max-w-[240px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14 lg:h-14",
          variant === "light" && "brightness-0 invert",
        )}
      />
    </Link>
  );
};
