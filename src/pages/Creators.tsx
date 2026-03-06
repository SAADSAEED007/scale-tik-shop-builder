import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";
import ServiceTicker from "@/components/ServiceTicker";

const Creators = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            const successMsg = document.getElementById("success-message");
            if (successMsg) {
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    };

    return (
        <div className="bg-[#F7F7F5] text-[#0D0D0D] font-manrope">
            <style>
                {`
                @keyframes pulse-opacity {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-pulse-opacity {
                    animation: pulse-opacity 2s ease-in-out infinite;
                }
                .hero-glow::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 140%;
                    height: 100%;
                    pointer-events: none;
                    background: radial-gradient(ellipse 90% 70% at 50% 0%, rgba(212,180,131,0.1) 0%, transparent 70%);
                    z-index: 0;
                }
                `}
            </style>

            {/* 2 — HERO SECTION */}
            <section className="relative min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center pt-[160px] pb-[72px] px-8 text-center overflow-hidden">
                {/* Subtle radial beige glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F5EDE3_0%,_transparent_70%)] opacity-40 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <FadeIn>
                        <div className="inline-block px-5 py-2.5 rounded-full bg-black/5 backdrop-blur-md border border-neutral-200/50 mb-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                            <span className="font-heading text-[12px] md:text-[14px] font-black tracking-[0.1em] text-black uppercase block">
                                Now Accepting <TapeLabel className="inline-block px-2 py-0.5 bg-[#F5EDE3] shadow-sm text-black rounded-sm mx-1">Creator Applications</TapeLabel>
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tighter leading-[1.1] text-neutral-900 mb-8 max-w-4xl mx-auto">
                            Scale Brands. <br className="hidden md:block" />
                            <TapeLabel className="inline-block px-4 py-1 rotate-[-2deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black">
                                Earn More.
                            </TapeLabel> <br className="hidden md:block" />
                            <span className="text-black font-black text-[clamp(24px,4vw,48px)]">Join the TikShopScale Creator Network.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-500 font-medium max-w-xl mx-auto leading-relaxed mb-10">
                            We partner TikTok creators with fast-growing brands. Get paid through <span className="text-neutral-900 font-bold">performance-based retainers, commissions, exclusive product access,</span> and <span className="text-neutral-900 font-bold">long-term creator partnerships.</span>
                        </p>

                        <div className="w-full max-w-[600px] bg-[rgba(0,0,0,0.03)] border border-[#E5E5E2] rounded-[16px] p-[4px] mb-[44px] flex flex-col md:flex-row shadow-sm mx-auto">
                            <div className="flex-1 py-[18px] px-5 flex flex-col items-center">
                                <span className="font-syne font-[800] text-[26px] text-[#D4B483]">890+</span>
                                <span className="text-[11.5px] text-[#9A9A9A] font-[600] uppercase">Brand Partners</span>
                            </div>
                            <div className="hidden md:block w-[1px] bg-[#E5E5E2] my-4" />
                            <div className="md:hidden h-[1px] bg-[#E5E5E2] mx-8" />
                            <div className="flex-1 py-[18px] px-5 flex flex-col items-center">
                                <span className="font-syne font-[800] text-[26px] text-[#D4B483]">$2.4M+</span>
                                <span className="text-[11.5px] text-[#9A9A9A] font-[600] uppercase">GMV Generated</span>
                            </div>
                            <div className="hidden md:block w-[1px] bg-[#E5E5E2] my-4" />
                            <div className="md:hidden h-[1px] bg-[#E5E5E2] mx-8" />
                            <div className="flex-1 py-[18px] px-5 flex flex-col items-center">
                                <span className="font-syne font-[800] text-[26px] text-[#D4B483]">10+</span>
                                <span className="text-[11.5px] text-[#9A9A9A] font-[600] uppercase">Niches We Work In</span>
                            </div>
                        </div>

                        <a
                            href="#apply"
                            className="inline-flex items-center justify-center bg-[#0D0D0D] hover:bg-[#2E2E2E] text-white font-manrope font-[800] text-[15px] px-[36px] py-[15px] h-auto rounded-[10px] shadow-[0_4px_28px_rgba(0,0,0,0.2)] hover:-translate-y-[2px] transition-all duration-300"
                        >
                            Apply to Join the Network →
                        </a>
                    </FadeIn>
                </div>
            </section>

            {/* 3 — TICKER */}
            <ServiceTicker
                items={[
                    "FREE PRODUCTS",
                    "PERFORMANCE RETAINERS",
                    "COMMISSION PER SALE",
                    "LONG-TERM PARTNERSHIPS",
                    "BEAUTY · HEALTH · FASHION · HOME",
                    "NO MINIMUM FOLLOWERS"
                ]}
            />

            {/* 4 — WHAT YOU GET SECTION */}
            <section className="bg-[#FFFFFF] border-t border-[#E5E5E2] py-[88px] px-10">
                <div className="max-w-[1020px] mx-auto text-center md:text-left">
                    <span className="text-[#0D0D0D] font-syne font-[700] text-[11px] letter-spacing-[3px] tracking-[3px] uppercase block mb-[12px]">FOR CREATORS</span>
                    <h2 className="font-syne font-[800] text-[clamp(28px,4vw,48px)] text-[#0D0D0D] leading-[1.08] mb-[48px]">What you get when you join.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-[14px] mt-16">
                        {/* Card 1 */}
                        <div className="group relative bg-[#FFFFFF] border border-[#E5E5E2] rounded-[18px] p-[30px_24px] overflow-hidden transition-all hover:border-[#D4B483]/40 hover:-translate-y-[4px]">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5EDE3]" />
                            <div className="text-[28px] mb-[14px]">📦</div>
                            <h3 className="font-syne font-[800] text-[15px] text-[#0D0D0D] leading-[1.3] mb-[8px]">Free Products Shipped to You</h3>
                            <p className="text-[13px] text-[#5C5C5C] leading-[1.65]">Every partnership starts with the brand sending you their product — no cost to you.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative bg-[#FFFFFF] border border-[#E5E5E2] rounded-[18px] p-[30px_24px] overflow-hidden transition-all hover:border-[#D4B483]/40 hover:-translate-y-[4px]">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5EDE3]" />
                            <div className="text-[28px] mb-[14px]">💼</div>
                            <h3 className="font-syne font-[800] text-[15px] text-[#0D0D0D] leading-[1.3] mb-[8px]">Performance-Based Retainers</h3>
                            <p className="text-[13px] text-[#5C5C5C] leading-[1.65]">Top creators unlock monthly retainers on top of commission — guaranteed recurring income.</p>
                        </div>

                        {/* Card 3 (BEIGE) */}
                        <div className="group relative bg-[#F5EDE3] rounded-[18px] p-[30px_24px] overflow-hidden transition-all hover:-translate-y-[4px]">
                            <div className="text-[28px] mb-[14px]">💰</div>
                            <h3 className="font-syne font-[800] text-[15px] text-[#0D0D0D] leading-[1.3] mb-[8px]">Commission on Every Sale</h3>
                            <p className="text-[13px] text-[#5C5C5C] leading-[1.65]">Every purchase from your content puts money directly in your pocket. Compounds every month.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative bg-[#FFFFFF] border border-[#E5E5E2] rounded-[18px] p-[30px_24px] overflow-hidden transition-all hover:border-[#D4B483]/40 hover:-translate-y-[4px]">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5EDE3]" />
                            <div className="text-[28px] mb-[14px]">🤝</div>
                            <h3 className="font-syne font-[800] text-[15px] text-[#0D0D0D] leading-[1.3] mb-[8px]">Ongoing Brand Partnerships</h3>
                            <p className="text-[13px] text-[#5C5C5C] leading-[1.65]">Not a one-off post. We build long-term relationships between creators and brands that last.</p>
                        </div>

                        {/* Card 5 */}
                        <div className="group relative bg-[#FFFFFF] border border-[#E5E5E2] rounded-[18px] p-[30px_24px] overflow-hidden transition-all hover:border-[#D4B483]/40 hover:-translate-y-[4px]">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5EDE3]" />
                            <div className="text-[28px] mb-[14px]">🧠</div>
                            <h3 className="font-syne font-[800] text-[15px] text-[#0D0D0D] leading-[1.3] mb-[8px]">Support on What Actually Converts</h3>
                            <p className="text-[13px] text-[#5C5C5C] leading-[1.65]">We brief every creator on hooks, angles, and formats that drive sales — not just views.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5 — APPLICATION FORM SECTION */}
            <section id="apply" className="bg-[#F7F7F5] border-t border-[#E5E5E2] py-[88px] px-10">
                <div className="max-w-[700px] mx-auto text-center">
                    <div className="mb-[48px]">
                        <span className="text-[#0D0D0D] font-syne font-[700] text-[11px] letter-spacing-[3px] tracking-[3px] uppercase block mb-[12px]">CREATOR APPLICATION</span>
                        <h2 className="font-syne font-[800] text-[clamp(28px,4vw,46px)] text-[#0D0D0D] leading-[1.08] mb-[12px]">Ready to <TapeLabel className="inline-block px-3 py-1 bg-[#F5EDE3] text-black shadow-sm transform rotate-[-1deg] origin-left mt-1 hover:rotate-0 transition-transform duration-500">get started?</TapeLabel></h2>
                        <p className="text-[#5C5C5C] text-[15px] leading-[1.65] max-w-[500px] mx-auto">Fill out the form below. We review every application personally and get back to you within 48 hours.</p>
                    </div>

                    <div className="bg-[#0D0D0D] border border-white/10 rounded-[22px] p-8 md:p-[48px_44px] shadow-2xl text-left relative overflow-hidden group">
                        {/* Subtle radial beige glow inside */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F5EDE308_0%,_transparent_70%)] opacity-50 pointer-events-none" />

                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-9 relative z-10">
                                {/* SECTION: YOUR INFO */}
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-[1px] flex-1 bg-white/10"></div>
                                        <span className="text-[11px] uppercase letter-spacing-[2px] tracking-[2px] text-white/40 whitespace-nowrap font-bold">Your Info</span>
                                        <div className="h-[1px] flex-1 bg-white/10"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[12.5px] text-white/70 font-[700] tracking-[0.5px]">Full Name <span className="text-[#D4B483]">*</span></label>
                                            <input required type="text" placeholder="Your full name" className="bg-white/5 border-[1.5px] border-white/10 rounded-[10px] p-[13px_16px] text-[14.5px] text-white outline-none transition-all placeholder:text-white/20 focus:border-[#D4B483] focus:bg-white/10" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[12.5px] text-white/70 font-[700] tracking-[0.5px]">Email Address <span className="text-[#D4B483]">*</span></label>
                                            <input required type="email" placeholder="your@email.com" className="bg-white/5 border-[1.5px] border-white/10 rounded-[10px] p-[13px_16px] text-[14.5px] text-white outline-none transition-all placeholder:text-white/20 focus:border-[#D4B483] focus:bg-white/10" />
                                        </div>
                                    </div>
                                </div>

                                {/* SECTION: YOUR TIKTOK */}
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-[1px] flex-1 bg-white/10"></div>
                                        <span className="text-[11px] uppercase letter-spacing-[2px] tracking-[2px] text-white/40 whitespace-nowrap font-bold">Your TikTok</span>
                                        <div className="h-[1px] flex-1 bg-white/10"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] mb-[16px]">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[12.5px] text-white/70 font-[700] tracking-[0.5px]">TikTok Handle <span className="text-[#D4B483]">*</span></label>
                                            <input required type="text" placeholder="@yourhandle" className="bg-white/5 border-[1.5px] border-white/10 rounded-[10px] p-[13px_16px] text-[14.5px] text-white outline-none transition-all placeholder:text-white/20 focus:border-[#D4B483] focus:bg-white/10" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[12.5px] text-white/70 font-[700] tracking-[0.5px]">Your Niche / Category <span className="text-[#D4B483]">*</span></label>
                                            <select required className="bg-white/5 border-[1.5px] border-white/10 rounded-[10px] p-[13px_16px] text-[14.5px] text-white outline-none transition-all focus:border-[#D4B483] focus:bg-white/10 cursor-pointer appearance-none">
                                                <option value="" className="bg-[#0D0D0D]">Select Category</option>
                                                <option className="bg-[#0D0D0D]">Beauty & Skincare</option>
                                                <option className="bg-[#0D0D0D]">Health & Wellness</option>
                                                <option className="bg-[#0D0D0D]">Fashion & Style</option>
                                                <option className="bg-[#0D0D0D]">Home & Lifestyle</option>
                                                <option className="bg-[#0D0D0D]">Food & Drink</option>
                                                <option className="bg-[#0D0D0D]">Fitness</option>
                                                <option className="bg-[#0D0D0D]">Tech & Gadgets</option>
                                                <option className="bg-[#0D0D0D]">Baby & Family</option>
                                                <option className="bg-[#0D0D0D]">Pets</option>
                                                <option className="bg-[#0D0D0D]">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[12.5px] text-white/70 font-[700] tracking-[0.5px]">Approximate Monthly Views <span className="text-[#D4B483]">*</span></label>
                                        <select required className="bg-white/5 border-[1.5px] border-white/10 rounded-[10px] p-[13px_16px] text-[14.5px] text-white outline-none transition-all focus:border-[#D4B483] focus:bg-white/10 cursor-pointer appearance-none">
                                            <option value="" className="bg-[#0D0D0D]">Select Views</option>
                                            <option className="bg-[#0D0D0D]">Under 10K views/month</option>
                                            <option className="bg-[#0D0D0D]">10K – 50K views/month</option>
                                            <option className="bg-[#0D0D0D]">50K – 200K views/month</option>
                                            <option className="bg-[#0D0D0D]">200K – 500K views/month</option>
                                            <option className="bg-[#0D0D0D]">500K – 1M views/month</option>
                                            <option className="bg-[#0D0D0D]">1M+ views/month</option>
                                        </select>
                                    </div>
                                </div>

                                {/* SECTION: YOUR SALES PERFORMANCE */}
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-[1px] flex-1 bg-white/10"></div>
                                        <span className="text-[11px] uppercase letter-spacing-[2px] tracking-[2px] text-white/40 whitespace-nowrap font-bold">Your Performance</span>
                                        <div className="h-[1px] flex-1 bg-white/10"></div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[12.5px] text-white/70 font-[700] tracking-[0.5px]">Average Monthly GMV Generated</label>
                                            <select className="bg-white/5 border-[1.5px] border-white/10 rounded-[10px] p-[13px_16px] text-[14.5px] text-white outline-none transition-all focus:border-[#D4B483] focus:bg-white/10 cursor-pointer appearance-none">
                                                <option className="bg-[#0D0D0D]">I haven't sold yet</option>
                                                <option className="bg-[#0D0D0D]">Under $1,000/mo</option>
                                                <option className="bg-[#0D0D0D]">$1,000 – $5,000/mo</option>
                                                <option className="bg-[#0D0D0D]">$5,000 – $20,000/mo</option>
                                                <option className="bg-[#0D0D0D]">$20,000 – $50,000/mo</option>
                                                <option className="bg-[#0D0D0D]">$50,000+/mo</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[12.5px] text-white/70 font-[700] tracking-[0.5px]">Total GMV Generated (Lifetime)</label>
                                            <select className="bg-white/5 border-[1.5px] border-white/10 rounded-[10px] p-[13px_16px] text-[14.5px] text-white outline-none transition-all focus:border-[#D4B483] focus:bg-white/10 cursor-pointer appearance-none">
                                                <option className="bg-[#0D0D0D]">Just starting out</option>
                                                <option className="bg-[#0D0D0D]">Under $5,000</option>
                                                <option className="bg-[#0D0D0D]">$5,000 – $25,000</option>
                                                <option className="bg-[#0D0D0D]">$25,000 – $100,000</option>
                                                <option className="bg-[#0D0D0D]">$100,000 – $500,000</option>
                                                <option className="bg-[#0D0D0D]">$500,000+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[14px] mt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#F5EDE3] hover:bg-white text-[#0D0D0D] border-none rounded-[12px] p-[17px] font-manrope font-[800] text-[16px] shadow-xl hover:-translate-y-[2px] transition-all duration-300"
                                    >
                                        Apply to Join the Creator Network →
                                    </button>
                                    <p className="flex items-center justify-center gap-2 text-[12.5px] text-white/30">
                                        🔒 We review every application personally and respond within 48 hours.
                                    </p>
                                </div>
                            </form>
                        ) : (
                            <div id="success-message" className="text-center py-16 flex flex-col items-center animate-fade-in-up relative z-10">
                                <div className="text-[56px] mb-8">✅</div>
                                <h3 className="font-syne font-[800] text-[26px] text-[#D4B483] mb-4">Application Received!</h3>
                                <p className="text-white/60 text-[15px] leading-[1.65]">We review every application personally. You'll hear back from us within 48 hours. Keep creating — we'll be in touch.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Creators;
