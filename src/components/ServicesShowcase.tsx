import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Users, Play, BarChart3, ArrowRight, Map, Shield, Star, Video, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
    {
        title: "Launch Strategy",
        desc: "We build your 30–60 day launch roadmap before you spend a dollar — offer positioning, creator seeding, content plan, and paid strategy all aligned.",
        icon: Map,
        cta: "Book a Free Strategy Call"
    },
    {
        title: "TikTok Shop Setup + Optimization",
        desc: "We audit every inch of your shop and fix what's silently killing your conversion rate — bad titles, wrong categories, weak images, and weak pricing.",
        icon: Zap,
        cta: "Book a Free Shop Audit"
    },
    {
        title: "Compliance + Risk Management",
        desc: "One policy violation can freeze your shop overnight. We audit your shop before TikTok does to prevent suspended listings or payouts.",
        icon: Shield,
        cta: "Get a Free Compliance Check"
    },
    {
        title: "Creator Seeding + Affiliate Program",
        desc: "Find creators in your niche, send them your product, brief them on what to say, and build an affiliate engine that grows month after month.",
        icon: Users,
        cta: "Start with creators already primed to sell"
    },
    {
        title: "Creator Management + Retention",
        desc: "We manage your top performers so they stay loyal, stay motivated, and keep selling. That's where the compounding happens.",
        icon: Star,
        cta: "Get a Free Creator Audit"
    },
    {
        title: "UGC Production + Creative Direction",
        desc: "The reason most TikTok content doesn't sell is the brief. We handle hook-first scripts, briefs, filming guidance, editing, and weekly A/B testing.",
        icon: Video,
        cta: "Creative built to convert, not just look"
    },
    {
        title: "Spark Ads + Paid Media Management",
        desc: "We take your best-performing organic content and scale it with a paid strategy built specifically for TikTok's native ad ecosystem.",
        icon: BarChart3,
        cta: "Get a Free Ad Audit"
    },
    {
        title: "Live Shopping Strategy + Execution",
        desc: "Live selling is TikTok Shop's highest-converting format. We design the full experience: scripting, host sourcing, training, and promotional mechanics.",
        icon: Play,
        cta: "Book a Free Live Strategy Call"
    },
    {
        title: "Shop Operations + Reporting",
        desc: "We handle backend management (inventory/catalog) and give you clear weekly visibility into GMV, profit, CVR, and exactly where to focus next.",
        icon: Layout,
        cta: "Get a Free Margin Audit"
    },
];

