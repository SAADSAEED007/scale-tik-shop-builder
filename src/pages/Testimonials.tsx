import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";
import ServiceTicker from "@/components/ServiceTicker";
import { Play, ArrowRight, Video as VideoIcon, Search } from "lucide-react";


const Testimonials = () => {
    return (
        <div className="bg-[#F7F7F5] min-h-screen font-manrope text-[#0D0D0D]">
            <style>
                {`
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(212,180,131,0.6); }
                    70% { box-shadow: 0 0 0 18px rgba(212,180,131,0); }
                    100% { box-shadow: 0 0 0 0 rgba(212,180,131,0); }
                }
                .hero-section::before {
                    content: '';
                    position: absolute;
                    top: -100px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 800px;
                    height: 800px;
                    background: radial-gradient(circle, rgba(212,180,131,0.1) 0%, transparent 65%);
                    pointer-events: none;
                }
                .featured-quote::before {
                    content: '"';
                    position: absolute;
                    left: 0;
                    top: -4px;
                    font-family: 'Syne', sans-serif;
                    font-size: 40px;
                    color: #D4B483;
                    line-height: 1;
                }
                .mini-quote-card::before {
                    content: '"';
                    position: absolute;
                    top: -8px;
                    right: 16px;
                    font-family: 'Syne', sans-serif;
                    font-size: 80px;
                    color: rgba(212,180,131,0.1);
                    line-height: 1;
                }
                .cta-glow::before {
                    content: '';
                    position: absolute;
                    top: -120px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(212,180,131,0.12) 0%, transparent 65%);
                    pointer-events: none;
                }

                /* Responsive Rules */
                @media (max-width: 900px) {
                    .featured-testimonial-card {
                        grid-template-columns: 1fr !important;
                    }
                    .video-side {
                        min-height: 260px !important;
                    }
                    .video-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .quotes-strip-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .share-story-card {
                        grid-template-columns: 1fr !important;
                        padding: 32px 24px !important;
                    }
                    .main-content-inner {
                        padding: 48px 16px 60px !important;
                    }
                }
                @media (max-width: 560px) {
                    .featured-results-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .hero-section {
                        padding: 100px 20px 56px !important;
                    }
                }
                `}
            </style>

            {/* 2 — HERO SECTION */}
            <section className="hero-section relative bg-[#FFFFFF] pt-[160px] pb-[88px] px-8 text-center overflow-hidden">
                <div className="relative z-10 max-w-[1020px] mx-auto">
                    <FadeIn delay={0}>
                        <div className="inline-block px-5 py-2.5 rounded-full bg-black/5 backdrop-blur-md border border-neutral-200/50 mb-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                            <span className="font-syne text-[12px] md:text-[14px] font-black tracking-[0.1em] text-black uppercase block">
                                CLIENT TESTIMONIALS
                            </span>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="font-syne font-[800] text-[clamp(38px,6vw,72px)] text-black leading-[1.04] mb-4 tracking-[-1px]">
                            Don't take our <TapeLabel className="inline-block px-4 py-1 rotate-[-2deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black">word for it.</TapeLabel>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="font-manrope text-[clamp(15px,2vw,18px)] text-neutral-500 font-medium leading-relaxed max-w-[480px] mx-auto mb-10">
                            Real brands. Real faces. Real results — in their own words. No scripts, no actors, no made-up quotes.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="flex items-center justify-center gap-3 flex-wrap">
                            {["Unscripted", "Real clients only", "Verified results"].map((chip) => (
                                <div key={chip} className="bg-black/5 border border-neutral-200/50 px-[16px] py-[8px] rounded-full text-[12.5px] font-[700] text-black/60 inline-flex items-center gap-[8px]">
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#F5EDE3] shadow-sm" />
                                    {chip}
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 3 — TICKER */}
            <ServiceTicker
                variant="black"
                items={[
                    "$800 → $23K/MO",
                    "6.8X ROAS",
                    "$47K IN 6 WEEKS",
                    "312 AFFILIATES",
                    "$14K LIVE IN 2HRS",
                    "+38% PROFIT"
                ]}
            />

            {/* 4 — MAIN CONTENT AREA */}
            <main className="bg-[#F7F7F5]">
                <div className="max-w-[1020px] mx-auto px-6 pt-[72px] pb-[80px] main-content-inner">

                    {/* 4A — FEATURED TESTIMONIAL */}
                    <FadeIn>
                        <div className="flex items-center gap-3 mb-5">
                            <TapeLabel className="bg-[#F5EDE3] text-black text-[11px] font-[800] tracking-[2px] uppercase px-[14px] py-1.25 rounded-full flex shrink-0 rotate-[1deg]">
                                ✦ Featured
                            </TapeLabel>
                            <div className="flex-1 h-px bg-[#E5E5E2]" />
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="bg-white border border-[#E5E5E2] rounded-[22px] overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.08)] mb-16 grid grid-cols-1 md:grid-cols-2 featured-testimonial-card">
                            {/* LEFT — Video side */}
                            <div className="bg-[#0D0D0D] relative min-h-[360px] flex items-center justify-center video-side">
                                <div className="absolute top-4 left-4 bg-[#F5EDE3] text-[#3D2800] font-syne text-[18px] font-[800] px-4 py-2 rounded-[10px] z-10 shadow-sm">
                                    +$22K/mo
                                </div>
                                <div className="flex flex-col items-center gap-[14px]">
                                    <div className="w-[72px] h-[72px] rounded-full border-[2.5px] border-[#D4B483] bg-[#2E2E2E] flex items-center justify-center text-[32px]">
                                        👩
                                    </div>
                                    <button className="w-[60px] h-[60px] bg-[#F5EDE3] rounded-full flex items-center justify-center shadow-[0_0_0_0_rgba(245,237,227,0.5)] animate-[pulse_2.5s_ease-in-out_infinite] group hover:scale-105 transition-transform">
                                        <Play fill="black" size={24} className="ml-1" />
                                    </button>
                                    <div className="text-center">
                                        <div className="text-[13px] font-[600] text-white/40">Add client video here</div>
                                        <div className="text-[11.5px] text-white/20">YouTube · Loom · MP4</div>
                                    </div>
                                    {/* SWAP: Replace placeholder with <iframe> for YouTube/Loom or <video> for self-hosted MP4 */}
                                </div>
                            </div>

                            {/* RIGHT — Info side */}
                            <div className="p-10 md:p-[40px_38px] flex flex-col justify-center">
                                <div className="flex flex-wrap gap-2 mb-5">
                                    <span className="bg-[#F7F7F5] border border-[#E5E5E2] text-[#5C5C5C] text-[12px] font-[700] px-3 py-1 rounded-full">💄 Beauty Brand</span>
                                    <span className="bg-[#F7F7F5] border border-[#E5E5E2] text-[#5C5C5C] text-[12px] font-[700] px-3 py-1 rounded-full">📍 US</span>
                                    <span className="bg-[#EDE9FE] text-[#5B21B6] text-[12px] font-[700] px-3 py-1 rounded-full">Creator Seeding</span>
                                </div>
                                <blockquote className="featured-quote italic text-[clamp(16px,2vw,20px)] text-[#2E2E2E] leading-[1.65] mb-6 pl-5 relative">
                                    "I was ready to quit TikTok Shop before finding them. Within 60 days I had more orders than I knew what to do with. The creator setup alone changed everything — I didn't realise I'd been doing it completely wrong."
                                </blockquote>
                                <div className="flex items-center gap-3 mb-7">
                                    <div className="w-[44px] h-[44px] rounded-full bg-[#0D0D0D] flex items-center justify-center text-[20px]">
                                        👩
                                    </div>
                                    <div>
                                        <div className="font-syne font-[800] text-[15px] text-black">Sarah K.</div>
                                        <div className="text-[12.5px] text-[#9A9A9A] font-medium">Beauty Accessories Brand · Los Angeles</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 featured-results-grid results-stats-grid">
                                    <div className="bg-[#F5EDE3] border border-[#E5E5E2] rounded-[10px] p-[14px_10px] text-center flex flex-col items-center justify-center">
                                        <div className="font-syne font-[800] text-[20px] text-[#16A34A] leading-none mb-[3px]">+2,775%</div>
                                        <div className="text-[11px] text-[#9A9A9A] font-[600] leading-[1.3]">GMV Growth</div>
                                    </div>
                                    <div className="bg-[#F5EDE3] border border-[#E5E5E2] rounded-[10px] p-[14px_10px] text-center flex flex-col items-center justify-center">
                                        <div className="font-syne font-[800] text-[20px] text-black leading-none mb-[3px]">60d</div>
                                        <div className="text-[11px] text-[#9A9A9A] font-[600] leading-[1.3]">Time to Result</div>
                                    </div>
                                    <div className="bg-[#F5EDE3] border border-[#E5E5E2] rounded-[10px] p-[14px_10px] text-center flex flex-col items-center justify-center">
                                        <div className="font-syne font-[800] text-[20px] text-[#16A34A] leading-none mb-[3px]">6.4x</div>
                                        <div className="text-[11px] text-[#9A9A9A] font-[600] leading-[1.3]">ROAS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* 4B — MORE TESTIMONIALS */}
                    <FadeIn>
                        <div className="flex items-center gap-3.5 mb-6">
                            <span className="text-[11px] font-[700] tracking-[2.5px] uppercase text-[#9A9A9A] whitespace-nowrap">MORE TESTIMONIALS</span>
                            <div className="flex-1 h-px bg-[#E5E5E2]" />
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 video-grid">
                        {[
                            {
                                result: "6.8x ROAS",
                                category: "💊 Health Brand",
                                avatar: "👩",
                                quote: "We were on Meta with 2x ROAS. TikTok with their system hit 6.8x in week three. I wish we'd switched sooner.",
                                name: "Cathy N.",
                                role: "Beauty Brand Founder · US"
                            },
                            {
                                result: "$47K/mo",
                                category: "👗 Fashion Brand",
                                avatar: "👨",
                                quote: "Months of nothing, then suddenly everything clicked. The shop audit found things I never would have caught on my own.",
                                name: "Derek W.",
                                role: "eCommerce Operator · UK"
                            },
                            {
                                result: "$14K in 2hrs",
                                category: "🏠 Home Brand",
                                avatar: "👨",
                                quote: "I thought live shopping wasn't for us. First session did $14K in 2 hours. We now go live twice a week and it's our best revenue day.",
                                name: "Marcus T.",
                                role: "Home Goods Brand · AU"
                            },
                            {
                                result: "+38% Profit",
                                category: "💊 Health Brand",
                                avatar: "👩",
                                quote: "Revenue looked great. Profit felt wrong. They found out why in week two. I hadn't looked at SKU-level data like that before — it changed everything.",
                                name: "Priya N.",
                                role: "Health & Wellness Brand · CA"
                            }
                        ].map((card, idx) => (
                            <FadeIn key={idx} delay={idx * 0.05}>
                                <div className="bg-white border border-[#E5E5E2] rounded-[18px] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1">
                                    <div className="bg-[#0D0D0D] relative pt-[56.25%] overflow-hidden">
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                            <div className="w-[52px] h-[52px] rounded-full border-2 border-[#D4B483] bg-[#2E2E2E] flex items-center justify-center text-[24px]">
                                                {card.avatar}
                                            </div>
                                            <div className="w-[52px] h-[52px] bg-[#F5EDE3] rounded-full flex items-center justify-center">
                                                <Play fill="black" size={20} className="ml-1" />
                                            </div>
                                            <div className="text-[12px] font-[600] text-white/40">Add client video</div>
                                            {/* SWAP: Replace with iframe or video element */}
                                        </div>
                                        <div className="absolute top-3 left-3 bg-[#F5EDE3] text-[#3D2800] font-syne text-[15px] font-[800] px-3 py-1.5 rounded-[8px] shadow-sm">
                                            {card.result}
                                        </div>
                                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white/70 text-[11px] font-[600] px-2.5 py-1 rounded-full">
                                            {card.category}
                                        </div>
                                    </div>
                                    <div className="p-[22px_24px]">
                                        <p className="text-[14.5px] italic text-[#2E2E2E] leading-[1.68] mb-4 pl-3.5 border-l-3 border-[#D4B483]">
                                            "{card.quote}"
                                        </p>
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-9 h-9 rounded-full bg-[#0D0D0D] flex items-center justify-center text-[16px]">
                                                {card.avatar}
                                            </div>
                                            <div>
                                                <div className="font-syne font-[800] text-[13.5px] text-black">{card.name}</div>
                                                <div className="text-[11.5px] text-[#9A9A9A] font-medium">{card.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* 4C — MINI QUOTES STRIP */}
                    <FadeIn>
                        <div className="flex items-center gap-3.5 mb-6">
                            <span className="text-[11px] font-[700] tracking-[2.5px] uppercase text-[#9A9A9A] whitespace-nowrap">IN THEIR OWN WORDS</span>
                            <div className="flex-1 h-px bg-[#E5E5E2]" />
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-14 quotes-strip-grid">
                        {[
                            {
                                initial: "S",
                                text: "The creator setup alone made us more in month one than we'd made in 4 months of trying ourselves.",
                                name: "Sarah K.",
                                result: "+$22K/mo"
                            },
                            {
                                initial: "D",
                                text: "They told us TikTok Ads wouldn't work yet — and they were right. Fixed the foundation first. Then we scaled. Smart.",
                                name: "Derek W.",
                                result: "$47K/mo"
                            },
                            {
                                initial: "M",
                                text: "Most agencies tell you what you want to hear. These guys told us what we needed to hear. Big difference.",
                                name: "Marcus T.",
                                result: "$14K Live"
                            }
                        ].map((q, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="mini-quote-card bg-[#F5EDE3] rounded-[16px] p-[26px_24px] relative overflow-hidden group h-full flex flex-col border border-[#E5E5E2] shadow-sm transform hover:-translate-y-1 transition-all duration-300">
                                    <p className="text-[14.5px] italic text-neutral-600 leading-[1.65] mb-4 relative z-10 flex-1 font-medium">
                                        "{q.text}"
                                    </p>
                                    <div className="flex items-center gap-[9px] relative z-10">
                                        <div className="w-[30px] h-[30px] rounded-full bg-black flex items-center justify-center text-[12px] font-[800] text-white">
                                            {q.initial}
                                        </div>
                                        <div className="text-[12.5px] font-[700] text-black/60">{q.name}</div>
                                        <div className="bg-black text-white text-[11px] font-[800] px-[9px] py-[2px] rounded-full ml-1.5 font-syne shadow-md">
                                            {q.result}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* 4D — SHARE YOUR STORY SECTION */}
                    <FadeIn>
                        <div className="flex items-center gap-3.5 mb-6">
                            <span className="text-[11px] font-[700] tracking-[2.5px] uppercase text-[#9A9A9A] whitespace-nowrap">ARE YOU A CLIENT?</span>
                            <div className="flex-1 h-px bg-[#E5E5E2]" />
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <div className="bg-white border border-[#E5E5E2] rounded-[20px] p-12 md:p-[48px_44px] mb-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center share-story-card">
                            <div>
                                <h3 className="font-syne font-[800] text-[26px] text-black leading-[1.2] mb-2.5">
                                    Share your story. Help other brands decide.
                                </h3>
                                <p className="text-[15px] text-[#5C5C5C] leading-[1.7] font-medium">
                                    If you're a current or past TikShopScale client, we'd love to feature you here. It takes less than 2 minutes — just answer 3 questions on camera from your phone.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                {[
                                    { h: "Record a 30–90 second video on your phone", p: "No studio needed. Natural light, casual setting. Real is better." },
                                    { h: "Answer 3 simple prompts", p: "\"Before TikShopScale...\" → \"What changed...\" → \"I'd recommend them to...\"" },
                                    { h: "Send it to hello@tikshopscale.com", p: "We'll edit, caption, and feature it on this page with your results." }
                                ].map((step, idx) => (
                                    <div key={idx} className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-[12px] p-[16px_18px] flex items-start gap-[13px]">
                                        <div className="w-[28px] h-[28px] rounded-full bg-[#F5EDE3] flex items-center justify-center font-syne text-[13px] font-[800] text-black shrink-0 border border-[#E5E5E2]">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-14px font-[700] text-black mb-[3px]">{step.h}</h4>
                                            <p className="text-[13px] text-[#5C5C5C] leading-[1.5] font-medium">{step.p}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    {/* 4E — FINAL CTA BLOCK */}
                    <FadeIn>
                        <section id="contact" className="cta-glow relative bg-[#0D0D0D] rounded-[20px] p-14 md:p-[56px_48px] text-center overflow-hidden">
                            <div className="relative z-10">
                                <span className="text-[#F5EDE3] font-[700] text-[11px] uppercase tracking-[3px] mb-[14px] block">
                                    READY TO BE NEXT?
                                </span>
                                <h2 className="font-syne font-[800] text-[clamp(26px,4vw,44px)] text-white leading-[1.1] mb-3">
                                    Your results could be <TapeLabel className="inline-block px-4 py-1 rotate-[1.5deg] bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black">on this page.</TapeLabel>
                                </h2>
                                <p className="text-[15px] text-white/45 max-w-[420px] mx-auto mb-8 font-medium">
                                    Book a free 20-minute audit call. We'll look at your shop and tell you honestly what's possible — no pitch, no pressure.
                                </p>
                                <div className="flex flex-col items-center gap-4 hero-buttons">
                                    <a href="mailto:hello@tikshopscale.com" className="w-full sm:w-auto">
                                        <button className="bg-black text-[#F5EDE3] border border-[#F5EDE3]/20 px-10 py-4 rounded-[10px] font-[700] text-[16px] shadow-[0_4px_24px_rgba(245,237,227,0.1)] transition-all hover:-translate-y-1 active:scale-95 w-full">
                                            Book a Free Audit Call →
                                        </button>
                                    </a>
                                </div>
                                <div className="text-[12px] text-white/25 mt-4 font-bold tracking-tight">
                                    No commitment · No pitch deck · Honest advice only
                                </div>
                            </div>
                        </section>
                    </FadeIn>

                </div>
            </main>
        </div>
    );
};

export default Testimonials;
