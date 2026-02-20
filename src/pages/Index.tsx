import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TapeLabel from "@/components/TapeLabel";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Zap, BarChart3, Users, Target, Play, TrendingUp } from "lucide-react";
import { useState } from "react";
import ServicesShowcase from "@/components/ServicesShowcase";

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
      <section className="py-20 md:py-32">
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

      {/* Services Showcase */}
      <section id="services" className="pt-16 md:pt-20 overflow-hidden">
        <div className="container mb-8 md:mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-center mb-4 leading-none">
              What we <TapeLabel>do</TapeLabel>
            </h2>
            <p className="text-center text-muted-foreground max-w-xl mx-auto text-base md:text-xl leading-relaxed">
              End‑to‑end TikTok Shop growth. We've mastered the platform's unique ecosystem.
            </p>
          </FadeIn>
        </div>
        <ServicesShowcase />
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-32 overflow-hidden relative">
        <div className="container max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-center mb-24">
              How it <TapeLabel>works</TapeLabel>
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Central Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 z-0" />

            <div className="space-y-20 md:space-y-32">
              {[
                {
                  num: "01",
                  title: "Audit + Plan",
                  desc: "We analyze your brand, category, and competition to build a roadmap.",
                  icon: Target
                },
                {
                  num: "02",
                  title: "Create + Launch",
                  desc: "Content, creators, ads, and shop optimization go live fast.",
                  icon: Play
                },
                {
                  num: "03",
                  title: "Test + Scale",
                  desc: "Weekly creative testing, data reviews, and scaling what works.",
                  icon: TrendingUp
                },
              ].map((s, i) => (
                <div
                  key={s.num}
                  className={`relative flex flex-col items-center justify-center md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                    }`}
                >
                  {/* Timeline Indicator on the line */}
                  <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center -translate-x-1/2 z-20 shadow-lg">
                    <span className="text-[10px] font-black text-primary">{s.num}</span>
                  </div>

                  {/* Card wrapper */}
                  <div className="w-full md:w-[45%] pl-20 md:pl-0">
                    <FadeIn direction={i % 2 === 0 ? 'left' : 'right'}>
                      <div className="group p-8 md:p-10 rounded-[2.5rem] border border-border/50 bg-background/60 backdrop-blur-md shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 relative">
                        {/* Subtle background icon */}
                        <div className="absolute top-8 right-8 text-primary/5 transition-colors group-hover:text-primary/10">
                          <s.icon size={48} strokeWidth={1} />
                        </div>

                        <div className="flex flex-col gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                            <s.icon size={24} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-black tracking-tight mb-2">{s.title}</h3>
                            <p className="text-muted-foreground leading-relaxed font-medium">
                              {s.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Spacer for desktop layout balance */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-center mb-16 leading-none">
              About <TapeLabel>TikShop Scale</TapeLabel>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Our Legacy",
                desc: "A performance-first agency built specifically for TikTok commerce. We combine creator strategy and shop operations to drive real revenue.",
              },
              {
                title: "Our Mission",
                desc: "TikTok moves fast, so we move faster. Every hook and strategy gets tested—ensuring data drives every scaling decision we make.",
              },
              {
                title: "Our Team",
                desc: "Growth specialists, content directors, and ad leads. A collective of experts dedicated to mastering the TikTok Shop ecosystem.",
              },
              {
                title: "Our Promise",
                desc: "Vanity metrics are noise. We optimize for GMV, ROAS, and actual revenue—your profit is our only true KPI.",
              },
            ].map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.1}>
                <div className="p-8 rounded-[2rem] border border-border/50 bg-background/50 backdrop-blur-sm h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {card.desc}
                  </p>
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
                <Link to="/case-studies" className="block p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all hover:-translate-y-1">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-primary">{cs.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-black mt-4 mb-1">{cs.metric}</h3>
                  <p className="font-bold text-sm">{cs.title}</p>
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
            <div className="p-8 md:p-12 rounded-[2.5rem] text-center bg-secondary/30 border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap size={100} />
              </div>
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4">
                Get the TikTok Shop Scale Checklist
              </h2>
              <p className="text-base text-muted-foreground mb-8">The exact step‑by‑step playbook our brands use to cross $100K/mo on the platform.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-6 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                />
                <Button variant="hero" size="lg" className="rounded-full shadow-lg">Send it</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-12">
              What brands <TapeLabel>say</TapeLabel>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl border border-border/50 bg-background shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm md:text-base leading-relaxed mb-6 italic text-foreground/80">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-[10px] text-primary">
                      {t.author.charAt(0)}
                    </div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{t.author}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground/5 to-transparent opacity-50" />
        <div className="container max-w-3xl relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 leading-none">Ready to scale?</h2>
            <p className="text-primary-foreground/70 mb-10 text-lg md:text-xl">Let's map the fastest, most efficient path to TikTok Shop dominance.</p>
            <Link to="/contact">
              <Button variant="hero-secondary" size="lg" className="gap-3 rounded-full px-10 py-8 text-xl shadow-2xl hover:scale-105 transition-transform">
                Book a Free Audit <ArrowRight size={24} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Index;
