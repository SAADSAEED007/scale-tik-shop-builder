import React from "react";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { 
  CheckCircle2, 
  XCircle, 
  DollarSign, 
  Globe, 
  TrendingUp, 
  Brain, 
  Clock,
  ArrowRight
} from "lucide-react";

const Careers = () => {
  return (
    <div className="bg-[#F7F7F5] grid-net font-body text-[#0D0D0D] overflow-x-hidden">
      <SEO 
        title="Careers | Join the Team"
        description="We're building the best TikTok Shop team in the world. We don't want applicants, we want obsessives. Join TikShop Scale today."
        keywords="TikTok Agency Careers, eCommerce Jobs, Remote Marketing Jobs, TikShop Scale Team"
      />
      <style>
        {`
          .card-shadow {
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.04);
          }
        `}
      </style>

      {/* 1 HERO SECTION */}
      <section className="relative bg-[#FFFFFF] grid-net pt-[88px] pb-[88px] px-8 border-t border-[#E5E5E2] overflow-hidden">
        <div className="max-w-[1060px] mx-auto flex flex-col items-center text-center relative z-10">
          <FadeIn delay={0}>
            <div className="inline-block px-5 py-2.5 rounded-full bg-black/5 backdrop-blur-md border border-neutral-200/50 mb-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <span className="font-heading text-[12px] md:text-[14px] font-black tracking-[0.1em] text-black uppercase block">
                CAREERS
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-6xl md:text-[76px] font-black font-heading tracking-tighter leading-[0.98] text-[#0D0D0D] mb-10 max-w-4xl">
              We don't want applicants. <br className="hidden md:block" />
              We want <TapeLabel className="inline-block px-4 py-1 rotate-[-1.5deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black mx-1">obsessives.</TapeLabel>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-[#5C5C5C] font-medium leading-relaxed max-w-2xl">
              If TikTok Shop is something you think about when you're not working, keep reading.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2 HONEST VERSION SECTION */}
      <section className="bg-[#F7F7F5] grid-net pt-[88px] pb-[88px] px-8">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tighter leading-[1.1] text-[#0D0D0D]">
                The <TapeLabel className="inline-block px-3 py-0.5 bg-[#F5EDE3] text-black shadow-sm transform -rotate-1 mx-1">honest</TapeLabel> version of what we are:
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-[#5C5C5C] font-medium leading-[1.75]">
                  We're the team behind <span className="text-[#0D0D0D] font-bold underline decoration-[#D4B483]/30">$54.2M+ in TikTok Shop GMV</span>. We move faster than any agency our size because everyone here actually understands the platform not from a course, from doing it.
                </p>
                <p className="text-lg md:text-xl text-[#5C5C5C] font-medium leading-[1.75]">
                  No corporate layers. No waiting 3 weeks for approvals. If you spot something that works, we test it the same week.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3 FIT SECTION */}
      <section className="pb-24 px-6 bg-[#F7F7F5] grid-net">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* You'll fit here if: */}
            <FadeIn delay={0.1} className="flex h-full">
              <div className="bg-white border-t-4 border-t-green-500 rounded-[24px] p-8 md:p-12 card-shadow w-full flex flex-col border border-neutral-100 flex-1">
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-[11px] font-black tracking-widest text-green-600 uppercase">✓ WE'RE A GREAT FIT IF YOU...</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black font-heading tracking-tight mb-8">You're ready to move fast and trust the process.</h3>
                <ul className="space-y-4">
                  {[
                    "You live on TikTok and actually understand why things go viral",
                    "You care about results more than looking busy",
                    "You want your work to directly impact revenue not vanity metrics",
                    "You get uncomfortable when things stop growing"
                  ].map((item, i) => (
                    <li key={item} className="flex gap-4 text-[16px] md:text-[17px] text-[#5C5C5C] font-medium leading-[1.4]">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* You won't fit here if: */}
            <FadeIn delay={0.2} className="flex h-full">
              <div className="bg-white border-t-4 border-t-red-500 rounded-[24px] p-8 md:p-12 card-shadow w-full flex flex-col border border-neutral-100 flex-1">
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-[11px] font-black tracking-widest text-red-600 uppercase">✕ WE'RE PROBABLY NOT THE RIGHT FIT IF YOU...</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black font-heading tracking-tight mb-8">You want cheap, fast, or fully hands-off without investment.</h3>
                <ul className="space-y-4">
                  {[
                    "You need everything mapped out before you start",
                    "You treat TikTok like any other social platform",
                    "You want a quiet, slow-paced agency job"
                  ].map((item, i) => (
                    <li key={item} className="flex gap-4 text-[16px] md:text-[17px] text-[#5C5C5C] font-medium leading-[1.4]">
                      <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                    <p className="text-[13px] text-neutral-400 font-medium italic">We're built for speed and growth, not for maintaining the status quo.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4 PERKS SECTION */}
      <section className="py-24 px-6 bg-white grid-net">
        <div className="max-w-[1240px] mx-auto text-center">
          <FadeIn className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-8 uppercase">
              PERKS OF WORKING <TapeLabel className="inline-block px-4 py-1.5 bg-[#F5EDE3] text-black shadow-sm transform rotate-1 mx-2 lowercase first-letter:uppercase">With Us</TapeLabel>
            </h2>
            <p className="text-base md:text-lg text-neutral-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Enjoy remote flexibility, competitive pay, growth opportunities, and a supportive team culture designed to help you thrive.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <PerkCard 
              emoji="💰"
              title="Pay That Reflects Your Worth"
              desc="Good people get paid like it."
              delay={0.1}
            />
            <PerkCard 
              emoji="🌍"
              title="Work From Anywhere"
              desc="Output matters. Location doesn't."
              delay={0.2}
            />
            <PerkCard 
              emoji="📈"
              title="Grow With Us"
              desc="We're scaling fast. You scale with us."
              delay={0.3}
            />
            <PerkCard 
              emoji="🕐"
              title="Time Off"
              desc="No Questions Asked. Rest is part of performing well."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* 5 CLOSING CTA SECTION */}
      <section className="py-24 px-6 bg-[#F7F7F5] grid-net relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4B48310_0%,_transparent_70%)] opacity-40 pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl md:text-[56px] font-black font-heading tracking-tighter leading-[1.1] text-[#0D0D0D] mb-12">
              We're building the best TikTok Shop team in the world. <br className="hidden md:block" />
              <TapeLabel className="inline-block px-4 py-1 rotate-[-1deg] origin-left bg-[#F5EDE3] shadow-sm mt-3">Come help.</TapeLabel>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <a href="mailto:careers@tikshopscale.com" className="group inline-block w-full max-w-lg">
              <Button className="w-full bg-[#F5EDE3] text-black hover:bg-neutral-800 hover:text-white rounded-full px-12 py-9 text-2xl font-black transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-4">
                careers@tikshopscale.com
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

const PerkCard = ({ emoji, title, desc, delay }: { emoji: string, title: string, desc: string, delay: number }) => (
  <FadeIn delay={delay} className="h-full">
    <div className="bg-white p-5 md:p-6 rounded-[12px] h-full text-left shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-neutral-100/50 hover:shadow-xl transition-all duration-300">
      <div className="mb-6 text-3xl">
        {emoji}
      </div>
      <h4 className="text-[15px] md:text-[16px] font-black font-heading tracking-wide mb-3 text-[#0D0D0D] uppercase">{title}</h4>
      <p className="text-[14px] text-neutral-500 font-medium leading-relaxed">
        {desc}
      </p>
    </div>
  </FadeIn>
);

export default Careers;
