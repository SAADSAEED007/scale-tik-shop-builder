import { useState } from "react";
import { Button } from "@/components/ui/button";
import TapeLabel from "@/components/TapeLabel";
import FadeIn from "@/components/FadeIn";
import { Send } from "lucide-react";
import SEO from "@/components/SEO";

const revenueRanges = ["Under $10K/mo", "$10K–$50K/mo", "$50K–$200K/mo", "$200K+/mo"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", brand: "", revenue: "", goals: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    alert("Thanks! We'll be in touch soon.");
  };

  return (
    <div>
      <SEO 
        title="Contact Us"
        description="Ready to scale your TikTok Shop? Get in touch today for a free audit call. Let's map your fastest path to growth."
        keywords="Contact TikShop Scale, TikTok Shop Audit, eCommerce Consultation"
      />
      <section className="pt-36 pb-20 md:py-28 bg-card grid-net">
        <div className="container max-w-2xl text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Let's <TapeLabel>talk</TapeLabel>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us where you want to go. We'll map the fastest path.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 grid-net">
        <div className="container max-w-xl">
          <FadeIn>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-semibold block mb-1.5">Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-11 px-4 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-11 px-4 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@brand.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1.5">Brand / Company</label>
                <input
                  type="text"
                  value={form.brand}
                  onChange={(e) => setForm({ ...form, brand: e.target.value })}
                  className="w-full h-11 px-4 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your brand name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1.5">Monthly Revenue Range</label>
                <select
                  value={form.revenue}
                  onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                  className="w-full h-11 px-4 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select range</option>
                  {revenueRanges.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1.5">Goals</label>
                <input
                  type="text"
                  value={form.goals}
                  onChange={(e) => setForm({ ...form, goals: e.target.value })}
                  className="w-full h-11 px-4 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g. Scale TikTok Shop to $100K/mo"
                />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1.5">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us more about your brand and what you're looking for..."
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full gap-2">
                Send Message <Send size={16} />
              </Button>
            </form>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 p-6 rounded-lg border border-border bg-muted/50 text-center">
              <p className="text-sm text-muted-foreground">📅 Prefer to book directly? Calendar scheduling coming soon.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Contact;
