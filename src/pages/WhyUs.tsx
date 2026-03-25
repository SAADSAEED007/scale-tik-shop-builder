import React from "react";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X, Minus, Zap, Target, Users, Layout, ChevronLeft, ChevronRight } from "lucide-react";

import TapeLabel from "@/components/TapeLabel";
import ServiceTicker from "@/components/ServiceTicker";
import SEO from "@/components/SEO";

import navLogo from "@/assets/nav_logo.png";
import otherAgenciesIcon from "@/assets/icons of why us/group.png";
import freelanceIcon from "@/assets/icons of why us/freelance-work.png";
import diyIcon from "@/assets/icons of why us/meeting.png";

interface StatusIconProps {
    type: "full" | "partial" | "none";
}

const StatusIcon = ({ type }: StatusIconProps) => {
    if (type === "full") return <Check className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 mx-auto" strokeWidth={3} />;
    if (type === "partial") return <Minus className="w-5 h-5 md:w-6 md:h-6 text-[#D4B483] mx-auto" strokeWidth={3} />;
    return <X className="w-5 h-5 md:w-6 md:h-6 text-rose-500 mx-auto" strokeWidth={3} />;
};

const ComparisonRow = ({
    title,
    subtext,
    tikshop,
    others,
    freelancer,
    diy
}: {
    title: string;
    subtext: string;
    tikshop: "full" | "partial" | "none";
    others: "full" | "partial" | "none";
    freelancer: "full" | "partial" | "none";
    diy: "full" | "partial" | "none";
}) => (
    <tr className="border-b border-border/40 hover:bg-secondary/5 transition-colors group">
        <td className="py-6 px-4 md:px-8 sticky left-0 bg-white group-hover:bg-[#fafafa] z-10 border-r border-border/20 md:border-none shadow-[4px_0_12px_-6px_rgba(0,0,0,0.05)] md:shadow-none transition-colors min-w-[200px] md:min-w-0">
            <div className="flex flex-col gap-1">
                <span className="font-bold text-neutral-900 text-sm md:text-base leading-tight">{title}</span>
                <span className="text-[10px] md:text-sm text-muted-foreground font-medium">{subtext}</span>
            </div>
        </td>
        <td className="py-6 px-4 md:px-8 bg-[#fffbeb] group-hover:bg-[#fff9df] transition-colors">
            <StatusIcon type={tikshop} />
        </td>
        <td className="py-6 px-4 md:px-8 text-center">
            <StatusIcon type={others} />
        </td>
        <td className="py-6 px-4 md:px-8 text-center">
            <StatusIcon type={freelancer} />
        </td>
        <td className="py-6 px-4 md:px-8 text-center">
            <StatusIcon type={diy} />
        </td>
    </tr>
);

const SectionHeader = ({ title }: { title: string }) => (
    <tr>
        <td colSpan={5} className="bg-neutral-900 py-4 px-8 text-[11px] font-black uppercase tracking-[0.2em] text-white sticky left-0 z-20 border-y border-white/5">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#F5EDE3]" />
                {title}
            </div>
        </td>
    </tr>
);

