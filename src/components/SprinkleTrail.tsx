import React, { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    alpha: number;
    decay: number;
    vx: number;
    vy: number;
}

const SprinkleTrail = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let resizeTimer: NodeJS.Timeout;
        const resizeCanvas = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (canvas) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }, 300);
        };

        window.addEventListener('resize', resizeCanvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const createParticle = (x: number, y: number) => {
            // Create 1-2 particles per move event for subtlety
            const count = Math.floor(Math.random() * 2) + 1;
            for (let i = 0; i < count; i++) {
                particlesRef.current.push({
                    x: x + (Math.random() - 0.5) * 10,
                    y: y + (Math.random() - 0.5) * 10,
                    size: Math.random() * 1.5 + 1, // Slightly smaller
                    alpha: Math.random() * 0.2 + 0.6, // 0.6 to 0.8
                    decay: Math.random() * 0.005 + 0.012, // Smooth fade out (~0.7s)
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            createParticle(e.clientX, e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = particlesRef.current.length - 1; i >= 0; i--) {
                const p = particlesRef.current[i];
                p.alpha -= p.decay;
                p.x += p.vx;
                p.y += p.vy;

                if (p.alpha <= 0) {
                    particlesRef.current.splice(i, 1);
                    continue;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(214, 195, 163, ${p.alpha})`; // #D6C3A3
                ctx.fill();
            }

            requestAnimationFrame(animate);
        };

        const aniId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(aniId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9998] hidden lg:block"
        />
    );
};

export default SprinkleTrail;
