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
import footerLogo from "@/assets/footer_logo.png";
import tikTokShopLogo from "@/assets/tiktokshop_logo.png";
import tikTokShopLogo70 from "@/assets/tiktokshop_logo-70.webp";
import fiveStarIcon from "@/assets/five-star-rating-icon.svg";
import SEO from "@/components/SEO";
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
    desc: "Real creators. Real product. Real content. We handle the sourcing, briefing, and setup you get videos that sell.",
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
    desc: "Every week we kill what’s not working. This is how $20K months become $100K months compounding results.",
    icon: TrendingUp
  },
];

const caseStudies = [
  { title: "Live Shopping Launch", metric: "First live session. $14K revenue. 2 hours", sub: "Live strategy + host training", tag: "Live" },
  { title: "Home Goods Shop Audit", metric: "Listing audit found $18K in recoverable GMV", sub: "Shop rebuild + listing SEO", tag: "Audit" },
  { title: "Skincare Retention Engine", metric: "Top 20 creators retained. 42% of GMV", sub: "Creator incentive programme", tag: "Retention" },
  { title: "Health & Wellness SKU Audit", metric: "Cut 3 SKUs. Profit up 38% in 30 days", sub: "Ad reallocation + reporting", tag: "Audit" },
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
    desc: "No 6-month contracts. No lock-in. We earn your business every single month which means we have to actually perform to keep it.",
    icon: Unlock
  },
];

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <SEO
        title="Scale Your TikTok Shop"
        description="The specialist agency for TikTok Shop growth. We build creator pipelines, content systems, and paid strategies that get you to $100K+/mo without the guesswork."
        keywords="TikTok Shop, TikTok Marketing, eCommerce Growth, Creator Seeding, Spark Ads"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "TikShop Scale",
          "url": "https://tikshopscale.com",
          "logo": "https://tikshopscale.com/src/assets/nav_logo.png",
          "sameAs": [
            "https://x.com/tikshopscale",
            "https://www.linkedin.com/company/tikshop-scale/",
            "https://www.instagram.com/tikshopscale/",
            "https://www.facebook.com/tikshopscale"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "info@tikshopscale.com"
          }
        }}
      />
      <Hero />
      <ServiceTicker />

      {/* Stats / Metrics Section */}
      <section className="py-8 md:py-16 overflow-hidden bg-slate-50/30 grid-net">
        <div className="container max-w-6xl px-4 md:px-6">
          <FadeIn>
            <div className="p-4 md:p-8 lg:p-12 rounded-[1.5rem] md:rounded-[2.5rem] bg-[var(--card-bg)] grid-net border border-[var(--card-border)] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.06)] relative overflow-hidden transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 md:gap-y-10 gap-x-4 md:gap-x-10 relative z-10">
                {[
                  {
                    value: 54.2,
                    prefix: "$",
                    suffix: "M+",
                    label: "GMV Managed",
                    icon: <img src={tikTokShopLogo} srcSet={`${tikTokShopLogo70} 70w, ${tikTokShopLogo} 512w`} sizes="(max-width: 768px) 70px, 140px" className="h-10 md:h-16 w-auto object-contain" alt="TikShop Scale logo" width="512" height="512" loading="lazy" />,
                    color: "from-orange-500 to-rose-500",
                    decimals: 1,
                    colSpan: "col-span-2 md:col-span-1"
                  },
                  {
                    value: 182,
                    prefix: "",
                    suffix: "+",
                    label: "Brands Served",
                    icon: <span className="text-xl md:text-3xl">🤝</span>,
                    color: "from-indigo-600 to-purple-600",
                    decimals: 0
                  },
                  {
                    value: 7,
                    prefix: "3–",
                    suffix: "x",
                    label: "Avg GMV Growth",
                    icon: <span className="text-xl md:text-3xl">📈</span>,
                    color: "from-purple-600 to-pink-600",
                    decimals: 0
                  },
                  {
                    value: 72,
                    prefix: "",
                    suffix: "hr",
                    label: "Campaign Launch Time",
                    icon: <span className="text-xl md:text-3xl">🚀</span>,
                    color: "from-blue-600 to-indigo-600",
                    decimals: 0
                  },
                  {
                    value: 98,
                    prefix: "",
                    suffix: "%",
                    label: "Client Retention",
                    icon: (
                      <img src={fiveStarIcon} alt="5 Stars" className="h-4 md:h-6 w-auto" width="96" height="16" loading="lazy" />
                    ),
                    color: "from-rose-500 to-fuchsia-600",
                    decimals: 0
                  },
                ].map((stat, i) => (
                  <div key={stat.label} className={`flex flex-col items-center text-center group ${stat.colSpan || ''}`}>
                    <div className="h-10 md:h-16 flex items-center justify-center mb-2">
                      {stat.icon}
                    </div>
                    <span className="text-xl md:text-3xl font-heading font-black tracking-tighter text-[var(--site-text)] mb-1 leading-none transition-colors">
                      {stat.prefix}
                      <Counter value={stat.value} decimals={stat.decimals} />
                      {stat.suffix}
                    </span>
                    <p className="text-[9px] md:text-[11px] font-bold text-[var(--muted-text)] uppercase tracking-widest leading-tight h-8 flex items-center justify-center px-1 transition-colors">
                      {stat.label}
                    </p>
                    <div className="w-full h-[3px] bg-slate-100 rounded-full mt-4 relative overflow-hidden hidden sm:block">
                      <div
                        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Showcase */}
      <section id="services" className="pt-12 md:pt-16 pb-12 md:pb-20 overflow-hidden grid-net">
        <div className="container mb-8 md:mb-12 px-4">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-center mb-6 leading-[1.1] md:leading-none">
              What we <TapeLabel>do</TapeLabel>
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto text-base md:text-xl leading-relaxed font-medium">
              Our services are delivered through a 3 phase TikTok Shop growth framework. <br className="hidden md:block" />
              Each phase includes the key services needed to build, grow, and scale your TikTok Shop revenue.
            </p>
          </FadeIn>
        </div>
        <ServicesShowcase />
      </section>

      {/* How it works */}
      <section id="how-it-works" className="pt-2 md:pt-4 pb-24 md:pb-32 overflow-hidden relative grid-net">
        <div className="container max-w-5xl">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-center mb-8 md:mb-12 leading-tight">
              From Audit to $100K+/month <br />
              <TapeLabel>Here's How</TapeLabel>
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Central Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 z-0" />

            <div className="space-y-12 md:space-y-20">
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className={`relative flex flex-col items-center justify-center md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                    }`}
                >
                  {/* Timeline Indicator on the line */}
                  <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-[var(--site-accent-bg)] border-2 border-[var(--card-border)] flex items-center justify-center -translate-x-1/2 z-20 shadow-lg transition-colors" >
                    <span className="text-[10px] font-black text-[var(--site-text)] transition-colors">{s.num}</span>
                  </div>

                  {/* Card wrapper */}
                  <div className="w-full md:w-[45%] pl-20 md:pl-0">
                    <FadeIn>
                      <div className="group p-6 md:p-8 rounded-[2rem] border border-border/50 bg-background/60 backdrop-blur-md shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 relative">
                        {/* Subtle background icon */}
                        <div className="absolute top-6 right-8 text-primary/5 transition-colors group-hover:text-primary/10">
                          <s.icon size={48} strokeWidth={1} />
                        </div>

                        <div className="flex flex-col gap-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                            {s.num === "01" ? (
                              <span className="text-2xl">🎯</span>
                            ) : s.num === "02" ? (
                              <span className="text-2xl">📊</span>
                            ) : s.num === "03" ? (
                              <span className="text-2xl">📹</span>
                            ) : s.num === "04" ? (
                              <span className="text-2xl">🚀</span>
                            ) : s.num === "05" ? (
                              <span className="text-2xl">📈</span>
                            ) : (
                              <s.icon size={24} />
                            )}
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

            <FadeIn delay={0.2}>
              <div className="mt-16 md:mt-24 flex flex-col items-center relative z-10 w-full">
                <div className="bg-[var(--site-accent-bg)] p-10 md:p-16 flex flex-col items-center md:items-start gap-10 shadow-2xl relative w-full md:w-auto min-w-full md:min-w-[800px] border border-[var(--card-border)] rounded-[2rem] transition-colors">
                  <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-center md:text-left pb-12 md:pb-0 font-heading text-[var(--site-text)] transition-colors">
                    See What This Looks Like <br /> For Your Brand
                  </h3>
                  <a href="https://calendly.com/tikshopscale/30mincall" target="_blank" rel="noopener noreferrer" className="md:absolute md:bottom-6 md:right-6">
                    <button className="bg-black text-white px-8 py-4 rounded-none font-bold text-[16px] md:text-[18px] flex items-center gap-2 hover:-translate-y-1 transition-all shadow-xl">
                      Book a Free Growth Audit <ArrowRight size={20} />
                    </button>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Infographic Section */}
      <section className="pt-8 md:pt-12 pb-0 grid-net">
        <div className="container max-w-[1240px] mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-center mb-6 md:mb-8">
              Our TikTok Shop <TapeLabel>Growth Framework</TapeLabel>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex justify-center items-center">
              <img
                src={carrerImage}
                alt="TikShop Scale Process Infographic"
                loading="lazy"
                width="1536"
                height="1024"
                className="w-full h-auto object-contain max-w-[1000px] mx-auto filter drop-shadow-2xl"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Brands Choose Us - TEMPORARILY HIDDEN
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
      */}

      {/* About Section - TEMPORARILY HIDDEN
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
                desc: "We started this because too many good brands were guessing their way through TikTok Shop. Before this was an agency, it was us in the trenches running accounts, testing creatives, losing money, and learning fast. That operator mindset is still how we build today.",
              },
              {
                title: "Our Mission",
                desc: "We take the guesswork out of growth. TikTok moves fast, so we test constantly, make data-driven decisions, and cut through the noise. No vanity metrics. No fluff. Just real revenue, sustainable scaling, and strategies that are built to last.",
              },
              {
                title: "Our Team",
                desc: "We are specialists, not generalists. Growth leads, creative strategists, affiliate managers, and paid media operators everyone works inside TikTok Shop every single day. This is not a side service we offer. It is the only thing we do.",
              },
              {
                title: "Our Promise",
                desc: "We care about profit, not optics. If something is not working, we fix it fast. If TikTok Shop is not the right move for your brand, we will tell you honestly. Our focus is simple: build something real, sustainable, and built to actually scale.",
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
      */}

      {/* Case studies preview */}
      <section className="pt-24 md:pt-40 pb-0 grid-net">
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
                <p className="text-neutral-500 text-sm md:text-lg font-medium mt-2">
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

          <FadeIn delay={0.2}>
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
              <Link
                to="/case-studies"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--site-accent-bg)] hover:opacity-80 transition-all duration-300"
              >
                <span className="font-bold text-[16px] md:text-[18px] text-[var(--site-text)]">View More Case Studies</span>
                <ArrowRight size={20} className="text-[var(--site-text)] group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://calendly.com/tikshopscale/30mincall"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--site-accent-bg)] hover:opacity-80 transition-all duration-300"
              >
                <span className="font-bold text-[16px] md:text-[18px] text-[var(--site-text)]">Get similar results</span>
                <ArrowRight size={20} className="text-[var(--site-text)] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="pt-24 md:pt-40 pb-0 grid-net">
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
      <section className="pt-24 md:pt-40 pb-0 overflow-hidden grid-net">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                What brands <TapeLabel>say</TapeLabel>
              </h2>
              <p className="text-neutral-500 text-xl md:text-3xl font-bold">Real brands. <TapeLabel className="rotate-[1deg] px-3">Real results.</TapeLabel></p>
            </div>
          </FadeIn>

          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((t, i) => (
                <FadeIn key={t.author || i} delay={i * 0.1}>
                  <div className="p-8 md:p-10 rounded-[2rem] bg-[var(--card-bg)] border border-[var(--card-border)] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col h-full relative overflow-hidden group hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
                    {/* Top Row: Stars and Badge */}
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <div className="flex gap-1 shrink-0">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star key={`star-${i}-${starIndex}`} size={16} fill="#f59e0b" stroke="none" />
                        ))}
                      </div>
                      <div className="bg-[var(--site-text)] px-4 py-1.5 rounded-full text-[12px] font-black text-[var(--site-bg)] whitespace-nowrap transition-colors">
                        {t.badge}
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--muted-text)] font-medium mb-12 transition-colors">
                      "{t.quote}"
                    </p>

                    {/* Footer: Info (Initial + Names/Roles) */}
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-[16px] text-[var(--site-text)] leading-tight transition-colors">{t.author}</span>
                        <span className="text-[13px] font-medium text-[var(--muted-text)] mt-0.5 transition-colors">{t.role}</span>
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
            <a href="https://calendly.com/tikshopscale/30mincall" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="bg-black text-white hover:bg-[#2E2E2E] px-10 py-4 rounded-[10px] font-[700] text-[16px] transition-all duration-300 hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 w-full sm:w-auto mx-auto">
                Book a Free Audit Call <ArrowRight size={20} />
              </button>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Index;
