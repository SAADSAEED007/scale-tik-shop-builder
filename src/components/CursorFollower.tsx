"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A premium, smooth circular cursor follower.
 * Features:
 * - 1:1 accurate tracking for the inner dot.
 * - Smooth easing (lag) for the outer circle for a professional SaaS feel.
 * - Zero re-renders during mouse movement (uses refs and requestAnimationFrame).
 * - Perfectly centered using CSS transforms.
 * - Theme-aware styling using CSS variables.
 */
const CursorFollower = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const outerRef = useRef<HTMLDivElement>(null);

    // High-precision tracking values
    const mousePos = useRef({ x: -100, y: -100 });
    const outerPos = useRef({ x: -100, y: -100 });

    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        let rafId: number;

        const updatePosition = () => {
            // 1. Precise Inner Dot: stays exactly at the mouse pointer with zero lag
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate3d(-50%, -50%, 0)`;
            }

            // 2. Smooth Outer Circle: eased movement for a premium feel
            const dx = mousePos.current.x - outerPos.current.x;
            const dy = mousePos.current.y - outerPos.current.y;

            // professional easing factor (higher = faster, lower = smoother)
            outerPos.current.x += dx * 0.15;
            outerPos.current.y += dy * 0.15;

            if (outerRef.current) {
                outerRef.current.style.transform = `translate3d(${outerPos.current.x}px, ${outerPos.current.y}px, 0) translate3d(-50%, -50%, 0)`;
            }

            rafId = requestAnimationFrame(updatePosition);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        rafId = requestAnimationFrame(updatePosition);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            cancelAnimationFrame(rafId);
        };
    }, [isVisible]);

    if (!mounted) return null;

    return (
        <div
            className={`pointer-events-none fixed inset-0 z-[9999] hidden lg:block transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            {/* Outer Circle - Subtle border following with lag */}
            <div
                ref={outerRef}
                className="fixed left-0 top-0 h-10 w-10 rounded-full border border-foreground/30 bg-transparent will-change-transform"
                style={{ transform: "translate3d(-100px, -100px, 0)" }}
            />

            {/* Inner Dot - Precise 1:1 pointer */}
            <div
                ref={dotRef}
                className="fixed left-0 top-0 h-1 w-1 rounded-full bg-foreground will-change-transform"
                style={{ transform: "translate3d(-100px, -100px, 0)" }}
            />
        </div>
    );
};

export default CursorFollower;