const ServicesShowcase = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isCentered, setIsCentered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isTransitioning = useRef(false);
    const slideRef = useRef(0);
    const scrollAccumulator = useRef(0);

    // Keep ref in sync with state for use in event listeners
    useEffect(() => {
        slideRef.current = activeSlide;
    }, [activeSlide]);

    // Use a high-frequency effect to check positioning for EARLIER intervention
    useEffect(() => {
        const checkPos = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const vh = window.innerHeight;

            // Early detection: trigger "active" state as it's nearing center (40-60% range)
            const isInRange = rect.top < vh * 0.45 && rect.bottom > vh * 0.55;
            setIsCentered(isInRange);
        };

        window.addEventListener("scroll", checkPos, { passive: true });
        return () => window.removeEventListener("scroll", checkPos);
    }, []);

    const handleWheel = useCallback((e: WheelEvent) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const vh = window.innerHeight;

        // TRIGGER LOCK EARLY: If top is approaching center or overlap is significant
        const isLockableEntry = rect.top < vh * 0.4 && rect.bottom > vh * 0.6;

        if (isLockableEntry) {
            const isAtFirst = slideRef.current === 0;
            const isAtLast = slideRef.current === services.length - 1;
            const isScrollingUp = e.deltaY < 0;
            const isScrollingDown = e.deltaY > 0;

            const shouldCapture = (isScrollingDown && !isAtLast) || (isScrollingUp && !isAtFirst);

            if (shouldCapture) {
                // INSTANT SNAP & BODY LOCK
                if (e.cancelable) e.preventDefault();
                e.stopPropagation();

                // Lock the body to prevent ANY background movement
                document.body.style.overflow = 'hidden';

                // Force section to stay centered while internal scroll happens
                const mid = rect.top + rect.height / 2;
                const vMid = vh / 2;
                if (Math.abs(mid - vMid) > 1) {
                    window.scrollTo({
                        top: window.scrollY + (mid - vMid),
                        behavior: 'instant' as any
                    });
                }

                if (isTransitioning.current) return;

                scrollAccumulator.current += e.deltaY;

                // Ultra-sensitive threshold for fast response
                if (Math.abs(scrollAccumulator.current) >= 30) {
                    isTransitioning.current = true;
                    const direction = scrollAccumulator.current > 0 ? 1 : -1;

                    setActiveSlide(prev => {
                        const next = prev + direction;
                        return Math.max(0, Math.min(services.length - 1, next));
                    });

                    scrollAccumulator.current = 0;

                    setTimeout(() => {
                        isTransitioning.current = false;
                    }, 400);
                }
            } else {
                // We've reached the end, release body scroll
                document.body.style.overflow = '';
                scrollAccumulator.current = 0;
            }
        } else {
            // Not in zone, ensure scroll is enabled
            document.body.style.overflow = '';
            scrollAccumulator.current = 0;
        }
    }, []);

    // Touch Handling for Mobile Swipe
    const touchCoord = useRef({ x: 0, y: 0 });

    const handleTouchStart = (e: React.TouchEvent) => {
        touchCoord.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const deltaX = touchCoord.current.x - e.changedTouches[0].clientX;
        const deltaY = touchCoord.current.y - e.changedTouches[0].clientY;

        // Determine if it was a horizontal or vertical swipe
        if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
            if (isTransitioning.current) return;

            const isHorizontal = Math.abs(deltaX) > Math.abs(deltaY);
            const direction = isHorizontal ? (deltaX > 0 ? 1 : -1) : (deltaY > 0 ? 1 : -1);

            // For vertical swipe, check if we are in the lock zone
            if (!isHorizontal) {
                const rect = containerRef.current?.getBoundingClientRect();
                const vh = window.innerHeight;
                if (rect && (rect.top > vh * 0.2 || rect.bottom < vh * 0.8)) {
                    // If not centered enough, let regular scroll happen
                    return;
                }

                // If it's the last slide and they swipe down, let them scroll out
                if (direction === 1 && activeSlide === services.length - 1) return;
                // If it's the first slide and they swipe up, let them scroll out
                if (direction === -1 && activeSlide === 0) return;
            }

            isTransitioning.current = true;
            setActiveSlide(prev => {
                const next = prev + direction;
                return Math.max(0, Math.min(services.length - 1, next));
            });

            setTimeout(() => {
                isTransitioning.current = false;
            }, 400);
        }
    };

    useEffect(() => {
        const section = containerRef.current;
        if (section) {
            section.addEventListener("wheel", handleWheel, { passive: false });
        }
        return () => {
            if (section) section.removeEventListener("wheel", handleWheel);
            document.body.style.overflow = '';
        };
    }, [handleWheel]);

    return (
        <section
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative h-screen w-full flex items-center justify-center bg-background overflow-hidden"
        >
            <div className="w-full max-w-5xl relative px-4">

                {/* Main Content Card - Optimized for mobile responsiveness */}
                <div className="relative w-full h-[520px] md:h-[600px] bg-card/70 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[4rem] border border-border/40 shadow-2xl flex items-center justify-center p-5 md:p-12 overflow-hidden">

                    {/* Progress Indicators */}
                    <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 hidden sm:flex z-50">
                        {services.map((_, i) => (
                            <div
                                key={i}
                                className={`h-10 w-1 rounded-full transition-all duration-700 ${activeSlide === i ? "bg-primary scale-x-125 shadow-[0_0_15px_rgba(var(--primary),0.3)]" : "bg-border/30"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Text Content */}
                    <div className="w-full max-w-2xl px-2 text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.02, y: -30 }}
                                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                                className="flex flex-col items-center gap-4 md:gap-10"
                            >
                                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-[#F5EDE3] flex items-center justify-center text-neutral-900 border border-[#E6D5C3]">
                                    {React.createElement(services[activeSlide].icon, { size: 32, className: "md:w-10 md:h-10", strokeWidth: 1.25 })}
                                </div>

                                <div className="space-y-3 md:space-y-4">
                                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-primary/30">
                                        Step 0{activeSlide + 1}
                                    </span>
                                    <h3 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-foreground">
                                        {services[activeSlide].title}
                                    </h3>
                                    <p className="text-xs md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto font-medium px-2">
                                        {services[activeSlide].desc}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <Link to="/contact">
                                        <Button variant="hero" size="lg" className="rounded-full px-8 md:px-10 h-11 md:h-16 text-[13px] md:text-base font-bold shadow-xl active:scale-95 transition-all gap-2">
                                            {services[activeSlide].cta}
                                            <ArrowRight size={18} className="md:w-5 md:h-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="absolute top-6 right-6 md:top-12 md:right-12 text-[10px] md:text-sm font-black tracking-widest text-primary/10 select-none">
                        0{activeSlide + 1} / 0{services.length}
                    </div>

                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:hidden">
                        {services.map((_, i) => (
                            <div key={i} className={`h-1 rounded-full transition-all duration-500 ${activeSlide === i ? "w-6 bg-primary" : "w-1.5 bg-border/40"}`} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;