const ComparisonData = {
    competitors: [
        {
            name: "TikShop Scale",
            sub: "TikTok Shop Specialist Agency",
            highlight: true,
            icon: (
                <div className="w-12 h-12 flex items-center justify-center overflow-hidden relative">
                    <img
                        src={navLogo}
                        alt="TikShop Scale Logo"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 max-w-none object-contain"
                    />
                </div>
            ),
            badge: "★ BEST CHOICE"
        },
        {
            name: "Other Agencies",
            sub: "Generalist social agencies on TikTok",
            icon: <img src={freelanceIcon} alt="Other Agencies" className="w-8 h-8 object-contain" />
        },
        {
            name: "Freelancer / VA",
            sub: "Upwork hire or virtual assistant",
            icon: <img src={otherAgenciesIcon} alt="Freelancer / VA" className="w-8 h-8 object-contain" />
        },
        {
            name: "DIY In-House",
            sub: "Figuring it out yourself",
            icon: <img src={diyIcon} alt="DIY In-House" className="w-8 h-8 object-contain" />
        }
    ],
    sections: [
        {
            title: "TIKTOK SHOP EXPERTISE",
            rows: [
                { title: "Only works on TikTok Shop", subtext: "Not splitting focus across 5 platforms", values: ["full", "none", "none", "full"] },
                { title: "Knows what's working on the algorithm right now", subtext: "Not 6 months behind on platform changes", values: ["full", "partial", "none", "none"] },
                { title: "Has run real TikTok Shop accounts before", subtext: "Not learning the platform on your budget", values: ["full", "partial", "none", "none"] },
                { title: "TikTok Shop policy & compliance knowledge", subtext: "You always know removals and account flags", values: ["full", "partial", "none", "none"] },
            ]
        },
        {
            title: "CREATOR & CONTENT",
            rows: [
                { title: "Sources creators who actually sell not just get views", subtext: "Vetted for conversion, not just follower count", values: ["full", "partial", "none", "none"] },
                { title: "Sends product, briefs creators, handles everything", subtext: "You don't chase anyone we do it all", values: ["full", "partial", "partial", "none"] },
                { title: "Tests multiple hooks until one wins", subtext: "Data-backed creative not gut feel", values: ["full", "partial", "none", "none"] },
                { title: "Builds an affiliate engine that compounds monthly", subtext: "More creators promoting you every week", values: ["full", "partial", "none", "none"] },
            ]
        },
        {
            title: "GROWTH & PAID MEDIA",
            rows: [
                { title: "Turns your best organic content into Spark Ads", subtext: "Amplifies what's already working not guessing", values: ["full", "partial", "none", "none"] },
                { title: "Cuts losing ads weekly doesn't let budget bleed", subtext: "Active management, not set-and-forget", values: ["full", "partial", "none", "none"] },
                { title: "Ad strategy built for TikTok not copy-pasted from Meta", subtext: "Different platform, completely different approach", values: ["full", "partial", "none", "none"] },
            ]
        },
        {
            title: "SHOP & OPERATIONS",
            rows: [
                { title: "Optimizes listings for TikTok's search algorithm", subtext: "More eyes on your products without paying for ads", values: ["full", "partial", "partial", "partial"] },
                { title: "Sets up and manages live shopping sessions", subtext: "The highest-converting format on TikTok Shop", values: ["full", "none", "none", "none"] },
                { title: "You can see your real numbers not just vanity metrics", subtext: "GMV, real profit, ROAS weekly, clearly", values: ["full", "partial", "none", "partial"] },
            ]
        },
        {
            title: "WORKING TOGETHER",
            rows: [
                { title: "One person responsible for your account", subtext: "You always know who to call", values: ["full", "partial", "full", "full"] },
                { title: "You hear from us weekly with actual data", subtext: 'Not a monthly PDF that says "results improving"', values: ["full", "partial", "none", "full"] },
                { title: "Cancel anytime no 6-month lock-in", subtext: "We earn your business every month", values: ["full", "none", "full", "full"] },
                { title: "No surprise fees ever", subtext: "What we quote is what you pay", values: ["full", "none", "partial", "full"] },
            ]
        }
    ]
};

