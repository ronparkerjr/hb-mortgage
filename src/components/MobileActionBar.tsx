import { Phone } from "lucide-react";
import { company } from "@/lib/nav";

/**
 * Mobile-only persistent call button pinned to the bottom of the screen.
 * Visible only on narrow screens (below `lg`). Tapping it initiates a
 * phone call to the HB Mortgage Group main line.
 */
export const MobileActionBar = () => {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 lg:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="container-hb px-4 py-3">
        <a
          href={company.phoneHref}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-cta text-sm font-semibold text-cta-foreground transition-colors hover:bg-cta-hover active:bg-cta-hover"
          aria-label={`Call ${company.phone}`}
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call {company.phone}
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
