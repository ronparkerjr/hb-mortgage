import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Stage 8 — Four short FAQs answered from the owner-supplied brief.
 * No invented promises.
 */
const FAQS: { q: string; a: string }[] = [
  {
    q: "Where do you serve?",
    a: "We help homebuyers and homeowners throughout Maine and New Hampshire with residential purchases and refinances. We don\u2019t handle commercial lending.",
  },
  {
    q: "Can we talk before I apply?",
    a: "Yes \u2014 and we encourage it. Start with your questions, goals, and timeline. We\u2019ll discuss payment estimates and options before you move toward an application or prequalification.",
  },
  {
    q: "Can you help me compare refinance options?",
    a: "Absolutely. We\u2019ll compare available refinancing options, rates, and closing costs so you can see the trade-offs for your situation \u2014 without promising the lowest rate or guaranteed savings.",
  },
  {
    q: "Will your team stay involved throughout the process?",
    a: "Yes. You work directly with the HB team from your first conversation through closing. We process our own loans and help coordinate lender review instead of handing you off to an unfamiliar contact.",
  },
];

export const FaqSection = () => {
  return (
    <section className="section">
      <div className="container-hb grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div>
          <span className="eyebrow">Common Questions</span>
          <h2 className="mt-3 h2">Answers Before You Ask</h2>
          <p className="mt-4 lead">
            Straight answers to the questions we hear most. Have one that
            isn&rsquo;t here? We&rsquo;re happy to talk it through.
          </p>
          <div className="mt-6">
            <Button asChild variant="quote">
              <Link to="/faq">
                See All FAQs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map(({ q, a }, i) => (
            <AccordionItem key={q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
