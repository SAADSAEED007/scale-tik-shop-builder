import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";
import ServiceTicker from "@/components/ServiceTicker";
import {
  ArrowRight,
  Check,
  Map,
  Zap,
  Shield,
  Users,
  Star,
  Video,
  BarChart3,
  Play,
  Layout,
  Search,
  CheckCircle2
} from "lucide-react";

const Services = () => {
  const [activePhase, setActivePhase] = useState(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const phaseRefs = {
    1: useRef<HTMLElement>(null),
    2: useRef<HTMLElement>(null),
    3: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    // Show/hide sidebar based on scroll
    const handleScrollVisibility = () => {
      // Show sidebar after hero (roughly 500px)
      if (window.scrollY > 450) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const phaseId = Number(entry.target.getAttribute("data-phase"));
          if (phaseId) setActivePhase(phaseId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    Object.values(phaseRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToPhase = (phaseId: number) => {
    const ref = phaseRefs[phaseId as keyof typeof phaseRefs];
    if (ref.current) {
      const offset = 140; // sticky nav height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = ref.current.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#F7F7F5] min-h-screen font-body text-neutral-900">
      {/* SECTION 1 — HERO */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-24 bg-white relative overflow-hidden text-center">
        {/* Subtle radial beige glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F5EDE3_0%,_transparent_70%)] opacity-40 pointer-events-none" />

        <div className="container max-w-[1240px] mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="inline-block px-5 py-2.5 rounded-full bg-black/5 backdrop-blur-md border border-neutral-200/50 mb-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <span className="font-heading text-[12px] md:text-[14px] font-black tracking-[0.1em] text-black uppercase block">
                Built for brands doing <TapeLabel className="inline-block px-2 py-0.5 bg-[#F5EDE3] shadow-sm text-black rounded-sm mx-1">
                  $0 → $100K+/mo
                </TapeLabel> on TikTok Shop
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tighter leading-[1.1] text-neutral-900 mb-8 max-w-4xl mx-auto">
              Everything you need to <br className="hidden md:block" />
              <TapeLabel className="inline-block px-4 py-1 rotate-[-2deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black">
                win
              </TapeLabel> on TikTok Shop
            </h1>

            <p className="text-lg md:text-xl text-neutral-500 font-medium max-w-xl mx-auto leading-relaxed mb-10">
              From first-ever launch to scaling past $100K/mo — we handle the full TikTok commerce stack, in the right order, at the right time.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f9f9] border border-[#E5E5E2] text-[13px] font-bold shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4B483]" />
                9 specialist services
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f9f9] border border-[#E5E5E2] text-[13px] font-bold shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                Structured in 3 growth phases
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f9f9f9] border border-[#E5E5E2] text-[13px] font-bold shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4B483]" />
                No lock-in contracts
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 — SERVICES TICKER */}
      <ServiceTicker />

      {/* SECTION 3 — PHASE NAVIGATOR (Mobile Sticky + Desktop Sidebar) */}
      <nav className="lg:hidden sticky top-[80px] md:top-[88px] z-40 bg-white/80 backdrop-blur-xl border-b border-[#E5E5E2] py-4">
        <div className="container max-w-[1240px] mx-auto px-4">
          <div className="flex justify-center gap-6 md:gap-12">
            {[
              { id: 1, label: "Foundation" },
              { id: 2, label: "Growth" },
              { id: 3, label: "Scale" },
            ].map((phase) => (
              <button
                key={phase.id}
                onClick={() => scrollToPhase(phase.id)}
                className={`flex items-center gap-2 transition-all group ${activePhase === phase.id ? "text-neutral-900 border-b-2 border-[#D4B483]" : "text-neutral-400"
                  } pb-2`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black transition-colors ${activePhase === phase.id ? "bg-[#F5EDE3] text-black" : "bg-neutral-100 text-neutral-400 group-hover:bg-neutral-200"
                    }`}
                >
                  {phase.id}
                </div>
                <span className="text-sm font-black uppercase tracking-widest">{phase.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Vertical Sidebar Navigator for Desktop */}
      <nav className={`hidden lg:flex fixed left-8 xl:left-12 top-1/2 -translate-y-1/2 z-40 flex-col gap-12 transition-all duration-700 ease-in-out ${showSidebar ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-12 pointer-events-none"
        }`}>
        {[
          { id: 1, label: "Foundation" },
          { id: 2, label: "Growth" },
          { id: 3, label: "Scale" },
        ].map((phase) => (
          <button
            key={phase.id}
            onClick={() => scrollToPhase(phase.id)}
            className="group flex items-center gap-6 text-left transition-all duration-500"
          >
            <div className="relative flex flex-col items-center">
              <div className={`w-[1px] h-14 md:h-16 transition-all duration-700 ${activePhase === phase.id ? "bg-[#D4B483] scale-y-110" : "bg-neutral-200 scale-y-100"}`} />
              {activePhase === phase.id && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D4B483] shadow-[0_0_15px_rgba(212,180,131,0.6)]" />
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className={`text-[10px] font-black tracking-[0.2em] transition-all duration-500 uppercase ${activePhase === phase.id ? "text-[#D4B483] translate-x-1" : "text-neutral-300 group-hover:text-neutral-400"}`}>
                PHASE 0{phase.id}
              </span>
              <span className={`text-[15px] font-black uppercase tracking-widest transition-all duration-500 ${activePhase === phase.id ? "text-neutral-900 translate-x-2" : "text-neutral-400 group-hover:text-black"}`}>
                {phase.label}
              </span>
            </div>
          </button>
        ))}
      </nav>

      {/* SECTION 4 — PHASE 1: FOUNDATION */}
      <section
        data-phase="1"
        ref={phaseRefs[1]}
        className="py-24 md:py-32 bg-white"
      >
        <div className="container max-w-[900px] mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 rounded-full bg-black text-white text-[11px] font-black uppercase tracking-widest mb-6">
                PHASE 1
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tighter mb-6">
                Foundation — Get it right <br className="hidden md:block" />
                <TapeLabel className="inline-block px-3 py-1 bg-[#F5EDE3] text-black shadow-sm transform -rotate-1 origin-left mt-2">
                  before you spend.
                </TapeLabel>
              </h2>
              <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto">
                Most brands fail on TikTok Shop because they skip this phase entirely. The brands that nail their foundation generate 3x more GMV in their first 60 days than brands that wing it.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <ServiceCard
              num="01"
              icon={Map}
              title="Launch Strategy"
              proof="Brands with a launch plan generate 3x more GMV in their first 60 days"
              descBold="Most brands rush their TikTok Shop launch, burn their first $5K on ads with no traction, and blame the platform."
              descNormal="We build your 30–60 day launch roadmap before you spend a dollar — offer positioning, creator seeding, content plan, and paid strategy all aligned. So when you go live, you hit the ground running."
              features={[
                "Market & competitor analysis inside TikTok Shop",
                "Offer positioning & pricing strategy",
                "Launch promotion plan & calendar",
                "Creator seeding roadmap",
                "First 60-day revenue plan"
              ]}
              who="Brands launching on TikTok Shop for the first time, or entering a new category and not sure where to start."
              timeline="2–3 weeks planning / then guided launch execution"
              investment="$1,200"
              investmentSub="one-time strategy fee"
              footerNote="We'll map your launch plan live on the first call"
              ctaText="Book a Free Strategy Call"
            />

            <ServiceCard
              num="02"
              icon={Zap}
              title="TikTok Shop Setup + Optimization"
              proof="One listing audit found $18K/mo in recoverable GMV — before spending a dollar on ads"
              descBold="Most underperforming shops don't have a product problem — they have a listings problem."
              descNormal="Bad titles, wrong categories, weak images, and no pricing strategy. We audit every inch of your shop and fix what's silently killing your conversion rate."
              features={[
                "Full shop setup or audit",
                "Product listing SEO optimization",
                "Storefront layout & category strategy",
                "Offer & pricing structure",
                "Conversion rate improvements"
              ]}
              who="Brands launching from scratch — or already live but not hitting GMV targets and not sure why."
              timeline="2–4 weeks"
              investment="$1,500/mo"
              investmentSub="or one-time setup fee"
              footerNote="Free shop audit — we'll review yours live on the call"
              ctaText="Book a Free Shop Audit"
            />

            <ServiceCard
              num="03"
              icon={Shield}
              title="Compliance + Risk Management"
              proof="Caught and resolved 3 listing violations before they triggered an account-level flag"
              descBold="One policy violation can freeze your shop overnight. Most brands don't find out they're non-compliant until the damage is done"
              descNormal="— suspended listings, withheld payouts, or a full account ban. We audit your shop before TikTok does."
              features={[
                "Policy compliance audits",
                "Listing approval support",
                "Content compliance review",
                "Violation prevention strategy",
                "Account issue resolution guidance"
              ]}
              who="Any brand scaling on TikTok Shop who can't afford a sudden shutdown wiping out weeks of momentum."
              timeline="1–2 weeks initial audit / then ongoing monitoring"
              investment="$800/mo"
              investmentSub="ongoing monitoring"
              footerNote="Free compliance check — we'll flag your risks on the call"
              ctaText="Get a Free Compliance Check"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 — PHASE 2: GROWTH */}
      <section
        data-phase="2"
        ref={phaseRefs[2]}
        className="py-24 md:py-32 bg-[#F7F7F5]"
      >
        <div className="container max-w-[900px] mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 rounded-full bg-black text-white text-[11px] font-black uppercase tracking-widest mb-6">
                PHASE 2
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tighter mb-6">
                Growth — Build the engine <br className="hidden md:block" />
                <TapeLabel className="inline-block px-3 py-1 bg-[#F5EDE3] text-black shadow-sm transform rotate-1 origin-left mt-2">
                  that drives sales.
                </TapeLabel>
              </h2>
              <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto">
                Creators and content are the core growth levers on TikTok Shop. This phase builds the system that keeps generating GMV — with or without paid ads.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <ServiceCard
              num="04"
              icon={Users}
              title="Creator Seeding + Affiliate Program"
              proof="312 active affiliates recruited in 6 weeks — affiliate sales went from 0% to 60% of total GMV"
              descBold="Affiliates are the #1 growth lever on TikTok Shop — and most brands have zero system to recruit them."
              descNormal="We find creators in your niche, send them your product, brief them on what to say, and build an affiliate engine that keeps growing month after month without you lifting a finger."
              features={[
                "Creator sourcing & vetting",
                "Outreach & onboarding",
                "Affiliate commission structuring",
                "Content briefing & tracking",
                "Performance optimization"
              ]}
              who="Brands ready to let creators drive the majority of their sales. Works best when you have a product that converts — we amplify it."
              timeline="Ongoing / real traction in 4–6 weeks"
              investment="$2,500/mo"
              investmentSub="optional performance bonus"
              footerNote="We'll show you our creator database on the first call"
              ctaText="Start with creators already primed to sell"
            />

            <ServiceCard
              num="05"
              icon={Star}
              title="Creator Management + Retention Program"
              proof="Retained top 20 creators for a fashion brand — they drove 42% of GMV for 4 consecutive months"
              descBold="Getting a creator to post once is easy. Building a network of creators who promote you consistently and increase their output — that's where the compounding happens."
              descNormal="We manage your top performers so they stay loyal, stay motivated, and keep selling."
              features={[
                "Top performer identification",
                "Tiered commission incentives",
                "Ongoing relationship management",
                "Ambassador program development",
                "Creator reactivation campaigns"
              ]}
              who="Brands already running affiliates who want to stop creator churn and build something that compounds long-term."
              timeline="Ongoing / monthly performance reviews"
              investment="$1,800/mo"
              investmentSub="based on creator volume"
              footerNote="We'll audit your current creator setup for free"
              ctaText="Get a Free Creator Audit"
            />

            <ServiceCard
              num="06"
              icon={Video}
              title="UGC Production + Creative Direction"
              proof="Hook test #7 drove 2.1M views and $38K in direct sales in 72 hours"
              descBold="The reason most TikTok content doesn't sell isn't the creator — it's the brief. Wrong hook, wrong angle, looks like an ad."
              descNormal="We handle the full creative system: hook-first scripts, creator briefs, filming guidance, editing, and weekly A/B testing until we find what actually converts."
              features={[
                "Hook-first script frameworks",
                "Creator briefs & filming guidelines",
                "Editing & performance-driven iterations",
                "A/B hook and angle testing",
                "Weekly creative refresh cycles"
              ]}
              who="Brands that need a steady flow of high-converting content without building an in-house creative team."
              timeline="First batch in 2 weeks / weekly testing cycles ongoing"
              investment="$3,000/mo"
              investmentSub="10–20 videos/month"
              footerNote="We'll share winning creative examples on the call"
              ctaText="Creative built to convert, not just look good"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — PHASE 3: SCALE */}
      <section
        data-phase="3"
        ref={phaseRefs[3]}
        className="py-24 md:py-32 bg-white"
      >
        <div className="container max-w-[900px] mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1 rounded-full bg-[#2E2E2E] text-white text-[11px] font-black uppercase tracking-widest mb-6">
                PHASE 3
              </div>
              <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tighter mb-6">
                Scale — Pour fuel on <br className="hidden md:block" />
                <TapeLabel className="inline-block px-3 py-1 bg-[#F5EDE3] text-black shadow-sm transform -rotate-1 origin-left mt-2">
                  what's working.
                </TapeLabel>
              </h2>
              <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mx-auto">
                This is where $20K months become $100K months. Paid media, live commerce, and operational infrastructure all compound together when the foundation is right.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <ServiceCard
              num="07"
              icon={BarChart3}
              title="Spark Ads + Paid Media Management"
              proof="$12K ad spend → $81K revenue in 30 days. 6.8x ROAS from week 3"
              descBold="Most failed TikTok ad campaigns use the wrong creative format, wrong objective, or wrong audience signal — not the wrong budget."
              descNormal="We take your best-performing organic content and scale it with a paid strategy built specifically for TikTok's native ad ecosystem. We run the ads. You see the ROAS."
              features={[
                "Spark Ads setup & management",
                "Creative bucket testing",
                "Audience targeting strategy",
                "Budget scaling framework",
                "ROAS & CPA optimization"
              ]}
              who="Brands ready to put serious budget behind validated content. Minimum $5K/mo ad spend recommended."
              timeline="Ongoing / weekly creative testing + optimizations"
              investment="$2,000/mo"
              investmentSub="ad spend (direct to TikTok)"
              footerNote="Free ad account audit — we'll show you where spend is leaking"
              ctaText="Get a Free Ad Audit"
            />

            <ServiceCard
              num="08"
              icon={Play}
              title="Live Shopping Strategy + Execution"
              proof="First live session generated $14K in 2 hours with a host we sourced and trained from scratch"
              descBold="Live selling is TikTok Shop's highest-converting format — and most brands either ignore it completely or go live with no plan and wonder why nobody buys."
              descNormal="We design the full experience: scripting, host sourcing or training, promotional mechanics, and post-live analysis so every session gets better."
              features={[
                "Live event planning & scripting",
                "Host training or sourcing",
                "Promotional strategy & countdown mechanics",
                "Live sales optimization",
                "Post-live performance analysis"
              ]}
              who="Brands ready to turn live sessions into real revenue events. Works especially well for beauty, health, fashion, and home."
              timeline="2–3 weeks prep per live cycle / ongoing shows after"
              investment="$2,500/mo"
              investmentSub="based on show frequency"
              footerNote="We'll walk through a live breakdown on the call"
              ctaText="Book a Free Live Strategy Call"
            />

            <ServiceCard
              num="09"
              icon={Layout}
              title="Shop Operations + Reporting"
              proof="Found 3 SKUs eating 22% of margin — cutting them pushed monthly profit up 38% in 30 days"
              descBold="At $50K+/mo, operational chaos will quietly cap your growth. Inventory issues, slow-moving SKUs, unclear numbers — they compound fast and silently."
              descNormal="We handle backend management and give you clear weekly visibility into GMV, profit, CVR, and exactly where to focus next."
              features={[
                "Inventory & catalog oversight",
                "Weekly KPI reporting",
                "GMV, CVR & AOV tracking",
                "Profitability insights",
                "Optimization recommendations"
              ]}
              who="Brands scaling past $50K/mo who need operational structure to keep growing without things falling apart behind the scenes."
              timeline="Ongoing / weekly or bi-weekly reporting"
              investment="$1,800/mo"
              investmentSub="scales with volume"
              footerNote="Free margin audit — we'll find your profit leaks"
              ctaText="Get a Free Margin Audit"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 — BOTTOM CTA BANNER */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container max-w-[860px] mx-auto px-4">
          <FadeIn>
            <div className="bg-[#0D0D0D] rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl group">
              {/* Subtle radial beige glow behind */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4B48310_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="relative z-10">
                <span className="text-white font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-6 block">
                  NOT SURE WHERE TO START?
                </span>
                <h2 className="text-3xl md:text-5xl font-black font-heading text-white tracking-tighter mb-8 leading-[1.1]">
                  Tell us where you are. <br />
                  We'll tell you <TapeLabel className="inline-block px-3 py-0.5 bg-[#F5EDE3] text-black shadow-sm transform rotate-[1deg]">exactly what you need.</TapeLabel>
                </h2>
                <p className="text-white/50 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto cursor-none">
                  Book a Free Audit Call. We'll look at your brand, ask the right questions, and tell you honestly which phase you're in — and what to focus on first.
                </p>

                <div className="flex flex-col items-center gap-6">
                  <Link to="/contact">
                    <Button className="bg-[#F5EDE3] text-black hover:bg-white rounded-full px-10 py-8 text-xl font-black transition-all hover:scale-105 shadow-xl">
                      Book a Free Audit Call <ArrowRight size={24} className="ml-2" />
                    </Button>
                  </Link>
                  <Link to="/case-studies" className="text-white/50 hover:text-white text-sm font-bold transition-colors">
                    View Case Studies
                  </Link>
                </div>

                <p className="text-white/25 text-[11px] font-bold mt-12 uppercase tracking-widest">
                  No commitment · No pitch deck · We'll do homework on your brand before the call
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  num: string;
  icon: any;
  title: string;
  proof: string;
  descBold: string;
  descNormal: string;
  features: string[];
  who: string;
  timeline: string;
  investment: string;
  investmentSub: string;
  footerNote: string;
  ctaText: string;
}

const ServiceCard = ({
  num,
  icon: Icon,
  title,
  proof,
  descBold,
  descNormal,
  features,
  who,
  timeline,
  investment,
  investmentSub,
  footerNote,
  ctaText
}: ServiceCardProps) => (
  <FadeIn>
    <div className="bg-white border border-[#E5E5E2] rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative group">
      {/* 4px top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#F5EDE3] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-8 md:p-10">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F7F7F5] border border-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-[#F5EDE3] group-hover:text-black transition-colors duration-500">
              <Icon size={24} strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-[#9A9A9A] text-[10px] font-black uppercase tracking-widest block mb-1">SERVICE {num}</span>
              <h3 className="text-2xl font-black font-heading tracking-tight">{title}</h3>
            </div>
          </div>
        </div>

        <div className="mb-10 text-neutral-600 text-lg leading-relaxed">
          <span className="font-bold text-neutral-900">{descBold}</span> {descNormal}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-10 border-t border-[#E5E5E2]">
          <div>
            <h4 className="text-[11px] font-black text-neutral-900 uppercase tracking-widest mb-6">WHAT YOU GET:</h4>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex gap-3 text-[15px] text-neutral-500 font-medium leading-snug">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5EDE3] shadow-sm mt-2 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black text-neutral-900 uppercase tracking-widest mb-6">WHO IT'S FOR + TIMELINE:</h4>
            <div className="space-y-6">
              <p className="text-[16px] text-neutral-500 font-medium leading-relaxed italic">
                "{who}"
              </p>
              <div className="flex items-center gap-2 text-[12px] font-black text-neutral-400 uppercase tracking-widest pt-4 border-t border-neutral-100/50">
                <span>Timeline: {timeline}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F5]/50 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#E5E5E2]">
        <div className="flex items-center gap-3 text-neutral-400 font-bold text-xs uppercase tracking-widest">
          <Search size={14} className="text-[#D4B483]" />
          {footerNote}
        </div>
        <Link to="/contact">
          <Button variant="hero" size="sm" className="bg-black text-white hover:bg-neutral-800 rounded-full px-8 py-6 font-bold shadow-lg transition-all group-hover:scale-105 active:scale-95">
            {ctaText} <ArrowRight size={18} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  </FadeIn>
);

export default Services;
