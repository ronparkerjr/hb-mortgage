import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Loader2,
  AlertCircle,
  Phone,
  Mail,
  ShieldCheck,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { company } from "@/lib/nav";

export type InquiryGoal =
  "purchase" | "refinance" | "home-equity" | "realtor-partnership" | "general";

export interface InquiryFormProps {
  /** Preselected goal carried in from the page's CTA context. */
  defaultGoal?: InquiryGoal | "";
  /** Optional heading shown above the form fields. */
  heading?: string;
  /** Optional subheading shown above the form fields. */
  subheading?: string;
  /** Compact variant for sidebars / narrow columns. */
  compact?: boolean;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  state: string;
  goal: InquiryGoal | "";
  message: string;
  consent: boolean;
}

type Status = "idle" | "submitting" | "error" | "unavailable";

const GOAL_OPTIONS: { value: InquiryGoal; label: string }[] = [
  { value: "purchase", label: "Buying a home" },
  { value: "refinance", label: "Refinancing my home" },
  { value: "home-equity", label: "Home equity discussion" },
  { value: "realtor-partnership", label: "Realtor partnership" },
  { value: "general", label: "General question" },
];

const STATE_OPTIONS = ["Maine", "New Hampshire", "Other / Not sure yet"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Reusable mortgage inquiry form.
 *
 * Collects only: name, email, optional phone, state, goal, optional message,
 * and a required contact-consent checkbox. No SSNs, birth dates, bank
 * details, credit documents, or attachments.
 *
 * NOTE: The lead-capture integration endpoint is not yet connected. Until it
 * is supplied and verified, the submit button is disabled and submission is
 * clearly marked unavailable — no simulated delivery. Visitors are directed
 * to working phone/email actions in the meantime.
 */
export const InquiryForm = ({
  defaultGoal = "",
  heading,
  subheading,
  compact = false,
}: InquiryFormProps) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    state: "",
    goal: defaultGoal,
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});

  // Integration not yet connected — submission is unavailable.
  const INTEGRATION_CONNECTED = false;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.goal) next.goal = "Please select a goal.";
    if (!form.consent)
      next.consent = "Please acknowledge the contact consent to continue.";
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
      // Placeholder for the real submission call.
      setStatus("error");
      setErrors({
        message:
          "We could not complete your submission right now. Please use the phone or email options below.",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="surface-card w-full bg-background/95 p-6 text-foreground shadow-xl backdrop-blur-sm sm:p-8">
      {/* Header — matches hero lead form */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-cta/10 text-cta">
          <Send className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="font-display text-lg font-bold leading-tight">
            {heading ?? "We've got your answers!"}
          </p>
          <p className="text-xs text-muted-foreground">
            {subheading ??
              "No pressure. Just clear answers from your lending experts!"}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-5" noValidate>
        <div
          className={
            compact ? "space-y-5" : "grid grid-cols-1 gap-5 sm:grid-cols-2"
          }
        >
          <div className="space-y-1.5">
            <Label htmlFor="inq-name">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="inq-name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "inq-name-err" : undefined}
            />
            {errors.name && (
              <p id="inq-name-err" className="text-xs text-destructive">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="inq-email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="inq-email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "inq-email-err" : undefined}
            />
            {errors.email && (
              <p id="inq-email-err" className="text-xs text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="inq-phone">Phone (optional)</Label>
            <Input
              id="inq-phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="inq-state">State</Label>
            <Select
              value={form.state}
              onValueChange={(v) => update("state", v)}
            >
              <SelectTrigger id="inq-state">
                <SelectValue placeholder="Select a state" />
              </SelectTrigger>
              <SelectContent>
                {STATE_OPTIONS.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="inq-goal">
            What can we help with? <span className="text-destructive">*</span>
          </Label>
          <Select
            value={form.goal}
            onValueChange={(v) => update("goal", v as InquiryGoal)}
          >
            <SelectTrigger id="inq-goal">
              <SelectValue placeholder="Select a goal" />
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

        <div className="space-y-1.5">
          <Label htmlFor="inq-message">Message (optional)</Label>
          <Textarea
            id="inq-message"
            rows={4}
            placeholder="Share your goals, timing, property type, or questions. Please do not include sensitive details like Social Security numbers or account numbers."
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Do not include SSNs, birth dates, bank details, credit documents, or
            attachments in this message.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-start gap-2.5">
            <Checkbox
              id="inq-consent"
              checked={form.consent}
              onCheckedChange={(v) => update("consent", v === true)}
              className="mt-0.5"
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "inq-consent-err" : undefined}
            />
            <Label
              htmlFor="inq-consent"
              className="text-xs leading-relaxed text-muted-foreground"
            >
              I agree to be contacted by {company.legalName} about my inquiry by
              phone, email, or text. I understand this is not a loan application
              and that formal approval depends on lender underwriting. See our{" "}
              <Link
                to="/privacy-policy"
                className="font-medium text-primary hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </Label>
          </div>
          {errors.consent && (
            <p id="inq-consent-err" className="text-xs text-destructive">
              {errors.consent}
            </p>
          )}
        </div>

        {status === "error" && errors.message && (
          <div className="flex items-start gap-2.5 rounded-md border border-destructive/30 bg-destructive/5 p-3.5 text-sm text-destructive">
            <AlertCircle
              className="mt-0.5 h-4 w-4 flex-none"
              aria-hidden="true"
            />
            <span>{errors.message}</span>
          </div>
        )}

        {status === "unavailable" && (
          <div className="flex items-start gap-2.5 rounded-md border border-amber-400/40 bg-amber-50 p-3.5 text-sm text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
            <AlertCircle
              className="mt-0.5 h-4 w-4 flex-none"
              aria-hidden="true"
            />
            <span>
              Online submission is not available yet. Please call us at{" "}
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

      {/* Working contact alternatives — matches hero form */}
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
      </div>
    </div>
  );
};

export default InquiryForm;
