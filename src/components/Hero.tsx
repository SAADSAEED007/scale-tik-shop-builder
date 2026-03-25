import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";
import mobilePhone from "@/assets/mobile.webp";
import mobilePhone420 from "@/assets/mobile-420.webp";

const Hero = () => {
    return (
        <section className="relative pt-[100px] md:pt-[110px] pb-[40px] md:pb-[50px] overflow-hidden grid-net">
            <div className="container max-w-[1240px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

                    {/* Left Side Content */}
                    <div className="flex flex-col text-center lg:text-left items-center lg:items-start min-h-[350px]">
                        <FadeIn>
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-lg md:text-[22px] font-semibold tracking-tight text-[var(--site-text)] mb-4 transition-colors">Scale Your</span>

                                <div className="mb-6 w-fit">
                                    <h1 className="text-[2rem] sm:text-5xl md:text-[88px] font-black tracking-tighter leading-[0.95] text-[var(--site-text)] flex flex-wrap items-center justify-center lg:justify-start transition-colors">
                                        <TapeLabel className="inline-block px-4 py-1 rotate-[-2deg] origin-left bg-[var(--site-accent-bg)] shadow-sm transform hover:rotate-0 transition-transform duration-500 transition-colors">
                                            TikTok Shop
                                        </TapeLabel>
                                    </h1>
                                </div>

                                <h2 className="text-lg sm:text-3xl md:text-[44px] font-bold tracking-tight leading-[1.15] mb-2 md:mb-6 text-[var(--site-text)] max-w-[540px] transition-colors">
                                    With Creators + Performance Ads That Actually Convert
                                </h2>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="-mt-1 md:mt-2 space-y-1 max-w-[520px]">
                                <p className="text-lg md:text-[19px] font-medium text-[var(--muted-text)] leading-snug transition-colors">
                                    We build full-stack TikTok Shop growth systems.
                                </p>
                                <p className="text-lg md:text-[19px] font-medium text-[var(--muted-text)]/80 leading-snug transition-colors">
                                    UGC. Affiliates. Paid media. Live selling.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="mt-5 md:mt-10 flex flex-col items-center lg:items-start gap-5 md:gap-8 hero-buttons w-full">
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-2 sm:px-0">
                                <a href="https://calendly.com/tikshopscale/30mincall" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    <Button
                                        className="w-full bg-[linear-gradient(135deg,#6a0dad,#c0392b,#1a6fe8)] text-white hover:bg-[linear-gradient(135deg,#7b1ebf,#d14a3c,#2b80f9)] rounded-[14px] px-6 md:px-[32px] py-4 md:py-[18px] h-14 md:h-[64px] text-base md:text-lg font-bold transition-all shadow-xl hover:shadow-[#6a0dad]/20 group"
                                    >
                                        Book Free Growth Audit <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </a>
                                <Link to="/case-studies" className="w-full sm:w-auto">
                                    <Button
                                        variant="outline"
                                        className="w-full bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--site-text)] hover:bg-[var(--site-accent-bg)] rounded-[14px] px-6 md:px-[32px] py-4 md:py-[18px] h-14 md:h-[64px] text-base md:text-lg font-bold transition-all border-[1.5px]"
                                    >
                                        View Case Studies
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Visual */}
                    <div className="relative flex items-center justify-center lg:justify-end py-8 md:py-12 lg:py-0 lg:pr-32">
                        <div className="relative w-full max-w-[450px] lg:max-w-none flex items-center justify-center lg:justify-end">
                            {/* Animated background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none -z-1 opacity-40 bg-[radial-gradient(circle,_rgba(0,0,0,0.04)_0%,_transparent_70%)]" />

                            <div className="relative flex items-center justify-center">
                                {/* Service Pills - Floating Left */}
                                <div className="flex flex-col gap-6 md:gap-20 absolute -left-4 sm:-left-8 md:-left-[100px] z-30 pointer-events-none scale-[0.55] sm:scale-[0.6] md:scale-100 origin-right md:origin-center">
                                    <div className="bg-[var(--card-bg)]/95 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-[var(--card-border)] shadow-sm text-[12px] md:text-[15px] font-bold text-[var(--muted-text)] translate-x-16 animate-float-slow transition-colors">
                                        UGC Engine
                                    </div>
                                    <div className="bg-[var(--card-bg)]/95 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-[var(--card-border)] shadow-sm text-[12px] md:text-[15px] font-bold text-[var(--muted-text)] translate-x-4 animate-float-delayed transition-colors">
                                        Affiliate Seeding
                                    </div>
                                    <div className="bg-[var(--card-bg)]/95 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-[var(--card-border)] shadow-sm text-[12px] md:text-[15px] font-bold text-[var(--muted-text)] translate-x-12 animate-float transition-colors">
                                        Paid Scaling
                                    </div>
                                </div>

                                {/* Main Mobile Asset - Floating Image */}
                                <div className="relative z-20 transform rotate-[-4deg] sm:rotate-[-6deg] w-[240px] sm:w-[320px] md:w-[340px] transition-all flex items-center justify-center">
                                    <img
                                        src={mobilePhone}
                                        srcSet={`${mobilePhone420} 420w, ${mobilePhone} 1024w`}
                                        sizes="(max-width: 768px) 420px, 1024px"
                                        alt="TikTok Shop Growth Mockup"
                                        width="1024"
                                        height="1536"
                                        fetchPriority="high"
                                        loading="eager"
                                        style={{ aspectRatio: "1024 / 1536" }}
                                        className="w-full h-auto block drop-shadow-[0_50px_100px_rgba(0,0,0,0.25)] object-contain"
                                    />
                                </div>

                                {/* Performance Cards - Floating Right */}
                                <div className="absolute -right-8 sm:-right-16 md:-right-40 h-full flex flex-col justify-center gap-12 sm:gap-28 z-30 scale-[0.65] sm:scale-90 md:scale-100">
                                    {/* +132% Revenue Growth */}
                                    <div className="bg-[var(--card-bg)]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[var(--card-border)] shadow-xl min-w-[170px] sm:min-w-[210px] transform hover:scale-105 transition-transform animate-float-delayed -translate-y-4 transition-colors">
                                        <p className="text-emerald-500 font-extrabold text-2xl sm:text-3xl mb-1">+132%</p>
                                        <p className="text-xs sm:text-sm font-bold text-[var(--site-text)] leading-tight transition-colors">Revenue Growth</p>
                                        <p className="text-[10px] font-semibold text-[var(--muted-text)] mt-1 uppercase tracking-wider transition-colors">Last 30 Days</p>
                                    </div>

                                    {/* CPA / ROAS Card */}
                                    <div className="bg-[var(--card-bg)]/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[var(--card-border)] shadow-xl min-w-[170px] sm:min-w-[210px] transform lg:translate-x-8 hover:scale-105 transition-transform animate-float translate-y-4 transition-colors">
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="text-[var(--site-text)] font-black text-xl sm:text-2xl transition-colors">CPA</p>
                                            <span className="text-emerald-500 font-bold flex items-center text-lg sm:text-xl transition-colors">↓ 38%</span>
                                        </div>
                                        <p className="text-[var(--site-text)] font-black text-xl sm:text-2xl uppercase tracking-tighter leading-none transition-colors">ROAS 3.8x</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Hero;
