import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";
import { Button } from "@/components/ui/button";

const Careers = () => {
    return (
        <div className="pt-28 md:pt-32 min-h-[70vh]">
            <section className="py-10 md:py-12">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <FadeIn>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-foreground mb-12 md:mb-16">
                            Join Our <br />
                            <TapeLabel className="inline-block mt-2 px-6 py-2 rotate-[-1deg] bg-[#F5EDE3] shadow-sm">
                                Team
                            </TapeLabel>
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="max-w-2xl mx-auto space-y-6">
                            <p className="text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
                                We are a performance focused TikTok agency helping brands turn attention into real growth.
                            </p>
                            <p className="text-base md:text-lg text-neutral-500 font-medium leading-relaxed">
                                From creative strategy and content production to paid media and optimization, our team builds campaigns that drive measurable results.
                            </p>
                            <p className="text-base md:text-lg text-neutral-500 font-medium leading-relaxed pb-4">
                                We move fast, test constantly, and stay ahead of platform trends. If you are passionate about short form content, creator culture, and performance marketing, you will fit right in.
                            </p>

                            <div className="pt-4">
                                <p className="text-xl font-bold text-foreground mb-6">Ready to grow with us?</p>
                                <a href="mailto:careers@tikshopscale.com" className="inline-block">
                                    <Button
                                        className="rounded-full bg-[#F5EDE3] hover:bg-[#E6D5C3] text-foreground font-bold px-10 py-7 h-auto text-lg border border-[#E6D5C3] shadow-sm transition-all active:scale-95"
                                    >
                                        Email careers@tikshopscale.com
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Careers;
