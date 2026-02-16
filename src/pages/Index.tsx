import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TapeLabel from "@/components/TapeLabel";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Zap, BarChart3, Users, Target, Play, TrendingUp, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";

const services = [
  { title: "TikTok Shop Setup + Optimization", desc: "Full store build, product listings, and conversion-optimized pages.", icon: Zap },
  { title: "Creator Seeding + Affiliate Program", desc: "Find, vet, and manage creators who actually drive revenue.", icon: Users },
  { title: "UGC Production + Creative Direction", desc: "Scroll-stopping content engineered to sell, not just entertain.", icon: Play },
  { title: "Spark Ads + Performance Testing", desc: "Data-driven ad campaigns with weekly creative testing cycles.", icon: Target },
  { title: "Live Shopping Strategy", desc: "Live selling playbooks, hosts, and engagement that converts.", icon: TrendingUp },
  { title: "Shop Ops + Reporting", desc: "Inventory, fulfillment support, and real-time performance dashboards.", icon: BarChart3 },
];

const steps = [
  { num: "01", title: "Audit + Plan", desc: "We analyze your brand, category, and competition to build a roadmap." },
  { num: "02", title: "Create + Launch", desc: "Content, creators, ads, and shop optimization go live fast." },
  { num: "03", title: "Test + Scale", desc: "Weekly creative testing, data reviews, and scaling what works." },
];

const caseStudies = [
  { title: "Beauty Brand Blowup", metric: "+340% GMV in 60 days", sub: "Creator seeding + Spark Ads", tag: "UGC" },
  { title: "Supplement Scale", metric: "4.2x ROAS on Spark Ads", sub: "Performance creative testing", tag: "Ads" },
  { title: "Fashion Affiliate Engine", metric: "120+ creators activated", sub: "Affiliate program buildout", tag: "Affiliate" },
  { title: "Live Shopping Launch", metric: "$48K first live event", sub: "Live strategy + host training", tag: "Live" },
];

const testimonials = [
  { quote: "Scale Tik Shop turned our TikTok from a side channel into our #1 revenue driver.", author: "DTC Brand Founder" },
  { quote: "They move fast, test everything, and the results speak for themselves.", author: "Ecommerce VP" },
  { quote: "Our creator affiliate program went from 0 to 200+ in 8 weeks.", author: "Brand Manager" },
];

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container max-w-4xl text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              Scale your <TapeLabel>TikTok Shop</TapeLabel> with creators, ads, and conversion‑first content.
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We help brands grow revenue on TikTok Shop through UGC, affiliate seeding, ads, live strategy, and performance creative that converts.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2">
                  Book a Free Audit <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="hero-secondary" size="lg">See Case Studies</Button>
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["UGC + Affiliate Engine", "TikTok Shop Ops + Creative", "Performance Testing Weekly"].map((chip) => (
                <span key={chip} className="px-4 py-1.5 text-xs font-medium rounded-full border border-border bg-muted tracking-tight">
                  {chip}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 border-y border-border">
        <div className="container">
          <p className="text-center text-sm font-medium text-muted-foreground tracking-widest uppercase mb-6">
            Trusted by growth‑minded brands
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30">
            {["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"].map((b) => (
              <span key={b} className="text-lg font-bold tracking-tight">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-4">
              What we <TapeLabel>do</TapeLabel>
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
              End‑to‑end TikTok Shop growth. From setup to scale.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow group">
                  <s.icon className="mb-4 text-foreground" size={28} strokeWidth={1.5} />
                  <h3 className="text-lg font-bold tracking-tight mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="hero-secondary" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-16">
              How it <TapeLabel>works</TapeLabel>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.1}>
                <div className="text-center">
                  <span className="text-5xl font-black text-muted-foreground/20">{s.num}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-12">
              <TapeLabel>Results</TapeLabel> that speak
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.title} delay={i * 0.05}>
                <Link to="/case-studies" className="block p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-muted">{cs.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-black mt-4 mb-1">{cs.metric}</h3>
                  <p className="font-semibold text-sm">{cs.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{cs.sub}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="py-16 md:py-20">
        <div className="container max-w-2xl">
          <FadeIn>
            <div className="tape-label p-8 md:p-12 rounded-lg text-center" style={{ transform: "none" }}>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-3">
                Get the TikTok Shop Scale Checklist
              </h2>
              <p className="text-sm text-muted-foreground mb-6">The step‑by‑step playbook brands use to hit $100K/mo on TikTok Shop.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="you@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-11 px-4 rounded-md border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button variant="hero" size="lg">Send it</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-12">
              What brands <TapeLabel>say</TapeLabel>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-lg border border-border bg-background">
                  <p className="text-sm leading-relaxed mb-4">"{t.quote}"</p>
                  <p className="text-xs font-semibold text-muted-foreground">— {t.author}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground text-center">
        <div className="container max-w-2xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to scale?</h2>
            <p className="text-primary-foreground/60 mb-8">Let's map the fastest path to TikTok Shop revenue.</p>
            <Link to="/contact">
              <Button variant="hero-secondary" size="lg" className="gap-2">
                Book a Free Audit <ArrowRight size={16} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Index;
