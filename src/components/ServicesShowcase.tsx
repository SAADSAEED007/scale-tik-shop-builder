import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Users, Play, Target, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
    { title: "TikTok Shop Setup + Optimization", desc: "Full store build, product listings, and conversion-optimized pages. We ensure your shop is set up for success from day one.", icon: Zap },
    { title: "Creator Seeding + Affiliate Program", desc: "Find, vet, and manage creators who actually drive revenue. Our proprietary vetting process ensures you only partner with creators who deliver ROI.", icon: Users },
    { title: "UGC Production + Creative Direction", desc: "Scroll-stopping content engineered to sell, not just entertain. We handle the entire creative process from brief to final edit.", icon: Play },
    { title: "Spark Ads + Performance Testing", desc: "Data-driven ad campaigns with weekly creative testing cycles. We run experiments to find winning creative.", icon: Target },
    { title: "Live Shopping Strategy", desc: "Live selling playbooks, hosts, and engagement that converts. Leverage the power of real-time interaction to drive massive spikes.", icon: TrendingUp },
    { title: "Shop Ops + Reporting", desc: "Inventory, fulfillment support, and real-time performance dashboards. We handle the operational heavy lifting.", icon: BarChart3 },
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
        // 0.4 vh means we start intercepting BEFORE it's fully centered to catch fast scrolls
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
            className="relative h-screen w-full flex items-center justify-center bg-background overflow-hidden"
        >
            <div className="w-full max-w-5xl relative px-4">

                {/* Main Content Card - Identical design preserved */}
                <div className="relative w-full h-[550px] md:h-[600px] bg-card/70 backdrop-blur-2xl rounded-[3rem] md:rounded-[4rem] border border-border/40 shadow-2xl flex items-center justify-center p-6 md:p-12 overflow-hidden">

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
                    <div className="w-full max-w-2xl px-4 text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSlide}
                                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.02, y: -30 }}
                                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                                className="flex flex-col items-center gap-6 md:gap-10"
                            >
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-[#F5EDE3] flex items-center justify-center text-neutral-900 border border-[#E6D5C3]">
                                    {React.createElement(services[activeSlide].icon, { size: 40, strokeWidth: 1.25 })}
                                </div>

                                <div className="space-y-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30">
                                        Step 0{activeSlide + 1}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none text-foreground">
                                        {services[activeSlide].title}
                                    </h3>
                                    <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto font-medium">
                                        {services[activeSlide].desc}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <Link to="/contact">
                                        <Button variant="hero" size="lg" className="rounded-full px-10 h-14 md:h-16 text-sm md:text-base font-bold shadow-xl active:scale-95 transition-all gap-2">
                                            Get Your Audit
                                            <ArrowRight size={20} />
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="absolute top-8 right-8 md:top-12 md:right-12 text-sm font-black tracking-widest text-primary/10 select-none">
                        0{activeSlide + 1} / 0{services.length}
                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:hidden">
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
