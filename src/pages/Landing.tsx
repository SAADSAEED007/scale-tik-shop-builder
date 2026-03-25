import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";
import ServiceTicker from "@/components/ServiceTicker";
import SEO from "@/components/SEO";
import {
    ArrowRight,
    Plus,
    Minus,
    Quote,
    Play,
    Target,
    Map,
    Video,
    Rocket,
    TrendingUp,
    Zap,
    Star
} from "lucide-react";
import fiveStarIcon from "@/assets/five-star-rating-icon.svg";

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
        role: "DTC Skincare Brand",
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

const Landing = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [email, setEmail] = useState("");

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const tickerItems = [
        "Compliance", "Shop Operations", "Launch Strategy",
        "Creator Seeding", "$54.2M+ GMV", "Spark Ads", "182+ Brands",
        "Live Shopping", "6.4x ROAS", "Affiliate Growth", "60 Day Results",
        "Shop Optimization", "No Lock-In"
    ];

    const faqItems = [
        {
            q: "How long until we see results?",
            a: "Most brands see early traction in 3–4 weeks. Meaningful GMV growth typically shows by week 6–8. We won't promise overnight results but we'll move faster than any agency you've worked with before."
        },
        {
            q: "Do we need to already be on TikTok Shop?",
            a: "No. We work with brands launching for the first time and brands already live but not seeing results. Our Launch Strategy service is specifically built for brands starting from zero."
        },
        {
            q: "What's the minimum budget to work with you?",
            a: "Our services start from $800/mo depending on what you need. For brands running paid ads, we recommend a minimum of $5K/mo in ad spend to see meaningful ROAS data. We'll be honest on the first call if the budget doesn't fit."
        },
        {
            q: "Are we locked into a long-term contract?",
            a: "Never. We don't believe in holding clients with contracts we hold them with results. Cancel anytime. We'd rather lose a client than trap one."
        },
        {
            q: "What if TikTok Shop doesn't work for our product?",
            a: "We'll tell you on the first call. Some products genuinely aren't right for TikTok Shop wrong price point, wrong demographic, wrong visual format. We'd rather tell you that upfront than take your money and deliver nothing."
        }
    ];

    return (
        <div className="bg-[#F7F7F5] grid-net font-body text-[#0D0D0D] overflow-x-hidden">
            <SEO
                title="Scaling System"
                description="Our proven system for scaling brands on TikTok Shop. We handle everything from audits to creator seeding and Spark Ads scale."
                keywords="TikTok Shop Scaling, Creator Marketing, eCommerce Strategy, TikTok Ads"
            />

            {/* SECTION 1 HERO */}
            <section className="relative min-h-screen bg-[#FFFFFF] grid-net flex flex-col items-center justify-center pt-[180px] pb-[88px] px-8 text-center overflow-hidden">
                {/* Subtle radial beige glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F5EDE3_0%,_transparent_70%)] opacity-40 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <FadeIn>
                        <div className="inline-block px-5 py-2.5 rounded-full bg-black/5 backdrop-blur-md border border-neutral-200/50 mb-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                            <span className="font-heading text-[12px] md:text-[14px] font-black tracking-[0.1em] text-black uppercase block">
                                TikTok Shop Specialist Agency
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-[60px] font-black font-heading tracking-tighter leading-[1] text-neutral-900 mb-6 max-w-5xl mx-auto">
                                Why settle for a generalist <br className="hidden md:block" />
                                when you can have a <TapeLabel className="inline-block px-5 py-1.5 bg-[#F5EDE3] text-black shadow-sm transform rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 mx-1">specialist?</TapeLabel>
                            </h1>
                            <h2 className="text-xl md:text-[48px] font-black font-heading text-neutral-900 mb-10 tracking-tighter flex flex-wrap items-center justify-center gap-2 leading-[1]">
                                Your brand should be doing <TapeLabel className="inline-block px-3 py-1 bg-[#F5EDE3] text-black shadow-sm transform rotate-[-1.5deg] origin-left mx-1 hover:rotate-0 transition-transform duration-500">$100K+/mo</TapeLabel> on TikTok Shop.
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-lg md:text-xl text-neutral-500 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                            We build the creator pipeline, content system, and paid strategy that gets you there <span className="text-neutral-900 font-bold">without the guesswork, wasted budget, or slow agencies.</span>
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <a href="https://calendly.com/tikshopscale/30mincall" target="_blank" rel="noopener noreferrer">
                                <button className="inline-flex items-center justify-center bg-[#0D0D0D] hover:bg-[#2E2E2E] text-white font-manrope font-[800] text-[15px] px-[36px] py-[15px] h-auto rounded-[10px] shadow-[0_4px_28px_rgba(0,0,0,0.2)] hover:-translate-y-[2px] transition-all duration-300">
                                    Book a Free Audit Call <ArrowRight size={18} className="ml-2" />
                                </button>
                            </a>
                            <Link to="/case-studies">
                                <button className="inline-flex items-center justify-center bg-transparent border-[1.5px] border-[#E5E5E2] text-[#0D0D0D] hover:border-black font-manrope font-[800] text-[15px] px-[36px] py-[18px] h-auto rounded-[10px] transition-all duration-300 hover:-translate-y-[2px]">
                                    See <TapeLabel className="rotate-[1deg] px-2 py-0.5 mx-1">Real Results</TapeLabel>
                                </button>
                            </Link>
                        </div>
                    </FadeIn>


                </div>
            </section>

            {/* SECTION 2 SERVICESTICKER */}
            <ServiceTicker items={tickerItems} />

            {/* 
            {/* SECTION 3 FOUNDER VIDEO */}
            {/* 
            <section className="bg-[#0D0D0D] py-[88px] px-4 md:px-10 overflow-hidden">
                <div className="container max-w-[860px] mx-auto text-center">
                    <FadeIn>
                        <span className="text-[#F5EDE3] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-6 block">
                            FROM THE FOUNDER
                        </span>
                        <h2 className="text-3xl md:text-[46px] font-black font-heading text-white tracking-tighter leading-[1.1] mb-8">
                            Why we built <TapeLabel className="inline-block px-4 py-1.5 bg-[#F5EDE3] text-[#0D0D0D] shadow-sm transform rotate-[-1.5deg] origin-left mx-1 hover:rotate-0 transition-transform duration-500">TikShopScale</TapeLabel> and what makes us different.
                        </h2>
                        <p className="text-white/45 text-lg font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
                            Watch this before you book a call. It'll save us both time and you'll know immediately if we're the right fit.
                        </p>

                        <div className="w-full max-w-[860px] mx-auto">
                            <div className="relative w-full pb-[56.25%] rounded-[20px] overflow-hidden bg-[#181818] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[20px]">
                                    <div className="w-[100px] h-[100px] rounded-full border-[3px] border-[#D4B483] bg-transparent" />

                                    <button className="w-[72px] h-[72px] bg-[#F5EDE3] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(212,180,131,0.3)] cursor-pointer group transition-transform hover:scale-105">
                                        <Play fill="black" color="black" size={24} className="ml-1" />
                                    </button>

                                    <div className="text-center">
                                        <p className="text-[15px] font-semibold text-white/50 mb-1">Founder video coming soon</p>
                                        <p className="text-[13px] text-white/25">Upload your video and replace this placeholder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
                     {/* SECTION 6 RESULTS (Moved up) */}
            <section className="bg-[#0D0D0D] py-20 px-4 md:px-10 overflow-hidden">
                <div className="container max-w-[860px] mx-auto text-center">
                    <FadeIn>
                        <span className="text-[#F5EDE3] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-6 block">
                            ACROSS EVERY BRAND WE WORK WITH
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black font-heading text-white tracking-tighter mb-16">
                            <TapeLabel className="inline-block px-4 py-1.5 bg-[#F5EDE3] text-[#0D0D0D] shadow-sm transform rotate-[-1.5deg] origin-left mx-1 hover:rotate-0 transition-transform duration-500">The numbers say it all.</TapeLabel>
                        </h2>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { val: "$54.2M+", label: "Total GMV generated for clients", gold: true },
                                { val: "182+", label: "Brands scaled on TikTok Shop" },
                                { val: "6.4x", label: "Average ROAS on paid campaigns" },
                                { val: "60d", label: "Average time to meaningful results" }
                            ].map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`border border-white/5 rounded-[16px] p-8 flex flex-col items-center justify-center text-center transition-all ${stat.gold ? 'bg-[#F5EDE3]' : 'bg-[#181818]'}`}
                                >
                                    <div className={`text-2xl md:text-[42px] font-black font-heading leading-none mb-3 tracking-tighter ${stat.gold ? 'text-[#0D0D0D]' : 'text-white'}`}>
                                        {stat.val}
                                    </div>
                                    <div className={`text-[12.5px] font-bold uppercase tracking-widest leading-tight ${stat.gold ? 'text-[#0D0D0D]/65' : 'text-white/40'}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION 7 CASE STUDIES PREVIEW (Moved up) */}
            <section className="bg-white grid-net py-[88px] px-4 md:px-10 border-t border-[#E5E5E2] overflow-hidden">
                <div className="container max-w-[1000px] mx-auto">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                            <div>
                                <span className="text-[#0D0D0D] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-4 block">
                                    <TapeLabel className="rotate-[1deg] px-3 py-1 bg-[#F5EDE3]">REAL RESULTS</TapeLabel>
                                </span>
                                <h2 className="text-3xl md:text-[44px] font-black font-heading tracking-tighter leading-none mb-4">
                                    Brands we've scaled.
                                </h2>
                                <p className="text-[#9A9A9A] text-lg font-medium italic">
                                    Real numbers. No cherry-picked screenshots.
                                </p>
                            </div>
                            <Link to="/case-studies" className="group flex items-center gap-1 text-[13px] font-black uppercase tracking-widest border-b-2 border-[#F5EDE3] pb-1 transition-all">
                                See all case studies <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                badge: "$800 → $23K/mo",
                                tags: "💄 Beauty · 60 Days · Creator Seeding",
                                title: "From zero traction to $23K/month in 60 days flat",
                                text: "Had been live for 3 months with no results. Fixed listings, recruited 47 creators, launched Spark Ads on the winning hook. GMV went from $800 to $23K.",
                                brand: "Beauty Brand"
                            },
                            {
                                badge: "6.8x ROAS",
                                tags: "💊 Health · Week 3 · Spark Ads",
                                title: "From 2x ROAS on Meta to 6.8x on TikTok by week three",
                                text: "Was spending $8K/mo on Meta with mediocre returns. Rebuilt their entire ad strategy for TikTok's native ecosystem. 6.8x ROAS from week 3.",
                                brand: "Health Brand"
                            },
                            {
                                badge: "$47K/mo in 6wks",
                                tags: "👗 Fashion · 6 Weeks · Full Management",
                                title: "Zero presence to $47K/month in 6 weeks",
                                text: "Months of nothing on TikTok Shop. After a full audit and creator pipeline launch, monthly GMV hit $47K in 6 weeks with 89 active affiliates driving sales.",
                                brand: "Fashion Brand"
                            }
                        ].map((card, i) => (
                            <FadeIn key={card.title} delay={i * 0.1}>
                                <div className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-[18px] h-full flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-500 overflow-hidden group">
                                    <div className="p-8 pb-6 border-b border-[#E5E5E2] grow">
                                        <div className="bg-[#0D0D0D] text-white font-heading font-black text-sm px-4 py-2 rounded-[10px] w-fit mb-6">
                                            {card.badge}
                                        </div>
                                        <div className="text-[10px] font-black text-[#0D0D0D] uppercase tracking-widest mb-4">
                                            {card.tags}
                                        </div>
                                        <h3 className="text-xl font-black font-heading leading-tight text-[#0D0D0D] mb-4">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-[#5C5C5C] font-medium leading-relaxed">
                                            {card.text}
                                        </p>
                                    </div>
                                    <div className="px-8 py-5 flex items-center justify-between">
                                        <span className="text-[11px] font-bold text-[#9A9A9A] uppercase tracking-widest">{card.brand}</span>
                                        <Link to="/case-studies" className="text-[11px] font-black text-[#0D0D0D] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Full story <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.4}>
                        <div className="mt-20 text-center">
                            <p className="text-[#0D0D0D] text-lg font-medium mb-6">Your brand could be next.</p>
                            <a
                                href="https://calendly.com/tikshopscale/30mincall"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#0D0D0D] hover:bg-[#2E2E2E] text-white px-10 py-5 rounded-[12px] font-black font-heading transition-all hover:-translate-y-1 hover:shadow-2xl"
                            >
                                Book a Free Growth Audit <ArrowRight size={20} />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION 4 PROBLEM / SOLUTION */}
            <section className="bg-white grid-net py-[88px] px-4 md:px-10 border-t border-[#E5E5E2] overflow-hidden">
                <div className="container max-w-[1000px] mx-auto">
                    <FadeIn>
                        <div className="text-center mb-16 px-4">
                            <span className="text-[#0D0D0D] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-4 block">
                                SOUND FAMILIAR?
                            </span>
                            <h2 className="text-3xl md:text-[50px] font-black font-heading tracking-tighter leading-[1] mb-6">
                                Why most <TapeLabel className="inline-block px-3 py-1 bg-[#F5EDE3] text-black shadow-sm transform rotate-[-1.5deg] origin-left mx-1 hover:rotate-0 transition-transform duration-500">brands fail</TapeLabel> on TikTok Shop.
                            </h2>
                            <p className="text-[#5C5C5C] text-lg font-medium">
                                The same 3 mistakes over and over. Here's what we fix.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {/* TOP ROW Problem Cards */}
                        {[
                            {
                                icon: "📢",
                                title: "Running Meta-style ads on a TikTok-native audience",
                                text: "Polished ads, wrong platform behaviour, zero purchase intent. Your budget bleeds while your competitors run raw UGC that converts."
                            },
                            {
                                icon: "💸",
                                title: "Going paid before organic is proven",
                                text: "Spark Ads only work when they amplify something that already converts. Spending on cold traffic before that? You're funding TikTok, not yourself."
                            },
                            {
                                icon: "🔗",
                                title: "No affiliate system 100% reliant on paid ads",
                                text: "The top TikTok Shops get 40–70% of GMV from affiliates. Most brands have zero creator pipeline and have no idea they're leaving this on the table."
                            }
                        ].map((card, i) => (
                            <FadeIn key={card.title} delay={i * 0.1}>
                                <div className="bg-[#FFF5F5] border-[1.5px] border-[#FECACA] rounded-[18px] p-6 h-full">
                                    <span className="text-[#DC2626] font-black text-[10px] uppercase tracking-widest mb-4 block">❌ THE MISTAKE</span>
                                    <div className="text-3xl mb-4">{card.icon}</div>
                                    <h3 className="text-[17px] font-black font-heading text-[#7F1D1D] leading-tight mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="text-[13.5px] font-medium text-[#991B1B] leading-relaxed">
                                        {card.text}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* BOTTOM ROW Solution Cards */}
                        {[
                            {
                                icon: "🎯",
                                title: "TikTok-native creative built to sell not impress",
                                text: "Hook-first scripts, real creators, raw UGC formats that stop the scroll and drive purchase decisions. Built for TikTok's algorithm, not Meta's."
                            },
                            {
                                icon: "🔥",
                                title: "Organic foundation first then we pour fuel on it",
                                text: "We prove what converts organically before touching paid. Then Spark Ads scale what's already working. Your budget goes further. Every time."
                            },
                            {
                                icon: "📈",
                                title: "An affiliate engine that compounds month after month",
                                text: "We find creators in your niche, send them your product, brief them on what to say and build a pipeline that keeps growing without you chasing it."
                            }
                        ].map((card, i) => (
                            <FadeIn key={card.title} delay={(i + 3) * 0.1}>
                                <div className="bg-[#F5EDE3] border-[1.5px] border-[#D4B483]/30 rounded-[18px] p-6 h-full transition-all duration-300 hover:shadow-xl">
                                    <span className="text-[#D4B483] font-black text-[10px] uppercase tracking-widest mb-4 block">✓ HOW WE FIX IT</span>
                                    <div className="text-3xl mb-4">{card.icon}</div>
                                    <h3 className="text-[17px] font-black font-heading text-black leading-tight mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="text-[13.5px] font-medium text-black/60 leading-relaxed">
                                        {card.text}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 HOW IT WORKS */}
            <section id="how-it-works" className="bg-[#F7F7F5] grid-net py-[88px] px-4 md:px-10 overflow-hidden relative border-t border-[#E5E5E2]">
                <div className="container max-w-5xl mx-auto">
                    <FadeIn>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-center mb-8 md:mb-12 leading-tight">
                            From Audit to $100K+/month <br />
                            <TapeLabel>Here's How</TapeLabel>
                        </h2>
                    </FadeIn>

                    <div className="relative">
                        {/* Central Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#0D0D0D]/10 -translate-x-1/2 z-0" />

                        <div className="space-y-12 md:space-y-20">
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
                                            <div className="group p-6 md:p-8 rounded-[2rem] border border-[#E5E5E2] bg-white/60 backdrop-blur-md shadow-sm hover:shadow-2xl hover:border-[#D4B483]/20 transition-all duration-500 relative">
                                                {/* Subtle background icon */}
                                                <div className="absolute top-6 right-8 text-black/5 transition-colors group-hover:text-black/10">
                                                    <s.icon size={48} strokeWidth={1} />
                                                </div>

                                                <div className="flex flex-col gap-3">
                                                    <div className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-black">
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
                                                        <h3 className="text-2xl font-black tracking-tight mb-2 font-heading">{s.title}</h3>
                                                        <p className="text-[#5C5C5C] leading-relaxed font-medium">
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
                                <div className="bg-[#F5EDE3] p-10 md:p-16 flex flex-col items-center md:items-start gap-10 shadow-2xl relative w-full md:w-auto min-w-full md:min-w-[800px] border border-[#E5E5E2] rounded-[2rem]">
                                    <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-center md:text-left pb-12 md:pb-0 font-heading text-[#0D0D0D]">
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







            {/* Lead magnet */}
            <section className="pt-24 md:pt-40 pb-0 bg-white grid-net">
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
            <section className="pt-24 md:pt-40 pb-[80px] overflow-hidden bg-white grid-net">
                <div className="container max-w-7xl mx-auto px-4 md:px-6">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight mb-4 text-[#0D0D0D]">
                                What brands <TapeLabel>say</TapeLabel>
                            </h2>
                            <p className="text-[#5C5C5C] text-xl md:text-3xl font-bold font-heading">Real brands. <TapeLabel className="rotate-[1deg] px-3">Real results.</TapeLabel></p>
                        </div>
                    </FadeIn>

                    <div className="max-w-[1240px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {testimonials.map((t, i) => (
                                <FadeIn key={t.author || i} delay={i * 0.1}>
                                    <div className="p-8 md:p-10 rounded-[2rem] bg-white border border-[#E5E5E2] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col h-full relative overflow-hidden group hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-500">
                                        {/* Top Row: Stars and Badge */}
                                        <div className="flex items-center justify-between gap-4 mb-8">
                                            <div className="flex gap-1 shrink-0">
                                                {[...Array(5)].map((_, starIndex) => (
                                                    <Star key={`star-${i}-${starIndex}`} size={16} fill="#f59e0b" stroke="none" />
                                                ))}
                                            </div>
                                            <div className="bg-[#0D0D0D] px-4 py-1.5 rounded-full text-[12px] font-black text-white whitespace-nowrap">
                                                {t.badge}
                                            </div>
                                        </div>

                                        {/* Quote */}
                                        <p className="text-[17px] md:text-[18px] leading-[1.6] text-[#5C5C5C] font-medium mb-12 italic">
                                            "{t.quote}"
                                        </p>

                                        {/* Footer: Info (Initial + Names/Roles) */}
                                        <div className="mt-auto flex items-center gap-4">
                                            <div className="flex flex-col">
                                                <span className="font-bold text-[16px] text-[#0D0D0D] leading-tight font-heading">{t.author}</span>
                                                <span className="text-[13px] font-medium text-[#9A9A9A] mt-0.5">{t.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 9 FINAL CTA */}
            <section className="relative bg-[#0D0D0D] py-[110px] px-4 md:px-10 text-center overflow-hidden">
                {/* Large radial beige glow orb centered behind content */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4B483]/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="container max-w-[800px] mx-auto relative z-10">
                    <FadeIn>
                        <span className="text-[#F5EDE3] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-8 block">
                            READY TO SCALE?
                        </span>
                        <h2 className="text-4xl md:text-[66px] font-black font-heading text-white tracking-tighter leading-[1] mb-8">
                            Stop guessing. <br />
                            Start <TapeLabel className="inline-block px-4 py-1.5 bg-[#F5EDE3] text-[#0D0D0D] shadow-sm transform rotate-[-1.5deg] origin-left mx-1 hover:rotate-0 transition-transform duration-500">scaling.</TapeLabel>
                        </h2>
                        <p className="text-white/45 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                            Book a free 20-minute audit call. We'll review your shop live and tell you exactly what's holding your growth back no pitch, no pressure.
                        </p>

                        <a href="https://calendly.com/tikshopscale/30mincall" target="_blank" rel="noopener noreferrer">
                            <button className="bg-[#0D0D0D] hover:bg-[#1A1A1A] text-white border border-white/20 rounded-[10px] px-[36px] py-[15px] text-[15px] font-[800] font-manrope transition-all hover:-translate-y-[2px] shadow-[0_4px_28px_rgba(0,0,0,0.4)] mb-8 inline-flex items-center justify-center cursor-pointer">
                                Book a Free Audit Call <ArrowRight size={18} className="ml-2" />
                            </button>
                        </a>

                        <p className="text-white/25 text-[11px] font-bold uppercase tracking-widest">
                            No commitment · No pitch deck · We'll review your brand before the call
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION 10 FAQ */}
            <section className="bg-white grid-net py-[110px] px-4 md:px-10 border-t border-[#E5E5E2] overflow-hidden">
                <div className="container max-w-[700px] mx-auto text-center">
                    <FadeIn>
                        <span className="text-[#0D0D0D] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-4 block">
                            COMMON QUESTIONS
                        </span>
                        <h2 className="text-3xl md:text-[50px] font-black font-heading tracking-tighter leading-none mb-16">
                            Answered <TapeLabel className="inline-block px-3 py-1 bg-[#F5EDE3] text-black shadow-sm transform rotate-[-1.5deg] origin-left mx-1 hover:rotate-0 transition-transform duration-500">honestly.</TapeLabel>
                        </h2>

                        <div className="space-y-3 text-left">
                            {faqItems.map((item, i) => (
                                <div key={item.q} className="bg-white border border-[#E5E5E2] rounded-[13px] overflow-hidden transition-all duration-300">
                                    <button
                                        onClick={() => toggleFaq(i)}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                                    >
                                        <span className="text-[15px] font-bold text-[#0D0D0D] font-body leading-tight">{item.q}</span>
                                        <div className={`w-8 h-8 rounded-full border border-[#E5E5E2]/50 flex items-center justify-center transition-all bg-[#F5EDE3] ${openFaq === i ? 'rotate-45' : 'rotate-0'}`}>
                                            <Plus size={18} className="text-[#0D0D0D]" />
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <div className="p-6 pt-0 text-[14.5px] text-[#5C5C5C] leading-[1.72] font-medium border-t border-[#F7F7F5]">
                                            {item.a}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CUSTOM ANIMATIONS */}
            <style>{`
        @keyframes scaleX-reveal {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-scaleX-reveal {
          animation: scaleX-reveal 0.6s ease-out 0.7s forwards;
          transform: scaleX(0);
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default Landing;
