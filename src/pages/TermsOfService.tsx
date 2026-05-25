import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";

const TermsOfService = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 grid-net">
            {/* Hero Section */}
            <section className="relative pt-16 pb-12 overflow-hidden grid-net">
                <div className="container max-w-[1240px] mx-auto px-4 md:px-6">
                    <FadeIn>
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-none">
                                <TapeLabel className="inline-block px-4 py-1">Terms of Service</TapeLabel>
                            </h1>
                            <div className="flex flex-col items-center gap-1 text-center">
                                <span className="text-sm font-bold text-neutral-900 tracking-widest uppercase">
                                    TIKSHOP SCALE
                                </span>
                                <a 
                                    href="https://www.tikshopscale.com" 
                                    className="text-base text-muted-foreground hover:text-neutral-900 font-medium transition-colors mb-4"
                                >
                                    www.tikshopscale.com
                                </a>
                                <span className="text-xs sm:text-sm font-bold text-neutral-900 tracking-widest uppercase bg-neutral-100 px-4 py-1.5 rounded-full border border-neutral-200">
                                    Effective Date: May 12, 2024
                                </span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative grid-net">
                <div className="container max-w-4xl mx-auto px-4 md:px-6">
                    <FadeIn delay={0.1}>
                        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-border/50 p-8 md:p-16 shadow-sm space-y-12">
                            
                            {/* IMPORTANT DISCLAIMER */}
                            <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/30 rounded-2xl p-6 text-amber-800 dark:text-amber-200/90 text-sm font-medium leading-relaxed shadow-sm">
                                <span className="font-extrabold tracking-wider uppercase mr-2 text-amber-900 dark:text-amber-100">
                                    IMPORTANT DISCLAIMER:
                                </span>
                                TikShop Scale is an independent consulting agency. We are <span className="font-bold text-amber-900 dark:text-amber-100">NOT</span> affiliated with, endorsed by, sponsored by, or officially connected to TikTok, TikTok Shop, ByteDance, or any of their subsidiaries or related entities. All third-party brand names, trademarks, and logos referenced on this website belong to their respective owners.
                            </div>

                            <div className="space-y-12">
                                {/* 1. Acceptance of Terms */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">1. Acceptance of Terms</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        By accessing or using the website <a href="https://www.tikshopscale.com" className="text-neutral-900 font-semibold underline hover:opacity-80 transition-opacity">www.tikshopscale.com</a>, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.
                                    </p>
                                </section>

                                {/* 2. About TikShop Scale */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">2. About TikShop Scale</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        TikShop Scale is an independent digital marketing and consulting agency. We provide services to brands and sellers who wish to grow their business using TikTok Shop and related platforms. We are a third-party service provider and are <span className="font-semibold text-neutral-800">NOT</span> an official partner, representative, reseller, or affiliate of TikTok, TikTok Shop, or ByteDance.
                                    </p>
                                </section>

                                {/* 3. No Affiliation with TikTok */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">3. No Affiliation with TikTok</h2>
                                    <div className="text-neutral-500 leading-relaxed font-semibold italic text-neutral-800 text-base md:text-[17px] border-l-4 border-neutral-300 pl-4 py-2 bg-neutral-50/50 rounded-r-xl pr-2">
                                        &ldquo;TikShop Scale is a completely independent entity. Our name reflects the nature of our work helping brands scale on TikTok Shop and is not intended to imply any official relationship with TikTok or ByteDance. We do not represent, speak for, or act on behalf of TikTok in any capacity.&rdquo;
                                    </div>
                                </section>

                                {/* 4. Services */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">4. Services</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        Our services include but are not limited to: TikTok Shop account management, content strategy, creator outreach, product listing optimization, advertising management, and general e-commerce consulting. Services are provided under separate client agreements and are subject to those agreement terms.
                                    </p>
                                </section>

                                {/* 5. Intellectual Property */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">5. Intellectual Property</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        All original content on this website, including text, graphics, and branding, is the intellectual property of TikShop Scale. You may not reproduce, distribute, or use our content without prior written permission.
                                    </p>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        Any third-party trademarks referenced on this site (including &ldquo;TikTok&rdquo; and &ldquo;TikTok Shop&rdquo;) are the property of their respective owners. Their mention is solely for descriptive purposes to explain the platforms we work with and does not imply endorsement or affiliation.
                                    </p>
                                </section>

                                {/* 6. Disclaimer of Warranties */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">6. Disclaimer of Warranties</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        This website and all content provided on it are offered on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. TikShop Scale makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, or suitability of the content.
                                    </p>
                                </section>

                                {/* 7. Limitation of Liability */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">7. Limitation of Liability</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        To the fullest extent permitted by applicable law, TikShop Scale shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services.
                                    </p>
                                </section>

                                {/* 8. Governing Law */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">8. Governing Law</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which TikShop Scale operates, without regard to conflict of law principles.
                                    </p>
                                </section>

                                {/* 9. Changes to Terms */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">9. Changes to Terms</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        We reserve the right to update or modify these Terms of Service at any time. Any changes will be reflected on this page with an updated effective date.
                                    </p>
                                </section>

                                {/* Contact Us */}
                                <section className="pt-8 border-t border-neutral-200">
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">Contact Us</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        If you have any questions about this Privacy Policy or our Terms of Service, please contact us at:
                                    </p>
                                    <div className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        <p className="font-bold text-neutral-900 mb-1">TikShop Scale</p>
                                        <p className="mb-2">
                                            <a href="https://www.tikshopscale.com" className="text-neutral-900 font-semibold underline hover:opacity-80 transition-opacity">www.tikshopscale.com</a>
                                        </p>
                                        <p>Email: <a href="mailto:info@tikshopscale.com" className="text-neutral-900 font-semibold underline hover:opacity-80 transition-opacity">info@tikshopscale.com</a></p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
