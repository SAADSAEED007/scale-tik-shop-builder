import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TapeLabel from "@/components/TapeLabel";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "TikTok Shop Setup + Optimization",
    desc: "We build or optimize your TikTok Shop from scratch — product listings, storefront design, category strategy, and conversion best practices.",
    bullets: ["Full shop setup or audit", "Product listing optimization", "Category & pricing strategy", "Conversion rate improvements"],
    who: "Brands launching on TikTok Shop or underperforming in GMV.",
    timeline: "2–4 weeks",
  },
  {
    title: "Creator Seeding + Affiliate Program",
    desc: "We find, vet, outreach, and manage creators at scale to build an affiliate engine that compounds revenue month over month.",
    bullets: ["Creator identification & vetting", "Outreach & negotiation", "Affiliate program management", "Performance tracking & optimization"],
    who: "Brands ready to scale creator-driven sales.",
    timeline: "Ongoing, results in 4–6 weeks",
  },
  {
    title: "UGC Production + Creative Direction",
    desc: "Scroll-stopping content designed to sell. We handle briefs, creators, filming guidance, and editing.",
    bullets: ["Creative strategy & briefs", "Creator matching & management", "Video editing & iteration", "Hook testing frameworks"],
    who: "Brands needing high-volume, high-converting content.",
    timeline: "Ongoing, first batch in 2 weeks",
  },
  {
    title: "Spark Ads + Performance Creative Testing",
    desc: "Paid media on TikTok designed around weekly testing cycles. We run the ads, you see the ROAS.",
    bullets: ["Campaign setup & structure", "Weekly creative testing", "Audience & bid optimization", "Detailed performance reporting"],
    who: "Brands investing $5K+/mo in TikTok ads.",
    timeline: "Ongoing with weekly optimizations",
  },
  {
    title: "Live Shopping Strategy",
    desc: "Live selling playbooks, host sourcing, and engagement tactics that turn live sessions into revenue events.",
    bullets: ["Live strategy development", "Host recruitment & training", "Engagement & conversion tactics", "Post-live analysis"],
    who: "Brands ready to leverage live commerce.",
    timeline: "Setup in 2–3 weeks, ongoing shows",
  },
  {
    title: "Shop Operations + Reporting",
    desc: "Inventory coordination, order management support, and real-time dashboards so you always know what's working.",
    bullets: ["Inventory & fulfillment coordination", "Order management support", "Real-time performance dashboards", "Monthly strategy reviews"],
    who: "Brands scaling beyond $50K/mo on TikTok Shop.",
    timeline: "Ongoing",
  },
];

const Services = () => (
  <div>
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Everything you need to <TapeLabel>win</TapeLabel> on TikTok Shop
          </h1>
          <p className="text-lg text-muted-foreground">
            From shop setup to scaling creator programs and paid ads — we handle the entire TikTok commerce stack.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl space-y-16">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={0.05}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">{s.title}</h2>
              <p className="text-muted-foreground mb-6">{s.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-bold mb-2">What you get</h4>
                  <ul className="space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-foreground">·</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Who it's for</h4>
                  <p className="text-sm text-muted-foreground">{s.who}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2">Timeline</h4>
                  <p className="text-sm text-muted-foreground">{s.timeline}</p>
                </div>
              </div>
              <Link to="/contact">
                <Button variant="hero" size="sm" className="gap-2">
                  Get a Proposal <ArrowRight size={14} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>

    <section className="py-16 text-center">
      <div className="container">
        <FadeIn>
          <p className="text-lg font-semibold">Custom packages based on monthly volume and goals.</p>
          <Link to="/contact" className="mt-4 inline-block">
            <Button variant="hero" size="lg" className="gap-2 mt-4">
              Let's Talk <ArrowRight size={16} />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  </div>
);

export default Services;
