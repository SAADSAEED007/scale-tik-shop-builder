import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const FORM_ENDPOINT = "https://formspree.io/f/xjgpgzaa";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubmissionStatus = "idle" | "success" | "error";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !EMAIL_PATTERN.test(trimmedEmail)) {
      setSubmissionStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("idle");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new URLSearchParams({ email: trimmedEmail }),
      });

      if (!response.ok) {
        throw new Error(`Formspree request failed with status ${response.status}`);
      }

      setEmail("");
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Newsletter submission error:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 md:p-12 rounded-[2.5rem] text-center bg-secondary/30 border border-border/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Zap size={100} />
      </div>
      <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4">
        The System Behind Every Brand We Scale
      </h2>
      <p className="text-base text-muted-foreground mb-8">
        The exact system we use to take brands from launch to $100K+ per month using creators, native content, optimization, and paid scale.
        <br /><br />
        Thinking about starting or ready to scale on TikTok Shop? This is for you.
      </p>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="name@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (submissionStatus !== "idle") {
              setSubmissionStatus("idle");
            }
          }}
          className="flex-1 h-12 px-6 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
        />
        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="rounded-full shadow-lg"
          disabled={isSubmitting}
        >
          Send it
        </Button>
      </form>
      {submissionStatus === "success" ? (
        <p className="mt-4 text-sm font-medium text-emerald-600" role="status" aria-live="polite">
          ✅ Success. The system is on its way to your email.
        </p>
      ) : submissionStatus === "error" ? (
        <p className="mt-4 text-sm font-medium text-red-600" role="alert" aria-live="polite">
          ❌ Something went wrong. Please try again.
        </p>
      ) : null}
    </div>
  );
};

export default NewsletterSignup;
