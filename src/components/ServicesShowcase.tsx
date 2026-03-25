import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Users, Play, BarChart3, ArrowRight, Map, Shield, Star, Video, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
    {
        phase: "PHASE 01",
        title: "Foundation",
        emoji: "🧱",
        desc: "Before scaling anything, we build the core TikTok Shop infrastructure so your brand is positioned to convert traffic into revenue.",
        servicesList: [
            { name: "Launch Strategy", emoji: "🚀" },
            { name: "TikTok Shop Setup + Optimization Strategy", emoji: "🛒" },
            { name: "Compliance + Risk Management", emoji: "🛡️" }
        ],
        cta1: "learn more →",
        cta2: "Book a Free Shop Audit"
    },
    {
        phase: "PHASE 02",
        title: "Growth",
        emoji: "📈",
        desc: "Once the foundation is set, we activate creators, affiliates, and content to start generating consistent sales.",
        servicesList: [
            { name: "Creator Seeding + Affiliate Program", emoji: "🌱" },
            { name: "Creator Management + Retention Program", emoji: "🤝" },
            { name: "UGC Production + Creative Direction", emoji: "🎬" }
        ],
        cta1: "learn more →",
        cta2: "Book a Free Creators Audit"
    },
    {
        phase: "PHASE 03",
        title: "Scale",
        emoji: "🚀",
        desc: "After traction begins, we scale aggressively through paid media, LIVE commerce, and operational optimization.",
        servicesList: [
            { name: "Ads + Paid Media Management", emoji: "📊" },
            { name: "LIVE Shopping Strategy + Execution", emoji: "🔴" },
            { name: "Shop Operations + Reporting", emoji: "📈" }
        ],
        cta1: "learn more →",
        cta2: "Book a Free Ad Audit"
    },
    {
        phase: null,
        title: "Not sure where your brand stands?",
        emoji: "🔍",
        desc: "Most brands don’t know if they need foundation, growth, or scale support.",
        subDesc: "We’ll audit your TikTok Shop and show you exactly where the opportunity is.",
        servicesList: [],
        cta1: null,
        cta2: "Book a Free Shop Audit"
    }
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
        let rafId: number | null = null;
        
        const checkPos = () => {
            if (rafId) return;
            rafId = window.requestAnimationFrame(() => {
                rafId = null;
                if (!containerRef.current) return;
                const rect = containerRef.current.getBoundingClientRect();
                const vh = window.innerHeight;

                // Early detection: trigger "active" state as it's nearing center (40-60% range)
                const isInRange = rect.top < vh * 0.45 && rect.bottom > vh * 0.55;
                setIsCentered(isInRange);
            });
        };

        window.addEventListener("scroll", checkPos, { passive: true });
        return () => {
            window.removeEventListener("scroll", checkPos);
            if (rafId) cancelAnimationFrame(rafId);
        };
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

                const mid = rect.top + rect.height / 2;
                const vMid = vh / 2;

                // Lock the body to prevent ANY background movement AFTER reading rects
                document.body.style.overflow = 'hidden';

                // Force section to stay centered while internal scroll happens
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
            className="relative h-screen w-full flex items-center justify-center bg-[var(--site-bg)] overflow-hidden transition-colors"
        >
            <div className="w-full max-w-5xl relative px-4">

                {/* Main Content Card - Optimized for mobile responsiveness */}
                <div className="relative w-full h-[520px] md:h-[600px] bg-[var(--card-bg)]/70 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[4rem] border border-[var(--card-border)] shadow-2xl flex items-center justify-center p-5 md:p-12 overflow-hidden transition-colors">

                    {/* Progress Indicators */}
                    <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 hidden sm:flex z-50">
                        {services.map((s, i) => (
                            <div
                                key={s.title}
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
                                className="flex flex-col items-center gap-4 md:gap-8"
                            >
                                <div className="text-4xl md:text-6xl mb-2">
                                    {services[activeSlide].emoji}
                                </div>

                                <div className="space-y-3 md:space-y-4">
                                    {services[activeSlide].phase && (
                                        <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[var(--muted-text)] transition-colors">
                                            {services[activeSlide].phase}
                                        </span>
                                    )}
                                    <h3 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-[var(--site-text)] transition-colors">
                                        {services[activeSlide].title}
                                    </h3>
                                    <p className="text-xs md:text-lg text-[var(--muted-text)] leading-relaxed max-w-xl mx-auto font-medium px-2 transition-colors">
                                        {services[activeSlide].desc}
                                    </p>
                                    
                                    {services[activeSlide].subDesc && (
                                        <p className="text-xs md:text-lg text-[var(--site-text)] leading-relaxed max-w-xl mx-auto font-bold px-2 transition-colors">
                                            {services[activeSlide].subDesc}
                                        </p>
                                    )}

                                    {services[activeSlide].servicesList.length > 0 && (
                                        <div className="pt-4 space-y-2">
                                            <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[var(--muted-text)] transition-colors">Services included:</p>
                                            <ul className="flex flex-col items-center gap-1">
                                                 {services[activeSlide].servicesList.map((service, idx) => (
                                                     <li key={service.name} className="text-xs md:text-base font-bold text-[var(--muted-text)] flex items-center gap-2 transition-colors">
                                                         <span>{service.emoji}</span>
                                                         {service.name}
                                                     </li>
                                                 ))}
                                             </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-4 flex flex-wrap items-center justify-center gap-4 md:gap-8">
                                    {services[activeSlide].cta1 && (
                                        <Link to="/case-studies">
                                            <button className="text-[12px] md:text-base font-black flex items-center gap-1 hover:gap-2 transition-all group">
                                                {services[activeSlide].cta1}
                                            </button>
                                        </Link>
                                    )}
                                    <a href="https://calendly.com/tikshopscale/30mincall" target="_blank" rel="noopener noreferrer">
                                        <Button variant="hero" size="lg" className="rounded-full px-6 md:px-10 h-10 md:h-14 text-[12px] md:text-base font-black shadow-xl active:scale-95 transition-all gap-2">
                                            {services[activeSlide].cta2}
                                            <ArrowRight size={18} className="md:w-5 md:h-5" />
                                        </Button>
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="absolute top-6 right-6 md:top-12 md:right-12 text-[10px] md:text-sm font-black tracking-widest text-black select-none">
                        0{activeSlide + 1} / 0{services.length}
                    </div>
                </div>

                {/* Mobile indicators - Moved below the card and centered */}
                <div className="mt-8 flex justify-center gap-2 sm:hidden relative z-30">
                    {services.map((s, i) => (
                        <div 
                            key={`mobile-indicator-${i}`} 
                            className={`h-1.5 rounded-full transition-all duration-500 ${activeSlide === i ? "w-10 bg-primary" : "w-2 bg-border/40"}`} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesShowcase;