const MobileComparison = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [touchStart, setTouchStart] = React.useState<number | null>(null);
    const [touchEnd, setTouchEnd] = React.useState<number | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleCardChange = (newIndex: number) => {
        setActiveIndex(newIndex);
        if (containerRef.current) {
            const offset = 70;
            const top = containerRef.current.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
        }
    };

    const nextCard = () => handleCardChange((activeIndex + 1) % 4);
    const prevCard = () => handleCardChange((activeIndex - 1 + 4) % 4);

    const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) nextCard();
        else if (distance < -50) prevCard();
        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div ref={containerRef} className="md:hidden mt-8 -mx-2 sm:mx-0 overflow-hidden relative">
            <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {ComparisonData.competitors.map((comp, compIdx) => (
                    <div key={compIdx} className="w-full flex-shrink-0 px-2">
                        <div className={`rounded-3xl border border-border shadow-xl overflow-hidden ${comp.highlight ? 'bg-[#f5f3e7]' : 'bg-white'}`}>
                            {/* Card Header */}
                            <div className="py-10 px-6 flex flex-col items-center text-center gap-4 relative">
                                {comp.badge && (
                                    <div className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg mb-2">
                                        {comp.badge}
                                    </div>
                                )}
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${!comp.highlight ? 'bg-secondary/30' : ''}`}>
                                    {comp.icon}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-xl font-black tracking-tight">{comp.name}</h3>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">
                                        {comp.sub}
                                    </p>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="divide-y divide-border/20">
                                {ComparisonData.sections.map((section, secIdx) => (
                                    <div key={secIdx}>
                                        <div className="bg-neutral-900 py-3.5 px-6 text-[10px] font-black uppercase tracking-[0.2em] text-white flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#F5EDE3]" />
                                            {section.title}
                                        </div>
                                        <div className="divide-y divide-border/10">
                                            {section.rows.map((row, rowIdx) => (
                                                <div key={rowIdx} className="py-5 px-6 flex items-start gap-4 hover:bg-black/[0.02] transition-colors">
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="font-bold text-neutral-900 text-[13px] leading-tight mb-1">{row.title}</h4>
                                                        <p className="text-[10px] text-muted-foreground font-medium">{row.subtext}</p>
                                                    </div>
                                                    <div className="flex-shrink-0 pt-0.5">
                                                        <StatusIcon type={row.values[compIdx] as any} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-8 mb-4">
                <button
                    onClick={prevCard}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-transform active:scale-90 border border-border/50"
                    aria-label="Previous card"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                    {ComparisonData.competitors.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleCardChange(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-8 bg-black' : 'w-1.5 bg-neutral-200'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
                <button
                    onClick={nextCard}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-transform active:scale-90 border border-border/50"
                    aria-label="Next card"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Legend on Mobile */}
            <div className="flex flex-wrap items-center justify-center gap-6 py-8 px-4 mt-4 border-t border-border/20">
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Included</span>
                </div>
                <div className="flex items-center gap-2">
                    <Minus className="w-4 h-4 text-[#D4B483]" strokeWidth={3} />
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Partial</span>
                </div>
                <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-rose-500" strokeWidth={3} />
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">No</span>
                </div>
            </div>
        </div>
    );
};

const WhyUs = () => {
    return (
        <div className="pt-44 pb-24 overflow-hidden min-h-screen bg-white grid-net">
            <SEO
                title="Why Choose Us"
                description="We only do TikTok Shop. That's why we win. Learn why a specialized agency beats a generalist every single time."
                keywords="Specialist TikTok Agency, TikTok Shop Expertise, eCommerce Growth Partner"
            />
            {/* Hero Section */}
            <section className="container max-w-5xl mx-auto px-4 text-center mb-24 md:mb-36">
                <FadeIn>
                    <div className="inline-block px-5 py-2.5 rounded-full bg-black/5 backdrop-blur-md border border-neutral-200/50 mb-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                        <span className="font-montserrat text-[13px] md:text-[14px] font-black tracking-[0.2em] text-black uppercase block">
                            WHY TIKSHOP SCALE
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-montserrat tracking-tighter leading-[1.1] text-neutral-900 mb-2">
                        We only do <br className="hidden md:block" />
                        <TapeLabel className="inline-block px-3 sm:px-4 py-1 rotate-[-2deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500">
                            TikTok Shop
                        </TapeLabel>.
                    </h1>
                    <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black font-montserrat tracking-tighter leading-[1.1] text-neutral-900 mb-10">
                        That's why we win.
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
                        Other agencies are spread thin across every platform. We go all-in on one and it shows in your results.
                    </p>
                </FadeIn>
            </section>

            {/* Service Ticker */}
            <div className="mb-24 md:mb-32">
                <ServiceTicker />
            </div>

            {/* Comparison Block */}
            <section className="container max-w-[1200px] mx-auto px-2 sm:px-4 mb-32 md:mb-40">
                <FadeIn delay={0.2}>
                    <div className="relative">
                        <div className="hidden md:block bg-white border border-border shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] rounded-[20px] sm:rounded-[40px] overflow-hidden">
                            <div className="overflow-x-auto scrollbar-hide">
                                <table className="w-full text-left border-collapse min-w-[950px]">
                                    <thead>
                                        <tr className="border-b border-border">
                                            <th className="py-14 px-10 w-[32%] sticky left-0 bg-white z-30 min-w-[220px] md:min-w-0">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-2xl font-black tracking-tighter">Feature</span>
                                                    <span className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">Key difference</span>
                                                </div>
                                            </th>
                                            {/* TikShopScale Column */}
                                            <th className="py-14 px-8 w-[17%] bg-[#fffbeb] relative min-w-[140px] md:min-w-0">
                                                <div className="flex flex-col gap-6 items-center text-center">
                                                    <div className="bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                                                        ★ BEST CHOICE
                                                    </div>
                                                    <div className="flex flex-col gap-4 items-center">
                                                        <div className="w-12 h-12 flex items-center justify-center overflow-hidden relative">
                                                            <img
                                                                src={navLogo}
                                                                alt="TikShop Scale Logo"
                                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 max-w-none object-contain dark-mode-logo transition-all duration-300"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-xl font-black tracking-tight">TikShop Scale</span>
                                                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">TikTok Shop Specialist Agency</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </th>
                                            {/* Other Agencies */}
                                            <th className="py-14 px-8 w-[17%] min-w-[140px] md:min-w-0 grid-net">
                                                <div className="flex flex-col gap-6 items-center text-center pt-10">
                                                    <div className="w-12 h-12 rounded-xl bg-white border border-border/50 shadow-sm flex items-center justify-center p-2">
                                                        <img src={freelanceIcon} alt="Other Agencies" className="w-8 h-8 object-contain" />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-lg font-black tracking-tight">Other Agencies</span>
                                                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">Generalist social agencies on TikTok</span>
                                                    </div>
                                                </div>
                                            </th>
                                            {/* Freelancer / VA */}
                                            <th className="py-14 px-8 w-[17%] min-w-[140px] md:min-w-0">
                                                <div className="flex flex-col gap-6 items-center text-center pt-10">
                                                    <div className="w-12 h-12 rounded-xl bg-white border border-border/50 shadow-sm flex items-center justify-center p-2">
                                                        <img src={otherAgenciesIcon} alt="Freelancer / VA" className="w-8 h-8 object-contain" />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-lg font-black tracking-tight">Freelancer / VA</span>
                                                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">Upwork hire or virtual assistant</span>
                                                    </div>
                                                </div>
                                            </th>
                                            {/* DIY In-House */}
                                            <th className="py-14 px-8 w-[17%] min-w-[140px] md:min-w-0">
                                                <div className="flex flex-col gap-6 items-center text-center pt-10">
                                                    <div className="w-12 h-12 rounded-xl bg-white border border-border/50 shadow-sm flex items-center justify-center p-2">
                                                        <img src={diyIcon} alt="DIY In-House" className="w-8 h-8 object-contain" />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-lg font-black tracking-tight">DIY In-House</span>
                                                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">Figuring it out yourself</span>
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* TIKTOK SHOP EXPERTISE */}
                                        <SectionHeader title="TIKTOK SHOP EXPERTISE" />
                                        <ComparisonRow
                                            title="Only works on TikTok Shop"
                                            subtext="Not splitting focus across 5 platforms"
                                            tikshop="full" others="none" freelancer="none" diy="full"
                                        />
                                        <ComparisonRow
                                            title="Knows what's working on the algorithm right now"
                                            subtext="Not 6 months behind on platform changes"
                                            tikshop="full" others="partial" freelancer="none" diy="none"
                                        />
                                        <ComparisonRow
                                            title="Has run real TikTok Shop accounts before"
                                            subtext="Not learning the platform on your budget"
                                            tikshop="full" others="partial" freelancer="none" diy="none"
                                        />
                                        <ComparisonRow
                                            title="TikTok Shop policy & compliance knowledge"
                                            subtext="You always know removals and account flags"
                                            tikshop="full" others="partial" freelancer="none" diy="none"
                                        />

                                        {/* CREATOR & CONTENT */}
                                        <SectionHeader title="CREATOR & CONTENT" />
                                        <ComparisonRow
                                            title="Sources creators who actually sell not just get views"
                                            subtext="Vetted for conversion, not just follower count"
                                            tikshop="full" others="partial" freelancer="none" diy="none"
                                        />
                                        <ComparisonRow
                                            title="Sends product, briefs creators, handles everything"
                                            subtext="You don't chase anyone we do it all"
                                            tikshop="full" others="partial" freelancer="partial" diy="none"
                                        />
                                        <ComparisonRow
                                            title="Tests multiple hooks until one wins"
                                            subtext="Data-backed creative not gut feel"
                                            tikshop="full" others="partial" freelancer="none" diy="none"
                                        />
                                        <ComparisonRow
                                            title="Builds an affiliate engine that compounds monthly"
                                            subtext="More creators promoting you every week"
                                            tikshop="full" others="partial" freelancer="none" diy="none"
                                        />

                                        {/* GROWTH & PAID MEDIA */}
                                        <SectionHeader title="GROWTH & PAID MEDIA" />
                                        <ComparisonRow
                                            title="Turns your best organic content into Spark Ads"
                                            subtext="Amplifies what's already working not guessing"
                                            tikshop="full" others="partial" freelancer="none" diy="none"
                                        />
                                        <ComparisonRow
                                            title="Cuts losing ads weekly doesn't let budget bleed"
                                            subtext="Active management, not set-and-forget"
                                            tikshop="full" others="partial" freelancer="none" diy="none"
                                        />
                                        <ComparisonRow
                                            title="Ad strategy built for TikTok not copy-pasted from Meta"
                                            subtext="Different platform, completely different approach"
                                            tikshop="full" others="partial" freelancer="none" diy="none"
                                        />

                                        {/* SHOP & OPERATIONS */}
                                        <SectionHeader title="SHOP & OPERATIONS" />
                                        <ComparisonRow
                                            title="Optimizes listings for TikTok's search algorithm"
                                            subtext="More eyes on your products without paying for ads"
                                            tikshop="full" others="partial" freelancer="partial" diy="partial"
                                        />
                                        <ComparisonRow
                                            title="Sets up and manages live shopping sessions"
                                            subtext="The highest-converting format on TikTok Shop"
                                            tikshop="full" others="none" freelancer="none" diy="none"
                                        />
                                        <ComparisonRow
                                            title="You can see your real numbers not just vanity metrics"
                                            subtext="GMV, real profit, ROAS weekly, clearly"
                                            tikshop="full" others="partial" freelancer="none" diy="partial"
                                        />

                                        {/* WORKING TOGETHER */}
                                        <SectionHeader title="WORKING TOGETHER" />
                                        <ComparisonRow
                                            title="One person responsible for your account"
                                            subtext="You always know who to call"
                                            tikshop="full" others="partial" freelancer="full" diy="full"
                                        />
                                        <ComparisonRow
                                            title="You hear from us weekly with actual data"
                                            subtext={'Not a monthly PDF that says "results improving"'}
                                            tikshop="full" others="partial" freelancer="none" diy="full"
                                        />
                                        <ComparisonRow
                                            title="Cancel anytime no 6-month lock-in"
                                            subtext="We earn your business every month"
                                            tikshop="full" others="none" freelancer="full" diy="full"
                                        />
                                        <ComparisonRow
                                            title="No surprise fees ever"
                                            subtext="What we quote is what you pay"
                                            tikshop="full" others="none" freelancer="partial" diy="full"
                                        />
                                    </tbody>
                                </table>
                            </div>

                            {/* Legend Section */}
                            <div className="flex flex-wrap items-center justify-center gap-10 py-10 bg-[#fafafa]">
                                <div className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-emerald-500" strokeWidth={3} />
                                    <span className="text-[12px] font-bold text-neutral-500 uppercase tracking-widest"> Fully Included</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Minus className="w-5 h-5 text-[#D4B483]" strokeWidth={3} />
                                    <span className="text-[12px] font-bold text-neutral-500 uppercase tracking-widest"> Partial / Depends</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <X className="w-5 h-5 text-rose-500" strokeWidth={3} />
                                    <span className="text-[12px] font-bold text-neutral-500 uppercase tracking-widest"> Not Offered</span>
                                </div>
                            </div>
                        </div>

                        <MobileComparison />
                    </div>
                </FadeIn>
            </section>
            {/* Impact Section */}
            <section className="container max-w-4xl mx-auto px-4 mb-32 md:mb-40 text-center grid-net">
                <FadeIn>
                    <h2 className="text-2xl sm:text-4xl md:text-6xl font-black font-montserrat tracking-tighter leading-tight mb-12">
                        What This <br className="md:hidden" />
                        <TapeLabel className="inline-block px-3 sm:px-4 py-1 rotate-[-1deg] bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black">Means for You</TapeLabel>
                    </h2>

                    <div className="space-y-8 text-sm sm:text-base md:text-xl text-neutral-600 font-medium leading-relaxed max-w-3xl mx-auto">
                        <p className="border-b border-neutral-100 pb-8">
                            You're not hiring a team learning on your budget. We're already inside TikTok Shop every day watching what's changing, seeing what converts, moving fast.
                        </p>
                        <p className="border-b border-neutral-100 pb-8">
                            Your content is built for TikTok. Your ads aren't guesswork. Your creator program has a system.
                        </p>
                        <p className="text-neutral-900 font-bold">
                            The result? Fewer mistakes. Faster decisions. <br className="hidden md:block" />
                            A revenue channel that <TapeLabel className="inline-block px-3 py-0.5 rotate-[1deg] bg-[#F5EDE3] shadow-sm text-black">actually works.</TapeLabel>
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Final CTA Bar */}
            <section className="container max-w-[1200px] mx-auto px-4 grid-net">
                <FadeIn>
                    <div className="bg-black text-white rounded-[20px] sm:rounded-[30px] p-6 sm:p-10 md:p-14 mb-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                        <div className="text-center md:text-left">
                            <h2 className="text-xl sm:text-3xl md:text-4xl font-black mb-4 leading-tight">
                                Ready to work with a team that <br className="hidden md:block" />
                                <TapeLabel className="inline-block px-3 sm:px-4 py-1 rotate-[-2deg] origin-left bg-[#F5EDE3] shadow-sm text-black">only does TikTok?</TapeLabel>
                            </h2>
                            <p className="text-neutral-400 text-base sm:text-lg font-medium">
                                Free audit call no commitment, no pitch deck, just honest advice.
                            </p>
                        </div>
                        <a href="https://calendly.com/tikshopscale/30mincall" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                            <Button size="lg" className="w-full md:w-auto rounded-full bg-[#F5EDE3] hover:bg-white text-black font-black text-base sm:text-lg px-6 sm:px-10 py-6 sm:py-8 transition-transform hover:scale-105 shadow-sm border border-neutral-100">
                                Book a Free Audit Call →
                            </Button>
                        </a>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
};

export default WhyUs;
