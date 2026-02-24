
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";

const faqs = [
    {
        question: "What does your agency specialize in?",
        answer: "TikTok growth through creative, paid ads, influencers, organic growth and optimization.",
    },
    {
        question: "Do you handle both organic and paid TikTok?",
        answer: "Yes, we manage both for full funnel growth.",
    },
    {
        question: "How is TikTok different from other platforms?",
        answer: "It rewards native, culture driven content over traditional ads.",
    },
    {
        question: "What budget do I need to get started?",
        answer: "Enough to properly test and scale campaigns.",
    },
    {
        question: "How quickly can I expect results?",
        answer: "Most brands see early performance data within weeks.",
    },
    {
        question: "Do you create the content or do we?",
        answer: "We can fully produce, collaborate, or guide your team.",
    },
    {
        question: "What makes you different?",
        answer: "We are TikTok only. No Amazon, no eBay, no Walmart. Just creative first strategy and performance driven TikTok growth.",
    },
    {
        question: "Who owns the ad account?",
        answer: "You do. Full transparency and ownership.",
    },
    {
        question: "How do you measure success?",
        answer: "Clear KPIs like CPA, ROAS, and revenue growth.",
    },
    {
        question: "What is your onboarding process?",
        answer: "Discovery call, account setup, growth roadmap, then structured testing and launch within the first two weeks.",
    },
    {
        question: "What are your pricing models?",
        answer: "Monthly retainers with scalable options.",
    },
];

const FAQ = () => {
    return (
        <section id="faq" className="pt-12 md:pt-16 pb-0 relative overflow-hidden">
            <div className="container max-w-3xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-10 md:mb-12">
                    <FadeIn>
                        <div className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#F5EDE3] border border-[#E6D5C3] text-neutral-900 text-[9px] font-black uppercase tracking-[0.2em] mb-4 shadow-sm">
                            Common Questions
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-black tracking-tighter mb-4 leading-tight text-foreground">
                            Frequently Asked <br />
                            <TapeLabel className="inline-block mt-1 px-4 py-1 rotate-[-1deg] bg-[#F5EDE3] shadow-sm">
                                Questions
                            </TapeLabel>
                        </h2>

                        <p className="text-base md:text-lg text-muted-foreground font-medium max-w-lg mx-auto">
                            Everything you need to know about working with us.
                        </p>
                    </FadeIn>
                </div>

                {/* FAQ Accordion */}
                <FadeIn delay={0.2}>
                    <Accordion type="single" collapsible className="space-y-2.5">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-none group"
                            >
                                <div className="rounded-2xl md:rounded-[1.5rem] border border-border/50 bg-background/50 backdrop-blur-md shadow-sm transition-all duration-500 overflow-hidden group-data-[state=open]:bg-[#F5EDE3] group-data-[state=open]:shadow-md group-data-[state=open]:border-[#E6D5C3] hover:shadow-md hover:-translate-y-0.5">
                                    <AccordionTrigger className="px-6 md:px-8 py-4 md:py-5 text-left hover:no-underline font-bold text-[15px] md:text-[17px] text-foreground transition-all [&>svg]:h-3.5 [&>svg]:w-3.5 md:[&>svg]:h-4 md:[&>svg]:w-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 md:px-8 pb-5 text-neutral-600 text-sm md:text-[15px] leading-relaxed font-medium">
                                        {faq.answer}
                                    </AccordionContent>
                                </div>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </FadeIn>
            </div>
        </section>
    );
};

export default FAQ;
