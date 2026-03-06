import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";
import mobilePhone from "@/assets/mobile.png";

const Hero = () => {
    return (
        <section className="relative pt-[145px] pb-[30px] md:pb-[50px] overflow-hidden">
            <div className="container max-w-[1240px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

                    {/* Left Side Content */}
                    <div className="flex flex-col text-left">
                        <FadeIn>
                            <div className="flex flex-col">
                                <span className="text-xl md:text-[22px] font-semibold tracking-tight text-neutral-800 mb-4">Scale Your</span>

                                <div className="mb-6 w-fit">
                                    <h1 className="text-5xl sm:text-6xl md:text-[88px] font-black tracking-tighter leading-[0.95] text-neutral-900 flex flex-wrap items-center">
                                        <TapeLabel className="inline-block px-4 py-1 rotate-[-2deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500">
                                            TikTok Shop
                                        </TapeLabel>
                                    </h1>
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold tracking-tight leading-[1.15] mb-6 text-neutral-900 max-w-[540px]">
                                    With Creators + Performance Ads That Actually Convert
                                </h2>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="mt-2 space-y-1 max-w-[520px]">
                                <p className="text-lg md:text-[19px] font-medium text-neutral-600 leading-snug">
                                    We build full-stack TikTok Shop growth systems.
                                </p>
                                <p className="text-lg md:text-[19px] font-medium text-neutral-500/80 leading-snug">
                                    UGC. Affiliates. Paid media. Live selling.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="mt-10 flex flex-col items-start gap-8 hero-buttons">
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Link to="/contact" className="w-full sm:w-auto">
                                    <Button
                                        className="w-full bg-black text-white hover:bg-black/90 rounded-[14px] px-[32px] py-[18px] h-[64px] text-lg font-bold transition-all shadow-xl hover:shadow-black/20 group"
                                    >
                                        Book Free Growth Audit <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                                <Link to="/case-studies" className="w-full sm:w-auto">
                                    <Button
                                        variant="outline"
                                        className="w-full bg-white border-neutral-200 text-neutral-900 hover:bg-neutral-50 rounded-[14px] px-[32px] py-[18px] h-[64px] text-lg font-bold transition-all border-[1.5px]"
                                    >
                                        View Case Studies
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Visual */}
                    <div className="relative flex items-center justify-center lg:justify-end py-12 lg:py-0 lg:pr-32">
                        <FadeIn delay={0.2} className="relative w-full max-w-[450px] lg:max-w-none flex items-center justify-center lg:justify-end">
                            {/* Animated background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] pointer-events-none -z-1 opacity-40 bg-[radial-gradient(circle,_rgba(0,0,0,0.04)_0%,_transparent_70%)]" />

                            <div className="relative flex items-center justify-center">
                                {/* Service Pills - Floating Left */}
                                <div className="flex flex-col gap-8 md:gap-20 absolute -left-8 md:-left-[100px] z-30 pointer-events-none scale-[0.6] md:scale-100 origin-right md:origin-center">
                                    <div className="bg-white/95 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-neutral-100 shadow-sm text-[12px] md:text-[15px] font-bold text-neutral-500 translate-x-16 animate-float-slow">
                                        UGC Engine
                                    </div>
                                    <div className="bg-white/95 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-neutral-100 shadow-sm text-[12px] md:text-[15px] font-bold text-neutral-500 translate-x-4 animate-float-delayed">
                                        Affiliate Seeding
                                    </div>
                                    <div className="bg-white/95 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-neutral-100 shadow-sm text-[12px] md:text-[15px] font-bold text-neutral-500 translate-x-12 animate-float">
                                        Paid Scaling
                                    </div>
                                </div>

                                {/* Main Mobile Asset - Floating Image */}
                                <div className="relative z-20 transform rotate-[-4deg] sm:rotate-[-6deg] w-[280px] sm:w-[320px] md:w-[340px] transition-all flex items-center justify-center">
                                    <img
                                        src={mobilePhone}
                                        alt="TikTok Shop Growth Mockup"
                                        className="w-full h-auto block drop-shadow-[0_50px_100px_rgba(0,0,0,0.25)] object-contain"
                                    />
                                </div>

                                {/* Performance Cards - Floating Right */}
                                <div className="absolute -right-12 sm:-right-16 md:-right-40 h-full flex flex-col justify-center gap-16 sm:gap-28 z-30 scale-75 sm:scale-90 md:scale-100">
                                    {/* +132% Revenue Growth */}
                                    <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/50 shadow-xl min-w-[170px] sm:min-w-[210px] transform hover:scale-105 transition-transform animate-float-delayed -translate-y-4">
                                        <p className="text-emerald-500 font-extrabold text-2xl sm:text-3xl mb-1">+132%</p>
                                        <p className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">Revenue Growth</p>
                                        <p className="text-[10px] font-semibold text-neutral-400 mt-1 uppercase tracking-wider">Last 30 Days</p>
                                    </div>

                                    {/* CPA / ROAS Card */}
                                    <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/50 shadow-xl min-w-[170px] sm:min-w-[210px] transform lg:translate-x-8 hover:scale-105 transition-transform animate-float translate-y-4">
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="text-neutral-900 font-black text-xl sm:text-2xl">CPA</p>
                                            <span className="text-emerald-500 font-bold flex items-center text-lg sm:text-xl">↓ 38%</span>
                                        </div>
                                        <p className="text-neutral-900 font-black text-xl sm:text-2xl uppercase tracking-tighter leading-none">ROAS 3.8x</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Hero;
