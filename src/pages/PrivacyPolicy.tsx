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
                            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto mb-2">
                                Your privacy and data protection matter to us.
                            </p>
                            <p className="text-sm font-bold text-neutral-900 tracking-widest uppercase">
                                Effective Date: December 23, 2023
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative grid-net">
                <div className="container max-w-4xl mx-auto px-4 md:px-6">
                    <FadeIn delay={0.1}>
                        <div className="bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-border/50 p-8 md:p-16 shadow-sm">
                            <div className="space-y-12">
                                {/* Introduction */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">Introduction</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        TikShop Scale (“Company,” “we,” “us,” or “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, engage our services, or communicate with us. By using our services, you agree to the terms of this Privacy Policy.
                                    </p>
                                </section>

                                {/* Information We Collect */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">Information We Collect</h2>

                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="font-bold text-neutral-900 mb-3 text-lg">A. Personal Information</h3>
                                            <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium">
                                                <li>Full name</li>
                                                <li>Business name</li>
                                                <li>Email address</li>
                                                <li>Phone number</li>
                                                <li>Billing and payment information</li>
                                                <li>Mailing address</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-neutral-900 mb-3 text-lg">B. Business & Account Information</h3>
                                            <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium">
                                                <li>TikTok Shop account details</li>
                                                <li>Store performance data</li>
                                                <li>Advertising account information</li>
                                                <li>Sales and analytics data</li>
                                                <li>Product listings and related content</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-neutral-900 mb-3 text-lg">C. Automatically Collected Information</h3>
                                            <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium">
                                                <li>IP address</li>
                                                <li>Browser type</li>
                                                <li>Device information</li>
                                                <li>Usage data</li>
                                                <li>Cookies and tracking technologies</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                {/* How We Use Your Information */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">How We Use Your Information</h2>
                                    <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium text-base md:text-[17px]">
                                        <li>Provide TikTok Shop management and growth services</li>
                                        <li>Optimize store performance and advertising campaigns</li>
                                        <li>Communicate regarding services, updates, and billing</li>
                                        <li>Process payments</li>
                                        <li>Improve our website and services</li>
                                        <li>Comply with legal obligations</li>
                                        <li>Prevent fraud or misuse</li>
                                    </ul>
                                </section>

                                {/* How We Share Information */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">How We Share Information</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        We do not sell personal information.
                                    </p>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        We may share information with service providers, payment processors, legal authorities, and TikTok-related platforms as necessary to perform services.
                                    </p>
                                </section>

                                {/* Data Security */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">Data Security</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        We implement commercially reasonable administrative, technical, and physical safeguards to protect your information. However, no system is 100% secure.
                                    </p>
                                </section>

                                {/* Data Retention */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">Data Retention</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        We retain information only as long as necessary to fulfill services, legal obligations, resolve disputes, and enforce agreements.
                                    </p>
                                </section>

                                {/* Your Rights */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">Your Rights</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        Users may have rights to access, correct, delete, withdraw consent, or object to processing.
                                        Contact: info@tikshopscale.com
                                    </p>
                                </section>

                                {/* Cookies */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">Cookies</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        We use cookies and tracking technologies to enhance user experience and analyze traffic. Users can control cookies via browser settings.
                                    </p>
                                </section>

                                {/* Third Party Links */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">Third Party Links</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        We are not responsible for privacy practices of third-party websites linked on our site.
                                    </p>
                                </section>

                                {/* Children’s Privacy */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">Children’s Privacy</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        Our services are not intended for individuals under 18. We do not knowingly collect data from minors.
                                    </p>
                                </section>

                                {/* Changes to This Policy */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">Changes to This Policy</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        We may update this Privacy Policy periodically with a revised effective date.
                                    </p>
                                </section>

                                {/* Contact Information */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">Contact Information</h2>
                                    <div className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        <p className="font-bold text-neutral-900 mb-2">TikShop Scale</p>
                                        <p>Email: info@tikshopscale.com</p>
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
