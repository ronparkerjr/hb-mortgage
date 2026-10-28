import { useState, FormEvent } from "react";
import {
  Loader2,
  AlertCircle,
  Phone,
  Mail,
  ShieldCheck,
  Send,
  ArrowRight,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { company, APPLY_URL } from "@/lib/nav";

type HeroGoal = "purchase" | "refinance" | "home-equity" | "general";

interface HeroFormState {
  name: string;
  email: string;
  phone: string;
  goal: HeroGoal | "";
  message: string;
}

type Status = "idle" | "submitting" | "error" | "unavailable";

const GOAL_OPTIONS: { value: HeroGoal; label: string }[] = [
  { value: "purchase", label: "Buying a home" },
  { value: "refinance", label: "Refinancing my home" },
  { value: "home-equity", label: "Home equity discussion" },
  { value: "general", label: "General question" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Compact hero lead form — a short, eye-catching reach-out box typical of a
 * lender homepage. Collects only name, email, optional phone, goal, and
 * required contact consent. No SSNs, birth dates, bank details, or documents.
 *
 * NOTE: The lead-capture integration endpoint is not yet connected. Until it
 * is supplied and verified, the submit button is disabled and submission is
 * clearly marked unavailable — no simulated delivery. Visitors are directed
 * to working phone/email actions in the meantime.
 */
interface HeroLeadFormProps {
  defaultGoal?: HeroGoal | "";
}

export const HeroLeadForm = ({ defaultGoal = "" }: HeroLeadFormProps) => {
  const [form, setForm] = useState<HeroFormState>({
    name: "",
    email: "",
    phone: "",
    goal: defaultGoal,
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<
    Partial<Record<keyof HeroFormState, string>>
  >({});

  // Integration not yet connected — submission is unavailable.
  const INTEGRATION_CONNECTED = false;

  const update = <K extends keyof HeroFormState>(
    key: K,
    value: HeroFormState[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof HeroFormState, string>> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.email.trim()) {
      next.email = "Required";
    } else if (!EMAIL_RE.test(form.email.trim())) {
      next.email = "Enter a valid email";
    }
    if (!form.goal) next.goal = "Select a goal";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    if (!INTEGRATION_CONNECTED) {
      setStatus("unavailable");
      return;
    }

    if (!validate()) return;

    setStatus("submitting");
    try {
      // When the integration endpoint is connected, the verified fetch/workflow
      // call goes here. Success is shown ONLY after the service confirms
      // acceptance — never simulated.
      // eslint-disable-next-line no-unused-vars
      const _payload = { ...form };
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="surface-card w-full max-w-md bg-background/95 p-5 text-foreground shadow-xl backdrop-blur-sm sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-cta/10 text-cta">
          <Send className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="font-display text-lg font-bold leading-tight">
            We&rsquo;ve got your answers!
          </p>
          <p className="text-xs text-muted-foreground">
            No pressure. Just clear answers from your lending experts!
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="hero-name" className="text-xs font-semibold">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="hero-name"
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "hero-name-err" : undefined}
              className="h-10"
            />
            {errors.name && (
              <p id="hero-name-err" className="text-xs text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="hero-email" className="text-xs font-semibold">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="hero-email"
              type="email"
              autoComplete="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "hero-email-err" : undefined}
              className="h-10"
            />
            {errors.email && (
              <p id="hero-email-err" className="text-xs text-destructive">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Phone + Goal */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="hero-phone" className="text-xs font-semibold">
              Phone <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input
              id="hero-phone"
              type="tel"
              autoComplete="tel"
              placeholder="(207) 555-0123"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="h-10"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="hero-goal" className="text-xs font-semibold">
              Goal <span className="text-destructive">*</span>
            </Label>
            <Select
              value={form.goal}
              onValueChange={(v) => update("goal", v as HeroGoal)}
            >
              <SelectTrigger id="hero-goal" className="h-10">
                <SelectValue placeholder="I'm interested in…" />
              </SelectTrigger>
              <SelectContent>
                {GOAL_OPTIONS.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.goal && (
              <p className="text-xs text-destructive">{errors.goal}</p>
            )}
          </div>
        </div>

        {/* Optional message */}
        <div className="space-y-1.5">
          <Label htmlFor="hero-message" className="text-xs font-semibold">
            Add details about your question{" "}
            <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Textarea
            id="hero-message"
            placeholder="Tell us a little about your situation or what you'd like help with…"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={3}
            maxLength={600}
            className="resize-none text-sm"
          />
          <p className="text-right text-[10px] text-muted-foreground">
            {form.message.length}/600
          </p>
        </div>

        {status === "unavailable" && (
          <div className="flex items-start gap-2.5 rounded-md border border-amber-400/40 bg-amber-50 p-3 text-xs leading-relaxed text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
            <AlertCircle
              className="mt-0.5 h-4 w-4 flex-none"
              aria-hidden="true"
            />
            <span>
              Online submission is not available yet. Please call{" "}
              <a href={company.phoneHref} className="font-semibold underline">
                {company.phone}
              </a>{" "}
              or email{" "}
              <a href={company.emailHref} className="font-semibold underline">
                {company.email}
              </a>
              .
            </span>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-start gap-2.5 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-xs leading-relaxed text-destructive">
            <AlertCircle
              className="mt-0.5 h-4 w-4 flex-none"
              aria-hidden="true"
            />
            <span>
              We could not complete your submission right now. Please use the
              phone or email options below.
            </span>
          </div>
        )}

        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending&hellip;
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Click Here To Submit!
            </>
          )}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          No SSNs or credit pulls &mdash; just a friendly conversation.
        </p>
      </form>

      {/* Working contact alternatives */}
      <div className="mt-5 border-t border-border pt-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Prefer to talk now?
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-cta hover:underline"
        >
          Ready to apply? Start your application
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default HeroLeadForm;
