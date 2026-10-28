import { Link } from "react-router-dom";
import { Construction, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderProps {
  title: string;
  /** Short description of what this page will cover. */
  description?: string;
}

/**
 * Shared placeholder for scaffolded routes that are not yet built.
 * Clearly marked as in-progress — never presented as launch-ready.
 */
export const PagePlaceholder = ({ title, description }: PlaceholderProps) => {
  return (
    <section className="section">
      <div className="container-hb max-w-2xl text-center">
        <span className="eyebrow">
          <Construction className="h-3.5 w-3.5" aria-hidden="true" />
          In Progress
        </span>
        <h1 className="mt-4 h1">{title}</h1>
        {description && <p className="mt-4 lead">{description}</p>}
        <p className="mt-6 text-sm text-muted-foreground">
          This page is part of the HB Mortgage Group rebuild and is not yet
          published. Content is under development.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="default">
            <Link to="/">
              Back to Home
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
