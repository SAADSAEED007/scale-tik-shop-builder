import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TapeLabel from "@/components/TapeLabel";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Zap, BarChart3, Users, Target, Play, TrendingUp, Map, Video, Rocket, Unlock } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";
import ServicesShowcase from "@/components/ServicesShowcase";
import Hero from "@/components/Hero";
import ServiceTicker from "@/components/ServiceTicker";
import FAQ from "@/components/FAQ";
import carrerImage from "@/assets/carrer.png";
import navLogo from "@/assets/nav_logo.png";
import fiveStarIcon from "@/assets/five-star-rating-icon.svg";
import { Star } from "lucide-react";


const Counter = ({ value, duration = 2, decimals = 0 }: { value: number; duration?: number; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setCount(latest),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={nodeRef}>{count.toFixed(decimals)}</span>;
};

const steps = [
  {
    num: "01",
    title: "Deep Dive Audit",
    desc: "We dig into your shop before we touch a single thing. Because fixing the wrong problem first is how brands waste 3 months.",
    icon: Target
  },
  {
    num: "02",
    title: "Custom Growth Roadmap",
    desc: "We don’t pull from a template. We look at your specific situation and tell you exactly what needs to happen and in what order.",
    icon: Map
  },
  {
    num: "03",
    title: "Build Your Content Pipeline",
    desc: "Real creators. Real product. Real content. We handle the sourcing, briefing, and setup — you get videos that sell.",
    icon: Video
  },
  {
    num: "04",
    title: "Launch + Scale",
    desc: "Your content goes live, your Shop gets optimized, and we start running Spark Ads all at the same time. No waiting around.",
    icon: Rocket
  },
  {
    num: "05",
    title: "Weekly Optimize + Compound",
    desc: "Every week we kill what’s not working. This is how $20K months become $100K months — compounding results.",
    icon: TrendingUp
  },
];

const caseStudies = [
  { title: "Beauty Brand Blowup", metric: "+340% GMV in 60 days", sub: "Creator seeding + Spark Ads", tag: "UGC" },
  { title: "Supplement Scale", metric: "4.2x ROAS on Spark Ads", sub: "Performance creative testing", tag: "Ads" },
  { title: "Fashion Affiliate Engine", metric: "120+ creators activated", sub: "Affiliate program buildout", tag: "Affiliate" },
  { title: "Live Shopping Launch", metric: "$48K first live event", sub: "Live strategy + host training", tag: "Live" },
];

const testimonials = [
  {
    quote: "We’d been live on TikTok Shop for months with almost no traction. Six weeks after working together, we were at $47K/month. The creator matching made the difference.",
    author: "Derek W.",
    role: "eCommerce Operator",
    badge: "$47K/month in 6 weeks",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Derek&backgroundColor=ffdfbf"
  },
  {
    quote: "TikTok Shop was doing about $800/month for us. They rebuilt our creator setup and fixed our listings. We hit $23K/month within 60 days.",
    author: "Marcus T.",
    role: "DTC Skincare Brand, LA",
    badge: "$800/mo → $23K/mo in 60 days",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=ffdfbf"
  },
  {
    quote: "We were stuck at 2x on Meta and couldn’t crack TikTok. Their paid + affiliate setup got one of our SKUs to 6.8x ROAS by week 3. Finally felt scalable.",
    author: "Kathy N.",
    role: "Beauty Founder",
    badge: "6.8x ROAS on TikTok",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kathy&backgroundColor=ffdfbf"
  }
];

const whyChooseUs = [
  {
    num: "01",
    title: <span>⚡ We Move <TapeLabel className="inline-block px-2 py-0 translate-y-[-2px]">Fast</TapeLabel></span>,
    desc: "Most agencies take 6 weeks to onboard you. We’re launching content in week two. Speed is a competitive advantage on TikTok and we treat it that way.",
    icon: Zap
  },
  {
    num: "02",
    title: <span>🎯 TikTok Is <TapeLabel className="inline-block px-2 py-0 translate-y-[-2px]">All We Do</TapeLabel></span>,
    desc: "We don’t manage your Instagram, your Amazon, or your email list. One platform. Total focus. That’s why our results beat generalist agencies every time.",
    icon: Target
  },
  {
    num: "03",
    title: <span>📊 No Guessing. <TapeLabel className="inline-block px-2 py-0 translate-y-[-2px]">Just Testing.</TapeLabel></span>,
    desc: "Every creative decision is backed by data. We run tests, read the numbers, and scale what works. Your budget never burns on gut feel.",
    icon: BarChart3
  },
  {
    num: "04",
    title: <span>🔓 Cancel <TapeLabel className="inline-block px-2 py-0 translate-y-[-2px]">Anytime</TapeLabel></span>,
    desc: "No 6-month contracts. No lock-in. We earn your business every single month — which means we have to actually perform to keep it.",
    icon: Unlock
  },
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
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className={`relative flex flex-col items-center justify-center md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                    }`}
                >
                  {/* Timeline Indicator on the line */}
                  <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-[#F5EDE3] border-2 border-[#E5E5E2] flex items-center justify-center -translate-x-1/2 z-20 shadow-lg" >
                    <span className="text-[10px] font-black text-black">{s.num}</span>
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

      {/* Why Brands Choose Us */}
      <section id="why-choose-us" className="pt-20 md:pt-32 pb-0">
        <div className="container max-w-5xl">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
                Why Brands <TapeLabel>Choose Us</TapeLabel>
              </h2>
              <p className="text-base md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
                We aren't a generalist agency. <TapeLabel className="inline-block px-3 py-0.5 mt-2 md:mt-0">We are a specialized growth partner built for the TikTok era.</TapeLabel>
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUs.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.1}>
                <div className="group p-8 md:p-10 rounded-[2rem] border border-border/50 bg-background/50 backdrop-blur-md shadow-sm transition-all duration-500 hover:bg-[#F5EDE3] hover:border-[#E6D5C3] hover:shadow-md hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex items-start justify-end mb-6">
                    <span className="text-sm font-black text-primary/30 group-hover:text-primary/50 transition-colors">
                      {s.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-neutral-900 mb-4">
                    {s.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Metrics Section */}
      <section className="py-12 md:py-20 overflow-hidden">
        <div className="container max-w-6xl">
          <FadeIn>
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 backdrop-blur-sm shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)]">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8">
                {[
                  {
                    value: 34.2,
                    prefix: "$",
                    suffix: "M+",
                    label: "GMV Managed",
                    icon: <img src={navLogo} className="h-10 md:h-12 w-auto object-contain" />,
                    color: "from-orange-500 to-rose-500",
                    decimals: 1
                  },
                  {
                    value: 275,
                    prefix: "",
                    suffix: "+",
                    label: "Brands Served",
                    icon: <span className="text-2xl md:text-3xl">🛍️</span>,
                    color: "from-indigo-600 to-purple-600",
                    decimals: 0
                  },
                  {
                    value: 91,
                    prefix: "",
                    suffix: "%",
                    label: "Client Retention",
                    icon: <img src={fiveStarIcon} className="h-4 md:h-5 w-auto object-contain" />,
                    color: "from-rose-500 to-fuchsia-600",
                    decimals: 0
                  },
                  {
                    value: 72,
                    prefix: "",
                    suffix: "hr",
                    label: "Affiliate Campaign Launch Time",
                    icon: <span className="text-2xl md:text-3xl">🚀</span>,
                    color: "from-blue-600 to-indigo-600",
                    decimals: 0
                  },
                  {
                    value: 7,
                    prefix: "3–",
                    suffix: "x",
                    label: "Average GMV Growth in 90 days",
                    icon: <span className="text-2xl md:text-3xl">📈</span>,
                    color: "from-purple-600 to-pink-600",
                    decimals: 0
                  },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="h-16 flex items-center justify-center mb-1">
                      {stat.icon}
                    </div>
                    <span className="text-2xl md:text-3xl font-heading font-black tracking-tighter text-slate-900 mb-1">
                      {stat.prefix}
                      <Counter value={stat.value} decimals={stat.decimals} />
                      {stat.suffix}
                    </span>
                    <p className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-tight h-8 flex items-center">
                      {stat.label}
                    </p>
                    <div className="w-full h-[3px] bg-slate-100 rounded-full mt-4 relative overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 w-3/4 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                        style={{ width: i % 2 === 0 ? '65%' : '85%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
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
                desc: "We started this because too many good brands were guessing their way through TikTok Shop. Before this was an agency, it was us in the trenches. Running accounts. Testing creatives. Losing money. Learning fast. Figuring out what actually works. That operator mindset is still how we build today.",
              },
              {
                title: "Our Mission",
                desc: "Take the guesswork out of growth. TikTok changes quickly, so we test constantly, move fast, and let data guide decisions. No vanity metrics. No fluff. Just real revenue and sustainable scaling.",
              },
              {
                title: "Our Team",
                desc: "We are specialists, not generalists. Growth leads, creative strategists, affiliate managers, paid media operators. Everyone works inside the TikTok Shop every day. It is not a side service. It is what we do.",
              },
              {
                title: "Our Promise",
                desc: "We care about profit, not optics. If something is not working, we fix it. If TikTok Shop is not the right move for you, we will say that too. Simple focus: build something that actually scales.",
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
                The System Behind Every Brand We Scale
              </h2>
              <p className="text-base text-muted-foreground mb-8">
                The exact system we use to take brands from launch to $100K+ per month using creators, native content, optimization, and paid scale.
                <br /><br />
                Thinking about starting or ready to scale on TikTok Shop? This is for you.
              </p>
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
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <div className="flex gap-1 shrink-0">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star key={starIndex} size={16} fill="#f59e0b" stroke="none" />
                        ))}
                      </div>
                      <div className="bg-black px-4 py-1.5 rounded-full text-[12px] font-black text-white whitespace-nowrap">
                        {t.badge}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-[17px] md:text-[19px] leading-[1.6] text-neutral-500/90 font-medium mb-12">
                      "{t.quote}"
                    </p>

                    {/* Footer: Info (Initial + Names/Roles) */}
                    <div className="mt-auto flex items-center gap-4">
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
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="bg-black text-white hover:bg-[#2E2E2E] px-10 py-4 rounded-[10px] font-[700] text-[16px] transition-all duration-300 hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 w-full sm:w-auto mx-auto">
                Book a Free Audit Call <ArrowRight size={20} />
              </button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Index;
