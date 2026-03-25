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
                            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto mb-2">
                                Please read these terms carefully before using our services.
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
                                {/* 1. Agreement to Terms */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">1. Agreement to Terms</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        These Terms of Service (“Terms”) govern your use of services provided by TikShop Scale (“Company,” “we,” “us,” or “our”). By engaging our services, you agree to be bound by these Terms.
                                    </p>
                                </section>

                                {/* 2. Services */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">2. Services</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        TikShop Scale provides TikTok Shop related services, which may include:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium text-base md:text-[17px]">
                                        <li>Store setup and optimization</li>
                                        <li>Product listing management</li>
                                        <li>Advertising management</li>
                                        <li>Influencer and affiliate coordination</li>
                                        <li>Creative strategy and consulting</li>
                                        <li>Performance analysis and reporting</li>
                                    </ul>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mt-4">
                                        Specific services will be outlined in a separate written agreement, proposal, or invoice.
                                    </p>
                                </section>

                                {/* 3. Client Responsibilities */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">3. Client Responsibilities</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        You agree to:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium text-base md:text-[17px]">
                                        <li>Provide accurate and complete information</li>
                                        <li>Maintain compliance with TikTok policies</li>
                                        <li>Ensure products comply with applicable laws</li>
                                        <li>Grant necessary access to accounts and assets</li>
                                        <li>Pay all agreed fees on time</li>
                                    </ul>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mt-4">
                                        You remain solely responsible for your products, claims, fulfillment, and customer service unless otherwise agreed in writing.
                                    </p>
                                </section>

                                {/* 4. Fees and Payment */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">4. Fees and Payment</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        Fees will be defined in your service agreement.
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium text-base md:text-[17px]">
                                        <li>Payments are due as specified in your invoice</li>
                                        <li>Late payments may result in service suspension</li>
                                        <li>Fees are non refundable unless otherwise stated</li>
                                        <li>You are responsible for any third party platform costs, including ad spend</li>
                                    </ul>
                                </section>

                                {/* 5. Intellectual Property */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">5. Intellectual Property</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        All content, strategies, frameworks, and proprietary materials created by TikShop Scale remain our intellectual property unless otherwise agreed in writing. Clients retain ownership of their brand assets, trademarks, and products.
                                    </p>
                                </section>

                                {/* 6. Confidentiality */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">6. Confidentiality</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        Both parties agree to maintain confidentiality of proprietary business information shared during the course of engagement. Confidential information shall not be disclosed to third parties without consent, except as required by law.
                                    </p>
                                </section>

                                {/* 7. No Guarantee of Results */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">7. No Guarantee of Results</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        We provide strategy, management, and optimization services. However:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium text-base md:text-[17px]">
                                        <li>We do not guarantee specific revenue, sales volume, or profit outcomes</li>
                                        <li>Performance depends on market conditions, product quality, competition, and platform algorithms</li>
                                    </ul>
                                </section>

                                {/* 8. Limitation of Liability */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">8. Limitation of Liability</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        To the fullest extent permitted by law:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium text-base md:text-[17px]">
                                        <li>TikShop Scale shall not be liable for indirect, incidental, or consequential damages</li>
                                        <li>Total liability shall not exceed the total fees paid to us in the preceding three months</li>
                                    </ul>
                                </section>

                                {/* 9. Indemnification */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">9. Indemnification</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        You agree to indemnify and hold harmless TikShop Scale from claims arising out of:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium text-base md:text-[17px]">
                                        <li>Your products</li>
                                        <li>False advertising claims</li>
                                        <li>Intellectual property infringement</li>
                                        <li>Violation of laws or TikTok policies</li>
                                    </ul>
                                </section>

                                {/* 10. Termination */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">10. Termination</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px] mb-4">
                                        Either party may terminate services according to the terms outlined in the service agreement. Upon termination:
                                    </p>
                                    <ul className="list-disc list-inside text-neutral-500 space-y-2 font-medium text-base md:text-[17px]">
                                        <li>Outstanding fees remain due</li>
                                        <li>Access to accounts may be revoked</li>
                                        <li>Certain provisions survive termination</li>
                                    </ul>
                                </section>

                                {/* 11. Independent Contractor */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">11. Independent Contractor</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        TikShop Scale operates as an independent contractor. Nothing in this agreement creates a partnership, joint venture, or employment relationship.
                                    </p>
                                </section>

                                {/* 12. Governing Law */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">12. Governing Law</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        These Terms shall be governed by the laws of United States, without regard to conflict of law principles.
                                    </p>
                                </section>

                                {/* 13. Modifications */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">13. Modifications</h2>
                                    <p className="text-neutral-500 leading-relaxed font-medium text-base md:text-[17px]">
                                        We reserve the right to update these Terms. Continued use of services after changes constitutes acceptance.
                                    </p>
                                </section>

                                {/* 14. Contact */}
                                <section>
                                    <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-900 mb-6 uppercase">14. Contact</h2>
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

export default TermsOfService;
