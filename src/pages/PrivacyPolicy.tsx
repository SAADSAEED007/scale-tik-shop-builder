import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen pt-24 pb-20 grid-net">
            {/* Hero Section */}
            <section className="relative pt-16 pb-12 overflow-hidden grid-net">
                <div className="container max-w-[1240px] mx-auto px-4 md:px-6">
                    <FadeIn>
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6 leading-none">
                                <TapeLabel className="inline-block px-4 py-1">Privacy Policy</TapeLabel>
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
                                {/* 1. Who We Are */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">1. Who We Are</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        TikShop Scale (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an independent digital marketing and consulting agency. We provide growth, content strategy, and TikTok Shop optimization services to brands and businesses. We operate this website at <a href="https://www.tikshopscale.com" className="text-neutral-900 font-semibold underline hover:opacity-80 transition-opacity">www.tikshopscale.com</a> solely to present our services to potential and current clients.
                                    </p>
                                </section>

                                {/* 2. Information We Collect */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">2. Information We Collect</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        We may collect the following types of information when you visit our website or contact us:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-500 space-y-2.5 font-medium text-base md:text-[17px] pl-2 mb-6">
                                        <li>Name and email address (when you fill out a contact or inquiry form)</li>
                                        <li>Business name and general business information you choose to share</li>
                                        <li>IP address and browser/device information (collected automatically via analytics tools)</li>
                                        <li>Pages visited, time spent on site, and referral sources</li>
                                    </ul>
                                    <div className="bg-neutral-50/70 border border-neutral-200/50 rounded-xl p-4 text-neutral-600 font-medium text-[15px] leading-relaxed">
                                        We do <span className="font-extrabold text-red-600">NOT</span> collect passwords, payment card numbers, government ID numbers, or any sensitive personal data through this website.
                                    </div>
                                </section>

                                {/* 3. How We Use Your Information */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">3. How We Use Your Information</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        We use the information we collect only for the following purposes:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-500 space-y-2.5 font-medium text-base md:text-[17px] pl-2 mb-6">
                                        <li>To respond to your inquiries and provide requested services</li>
                                        <li>To send service related communications (with your consent)</li>
                                        <li>To improve our website and understand how visitors use it</li>
                                        <li>To fulfill our legal and contractual obligations</li>
                                    </ul>
                                    <div className="bg-neutral-50/70 border border-neutral-200/50 rounded-xl p-4 text-neutral-600 font-medium text-[15px] leading-relaxed">
                                        We do <span className="font-extrabold text-red-600">NOT</span> sell, rent, or share your personal information with third parties for advertising or marketing purposes.
                                    </div>
                                </section>

                                {/* 4. Cookies */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">4. Cookies</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. You may disable cookies in your browser settings at any time; however, some parts of the website may not function as intended if you do so.
                                    </p>
                                </section>

                                {/* 5. Third-Party Links */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">5. Third-Party Links</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        Our website may contain links to third-party platforms including TikTok, TikTok Shop, or other external websites. We are not responsible for the privacy practices or content of those websites. Visiting those links is governed by their own privacy policies.
                                    </p>
                                </section>

                                {/* 6. Data Security */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">6. Data Security</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        We take reasonable technical and organizational measures to protect the personal information we collect. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                                    </p>
                                </section>

                                {/* 7. Your Rights */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">7. Your Rights</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        Depending on your location, you may have the right to access, correct, or delete your personal data. To make such a request, please contact us at the email address listed at the end of this document.
                                    </p>
                                </section>

                                {/* 8. Children's Privacy */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">8. Children's Privacy</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        Our website and services are intended for business clients and are not directed at children under the age of 18. We do not knowingly collect personal information from children.
                                    </p>
                                </section>

                                {/* 9. Changes to This Policy */}
                                <section>
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">9. Changes to This Policy</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the updated policy.
                                    </p>
                                </section>

                                {/* Contact Information */}
                                <section className="pt-8 border-t border-neutral-200">
                                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-neutral-900 mb-4 uppercase">Contact Information</h2>
                                    <div className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        <p className="font-bold text-neutral-900 mb-2">TikShop Scale</p>
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

export default PrivacyPolicy;
