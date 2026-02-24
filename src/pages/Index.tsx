import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TapeLabel from "@/components/TapeLabel";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Zap, BarChart3, Users, Target, Play, TrendingUp } from "lucide-react";
import { useState } from "react";
import ServicesShowcase from "@/components/ServicesShowcase";
import Hero from "@/components/Hero";
import ServiceTicker from "@/components/ServiceTicker";
import FAQ from "@/components/FAQ";
import carrerImage from "@/assets/carrer.png";
import fiveStarIcon from "@/assets/five-star-rating-icon.svg";
import { Star } from "lucide-react";


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
  {
    quote: "We went from $800/month to $23K in 60 days. The creator strategy and affiliate setup were game-changing. TikShopScale knows this platform better than anyone.",
    author: "Marcus T.",
    role: "DTC Skincare Brand, LA",
    badge: "+$22K/mo",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=ffdfbf"
  },
  {
    quote: "We were on Meta with 2x ROAS. TikTok with their system hit 6.8x in week three. The paid ads plus affiliate combo is genuinely unreal.",
    author: "Cathy N.",
    role: "Beauty Brand Founder",
    badge: "6.8x ROAS",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=ffdfbf"
  },
  {
    quote: "I'd been on TikTok Shop for months with no traction. Within 6 weeks of working with them, our shop hit $47K/month. The setup and creator strategy made all the difference.",
    author: "Derek W.",
    role: "eCommerce Operator",
    badge: "$47K/mo in 6 wks",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Derek&backgroundColor=ffdfbf"
  }
];

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <Hero />
      <ServiceTicker />

      {/* Services Showcase */}
      <section id="services" className="pt-12 md:pt-16 overflow-hidden">
        <div className="container mb-6 md:mb-8">
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

      {/* Infographic Section */}
      <section className="pt-12 md:pt-16 pb-0">
        <div className="container max-w-[1240px] mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-center mb-10 md:mb-12">
              Our TikTok Shop <TapeLabel>Growth Framework</TapeLabel>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex justify-center items-center">
              <img
                src={carrerImage}
                alt="TikShop Scale Process Infographic"
                className="w-full h-auto object-contain max-w-[1100px] mx-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="pt-2 md:pt-4 pb-0 overflow-hidden relative">
        <div className="container max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-center mb-8 md:mb-12">
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
                  <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary/40 flex items-center justify-center -translate-x-1/2 z-20 shadow-lg" >
                    <span className="text-[10px] font-black text-primary">{s.num}</span>
                  </div>

                  {/* Card wrapper */}
                  <div className="w-full md:w-[45%] pl-20 md:pl-0">
                    <FadeIn>
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
      <section id="about" className="pt-12 md:pt-16 pb-0">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter text-center mb-12 leading-none">
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
      <section className="pt-12 md:pt-16 pb-0">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                <TapeLabel>Results</TapeLabel> that speak
              </h2>
              <div className="max-w-2xl mx-auto">
                <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2">
                  The numbers <TapeLabel>say it all</TapeLabel>
                </h3>
                <p className="text-neutral-400 text-sm md:text-lg font-medium mt-2">
                  Across every brand we work with, results compound. Here&apos;s what our clients see on average.
                </p>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.title} delay={i * 0.05} className="h-full">
                <Link to="/case-studies" className="flex flex-col h-full p-6 rounded-2xl border border-border bg-card hover:shadow-xl transition-all hover:-translate-y-1">
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
      <section className="pt-12 md:pt-16 pb-0">
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
      <section className="pt-12 md:pt-16 pb-0 overflow-hidden">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                What brands <TapeLabel>say</TapeLabel>
              </h2>
              <p className="text-neutral-500 text-xl md:text-3xl font-bold">Real brands. Real results.</p>
            </div>
          </FadeIn>

          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-8 md:p-10 rounded-[2rem] bg-white border border-neutral-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col h-full relative overflow-hidden group hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
                    {/* Top Row: Stars and Badge */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star key={starIndex} size={16} fill="#f59e0b" stroke="none" />
                        ))}
                      </div>
                      <div className="bg-black px-4 py-1.5 rounded-full text-[12px] font-black text-white">
                        {t.badge}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-[17px] md:text-[19px] leading-[1.6] text-neutral-500/90 font-medium mb-12">
                      "{t.quote}"
                    </p>

                    {/* Footer: Info (Initial + Names/Roles) */}
                    <div className="mt-auto flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center font-bold text-sm text-white shrink-0">
                        {t.author.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[16px] text-neutral-900 leading-tight">{t.author}</span>
                        <span className="text-[13px] font-medium text-neutral-400 mt-0.5">{t.role}</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Final CTA */}
      <section className="pt-12 md:pt-16 pb-16 md:pb-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
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
