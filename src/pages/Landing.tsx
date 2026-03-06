import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";
import ServiceTicker from "@/components/ServiceTicker";
import {
    ArrowRight,
    Plus,
    Minus,
    Quote,
    Play
} from "lucide-react";

const Landing = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const tickerItems = [
        "Compliance", "Shop Operations", "Launch Strategy",
        "Creator Seeding", "$34.2M+ GMV", "Spark Ads", "275+ Brands",
        "Live Shopping", "6.4x ROAS", "Affiliate Growth", "60 Day Results",
        "Shop Optimization", "No Lock-In"
    ];

    const faqItems = [
        {
            q: "How long until we see results?",
            a: "Most brands see early traction in 3–4 weeks. Meaningful GMV growth typically shows by week 6–8. We won't promise overnight results — but we'll move faster than any agency you've worked with before."
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
            a: "Never. We don't believe in holding clients with contracts — we hold them with results. Cancel anytime. We'd rather lose a client than trap one."
        },
        {
            q: "What if TikTok Shop doesn't work for our product?",
            a: "We'll tell you on the first call. Some products genuinely aren't right for TikTok Shop — wrong price point, wrong demographic, wrong visual format. We'd rather tell you that upfront than take your money and deliver nothing."
        }
    ];

    return (
        <div className="bg-[#F7F7F5] font-body text-[#0D0D0D] overflow-x-hidden">

            {/* SECTION 1 — HERO */}
            <section className="relative min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center pt-[160px] pb-[88px] px-8 text-center overflow-hidden">
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
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black font-heading tracking-tighter leading-[1.05] text-neutral-900 mb-8 max-w-4xl mx-auto">
                            Your brand should be doing <br className="hidden md:block" />
                            <TapeLabel className="inline-block px-4 py-1 rotate-[-1.5deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black mx-1">
                                $100K/mo
                            </TapeLabel> <br className="hidden md:block" />
                            <span className="text-black">on TikTok Shop.</span>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-lg md:text-xl text-neutral-500 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                            We build the creator pipeline, content system, and paid strategy that gets you there — <span className="text-neutral-900 font-bold">without the guesswork, wasted budget, or slow agencies.</span>
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <Link to="/contact">
                                <button className="inline-flex items-center justify-center bg-[#0D0D0D] hover:bg-[#2E2E2E] text-white font-manrope font-[800] text-[15px] px-[36px] py-[15px] h-auto rounded-[10px] shadow-[0_4px_28px_rgba(0,0,0,0.2)] hover:-translate-y-[2px] transition-all duration-300">
                                    Book a Free Audit Call <ArrowRight size={18} className="ml-2" />
                                </button>
                            </Link>
                            <Link to="/case-studies">
                                <button className="inline-flex items-center justify-center bg-transparent border-[1.5px] border-[#E5E5E2] text-[#0D0D0D] hover:border-black font-manrope font-[800] text-[15px] px-[36px] py-[18px] h-auto rounded-[10px] transition-all duration-300 hover:-translate-y-[2px]">
                                    See Real Results
                                </button>
                            </Link>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[11px] font-bold text-[#5C5C5C] uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                                <span>$34.2M+ GMV Generated</span>
                            </div>
                            <div className="w-px h-4 bg-[#E5E5E2] hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                                <span>275+ Brands Scaled</span>
                            </div>
                            <div className="w-px h-4 bg-[#E5E5E2] hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                                <span>6.4x Avg ROAS</span>
                            </div>
                            <div className="w-px h-4 bg-[#E5E5E2] hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                                <span>No Lock-In Contracts</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION 2 — SERVICESTICKER */}
            <ServiceTicker items={tickerItems} />

            {/* SECTION 3 — FOUNDER VIDEO */}
            <section className="bg-[#0D0D0D] py-[88px] px-4 md:px-10 overflow-hidden">
                <div className="container max-w-[860px] mx-auto text-center">
                    <FadeIn>
                        <span className="text-[#F5EDE3] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-6 block">
                            FROM THE FOUNDER
                        </span>
                        <h2 className="text-3xl md:text-[46px] font-black font-heading text-white tracking-tighter leading-[1.1] mb-8">
                            Why we built <TapeLabel className="inline-block px-4 py-1.5 bg-[#F5EDE3] text-[#0D0D0D] shadow-sm transform rotate-[-1.5deg] origin-left mx-1 hover:rotate-0 transition-transform duration-500">TikShopScale</TapeLabel> — and what makes us different.
                        </h2>
                        <p className="text-white/45 text-lg font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
                            Watch this before you book a call. It'll save us both time — and you'll know immediately if we're the right fit.
                        </p>

                        <div className="w-full max-w-[860px] mx-auto">
                            <div className="relative w-full pb-[56.25%] rounded-[20px] overflow-hidden bg-[#181818] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[20px]">
                                    {/* Avatar Circle - Outlined */}
                                    <div className="w-[100px] h-[100px] rounded-full border-[3px] border-[#D4B483] bg-transparent" />

                                    {/* Play Button */}
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
            </section>

            {/* SECTION 4 — PROBLEM / SOLUTION */}
            <section className="bg-white py-[88px] px-4 md:px-10 border-t border-[#E5E5E2] overflow-hidden">
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
                                The same 3 mistakes — over and over. Here's what we fix.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {/* TOP ROW — Problem Cards */}
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
                                title: "No affiliate system — 100% reliant on paid ads",
                                text: "The top TikTok Shops get 40–70% of GMV from affiliates. Most brands have zero creator pipeline and have no idea they're leaving this on the table."
                            }
                        ].map((card, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
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
                        {/* BOTTOM ROW — Solution Cards */}
                        {[
                            {
                                icon: "🎯",
                                title: "TikTok-native creative built to sell — not impress",
                                text: "Hook-first scripts, real creators, raw UGC formats that stop the scroll and drive purchase decisions. Built for TikTok's algorithm, not Meta's."
                            },
                            {
                                icon: "🔥",
                                title: "Organic foundation first — then we pour fuel on it",
                                text: "We prove what converts organically before touching paid. Then Spark Ads scale what's already working. Your budget goes further. Every time."
                            },
                            {
                                icon: "📈",
                                title: "An affiliate engine that compounds month after month",
                                text: "We find creators in your niche, send them your product, brief them on what to say — and build a pipeline that keeps growing without you chasing it."
                            }
                        ].map((card, i) => (
                            <FadeIn key={i} delay={(i + 3) * 0.1}>
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

            {/* SECTION 5 — HOW IT WORKS */}
            <section className="bg-[#F7F7F5] py-[88px] px-4 md:px-10 overflow-hidden">
                <div className="container max-w-[740px] mx-auto">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <span className="text-[#0D0D0D] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-4 block">
                                HOW IT WORKS
                            </span>
                            <h2 className="text-3xl md:text-[50px] font-black font-heading tracking-tighter leading-[1] mb-6">
                                From your first call to <TapeLabel className="inline-block px-3 py-1 bg-[#F5EDE3] text-black shadow-sm transform rotate-[-1deg] origin-left mt-1 hover:rotate-0 transition-transform duration-500">compounding revenue.</TapeLabel>
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="space-y-0">
                        {[
                            {
                                week: "WEEK 1",
                                title: "Deep Dive Audit — We find what's really broken",
                                text: "Before we do anything, we dig into your shop, your content, your numbers. We want to know exactly what's going wrong before we start fixing it. Most brands discover 2–3 revenue leaks they didn't know existed."
                            },
                            {
                                week: "WEEK 1–2",
                                title: "Custom Roadmap — Your plan, built for your brand",
                                text: "We sit down, look at your brand, your numbers, your competition — and build a plan around that. Not a deck we've sent 50 other brands."
                            },
                            {
                                week: "WEEK 2–3",
                                active: true,
                                title: "Build Your Creator Pipeline — Real creators, real briefs",
                                text: "We find creators in your niche, send them your product, and brief them on what to say. They make the content. We turn it into Spark Ads."
                            },
                            {
                                week: "WEEK 3–4",
                                title: "Launch + Amplify — Everything fires at once",
                                text: "We don't drip-feed. Content live. Shop tight. Spark Ads running. Everything hits at once so the algorithm rewards you fast."
                            },
                            {
                                week: "ONGOING",
                                title: "Weekly Optimize + Compound — This is where real growth happens",
                                text: "Week over week, we cut the losers and scale the winners. Most brands plateau. Ours don't."
                            }
                        ].map((step, i, arr) => (
                            <FadeIn key={i}>
                                <div className={`flex gap-8 ${i !== arr.length - 1 ? 'border-b border-[#E5E5E2]' : ''} py-12 group last:pb-0`}>
                                    <div className="flex flex-col items-center">
                                        <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-black font-heading shrink-0 ${step.active ? 'bg-[#F5EDE3] text-[#0D0D0D] border border-[#E5E5E2]/50 shadow-sm' : 'bg-[#0D0D0D] text-white'}`}>
                                            {i + 1}
                                        </div>
                                        {i !== arr.length - 1 && <div className="w-[2px] grow bg-[#E5E5E2] mt-4" />}
                                    </div>
                                    <div className="pb-4">
                                        <span className="text-[#0D0D0D] font-black text-[10px] uppercase tracking-widest mb-3 block">{step.week}</span>
                                        <h3 className="text-xl md:text-2xl font-black font-heading tracking-tight mb-4 text-[#0D0D0D]">
                                            {step.title}
                                        </h3>
                                        <p className="text-[#5C5C5C] text-lg font-medium leading-relaxed max-w-xl">
                                            {step.text}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6 — RESULTS */}
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
                                { val: "$34.2M+", label: "Total GMV generated for clients", gold: true },
                                { val: "275+", label: "Brands scaled on TikTok Shop" },
                                { val: "6.4x", label: "Average ROAS on paid campaigns" },
                                { val: "60d", label: "Average time to meaningful results" }
                            ].map((stat, i) => (
                                <div
                                    key={i}
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

            {/* SECTION 7 — CASE STUDIES PREVIEW */}
            <section className="bg-white py-[88px] px-4 md:px-10 border-t border-[#E5E5E2] overflow-hidden">
                <div className="container max-w-[1000px] mx-auto">
                    <FadeIn>
                        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                            <div>
                                <span className="text-[#F5EDE3] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-4 block">
                                    REAL RESULTS
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
                                brand: "Beauty Brand · US"
                            },
                            {
                                badge: "6.8x ROAS",
                                tags: "💊 Health · Week 3 · Spark Ads",
                                title: "From 2x ROAS on Meta to 6.8x on TikTok by week three",
                                text: "Was spending $8K/mo on Meta with mediocre returns. Rebuilt their entire ad strategy for TikTok's native ecosystem. 6.8x ROAS from week 3.",
                                brand: "Health Brand · US"
                            },
                            {
                                badge: "$47K/mo in 6wks",
                                tags: "👗 Fashion · 6 Weeks · Full Management",
                                title: "Zero presence to $47K/month in 6 weeks",
                                text: "Months of nothing on TikTok Shop. After a full audit and creator pipeline launch, monthly GMV hit $47K in 6 weeks with 89 active affiliates driving sales.",
                                brand: "Fashion Brand · UK"
                            }
                        ].map((card, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
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
                </div>
            </section>

            {/* SECTION 8 — FAQ */}
            <section className="bg-[#F7F7F5] py-[88px] px-4 md:px-10 overflow-hidden">
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
                                <div key={i} className="bg-white border border-[#E5E5E2] rounded-[13px] overflow-hidden transition-all duration-300">
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

            {/* SECTION 9 — FINAL CTA */}
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
                            Book a free 20-minute audit call. We'll review your shop live and tell you exactly what's holding your growth back — no pitch, no pressure.
                        </p>

                        <Link to="/contact">
                            <button className="bg-[#0D0D0D] hover:bg-[#1A1A1A] text-white border border-white/20 rounded-[10px] px-[36px] py-[15px] text-[15px] font-[800] font-manrope transition-all hover:-translate-y-[2px] shadow-[0_4px_28px_rgba(0,0,0,0.4)] mb-8 inline-flex items-center justify-center cursor-pointer">
                                Book a Free Audit Call <ArrowRight size={18} className="ml-2" />
                            </button>
                        </Link>

                        <p className="text-white/25 text-[11px] font-bold uppercase tracking-widest">
                            No commitment · No pitch deck · We'll review your brand before the call
                        </p>
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
