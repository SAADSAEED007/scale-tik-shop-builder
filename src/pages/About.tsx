import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceTicker from "@/components/ServiceTicker";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";

const About = () => {
  return (
    <div className="bg-[#F7F7F5] font-manrope text-[#0D0D0D] overflow-x-hidden">
      <style>
        {`
                @keyframes FadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .hero-section::before {
                    content: '';
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(212,180,131,0.1) 0%, transparent 68%);
                    position: absolute;
                    top: -80px;
                    right: -100px;
                    pointer-events: none;
                    z-index: 1;
                }
                .cta-section::before {
                    content: '';
                    position: absolute;
                    top: -150px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 700px;
                    height: 700px;
                    background: radial-gradient(circle, rgba(212,180,131,0.16) 0%, transparent 68%);
                    pointer-events: none;
                }
                `}
      </style>

      {/* 2 — HERO SECTION */}
      <section className="hero-section relative bg-[#FFFFFF] pt-[160px] pb-[100px] px-8 overflow-hidden">
        <div className="max-w-[1060px] mx-auto flex flex-col items-center text-center relative z-10">
          <FadeIn delay={0}>
            <div className="inline-block px-5 py-2.5 rounded-full bg-black/5 backdrop-blur-md border border-neutral-200/50 mb-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <span className="font-syne text-[12px] md:text-[14px] font-black tracking-[0.1em] text-black uppercase block">
                WHO WE ARE
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black font-heading tracking-tighter leading-[1.05] text-[#0D0D0D] mb-8 max-w-4xl">
              We built this because brands deserved <br className="hidden md:block" />
              <TapeLabel className="inline-block px-3 py-1 text-[22px] sm:text-[32px] md:text-[42px] rotate-[-1.5deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black mx-1">
                better than guesswork.
              </TapeLabel>
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="text-lg md:text-xl text-[#5C5C5C] leading-[1.75] mb-12 max-w-2xl">
              We watched brand after brand pour money into TikTok Shop with no system, no strategy, and no one who actually understood the platform. <span className="font-bold text-[#2E2E2E]">So we built the agency we wished existed.</span> One that only does TikTok Shop. One that treats your revenue like it's our own.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="flex flex-wrap items-center justify-center gap-[10px] mb-20">
              {["TikTok Shop only", "Full team. Real specialists.", "No lock-in contracts"].map((text) => (
                <span key={text} className="bg-[#F7F7F5] border border-[#E5E5E2] px-[14px] py-[6px] rounded-full text-[12.5px] font-[600] text-[#2E2E2E] inline-flex items-center gap-[7px]">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#D4B483]"></span>
                  {text}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* STATS GRID - Middle Layout */}
          <FadeIn delay={0.24} className="grid grid-cols-2 md:grid-cols-4 gap-[12px] w-full max-w-[900px]">
            <div className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-[16px] p-[24px_20px] transition-transform duration-300 hover:-translate-y-1">
              <div className="font-syne font-[800] text-[36px] text-[#0D0D0D] leading-none mb-[6px]">$2.4M+</div>
              <div className="text-[12.5px] font-[600] leading-[1.4] text-[#9A9A9A]">Client GMV generated</div>
            </div>
            <div className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-[16px] p-[24px_20px] transition-transform duration-300 hover:-translate-y-1">
              <div className="font-syne font-[800] text-[36px] text-[#0D0D0D] leading-none mb-[6px]">890+</div>
              <div className="text-[12.5px] font-[600] leading-[1.4] text-[#9A9A9A]">Brands we've worked with</div>
            </div>
            <div className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-[16px] p-[24px_20px] transition-transform duration-300 hover:-translate-y-1">
              <div className="font-syne font-[800] text-[36px] text-[#0D0D0D] leading-none mb-[6px]">60d</div>
              <div className="text-[12.5px] font-[600] leading-[1.4] text-[#9A9A9A]">Average time to real results</div>
            </div>
            <div className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-[16px] p-[24px_20px] transition-transform duration-300 hover:-translate-y-1">
              <div className="font-syne font-[800] text-[36px] text-[#0D0D0D] leading-none mb-[6px]">1</div>
              <div className="text-[12.5px] font-[600] leading-[1.4] text-[#9A9A9A]">Platform. Total focus. Always.</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3 — TICKER */}
      <div className="w-full bg-[#0D0D0D] py-[13px] overflow-hidden relative select-none">
        <style>
          {`
                    @keyframes about-ticker {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-about-ticker {
                        animation: about-ticker 30s linear infinite;
                    }
                    `}
        </style>
        <div className="flex whitespace-nowrap animate-about-ticker">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center">
              {[
                "TIKTOK SHOP SPECIALISTS",
                "CREATOR PIPELINE EXPERTS",
                "SPARK ADS STRATEGISTS",
                "LIVE COMMERCE OPERATORS",
                "AFFILIATE GROWTH SYSTEMS",
                "REVENUE-FIRST AGENCY"
              ].map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-syne font-[700] uppercase text-[15px] px-8 text-white tracking-[2.5px]">
                    {item}
                  </span>
                  <span className="text-white/40 font-bold text-xl">+</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 4 — OUR STORY SECTION */}
      <section className="bg-[#FFFFFF] pt-[88px] pb-[88px] px-8 border-t border-[#E5E5E2]">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT STORY TEXT */}
          <div>
            <span className="font-syne font-[700] text-[11.5px] text-[#0D0D0D] tracking-[3px] uppercase block mb-[18px]">
              OUR STORY
            </span>
            <h2 className="font-syne font-[800] text-[32px] md:text-[clamp(32px,4.5vw,52px)] text-[#0D0D0D] leading-[1.08] mb-[18px]">
              We didn't start as an agency. <TapeLabel className="inline-block px-3 py-1 mt-2 rotate-[-1.5deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black mx-1">We started as operators.</TapeLabel>
            </h2>
            <p className="text-[18px] text-[#2E2E2E] font-[500] leading-[1.7] mb-[18px]">
              Before TikShopScale existed, we were deep inside TikTok Shop — running accounts, testing creators, burning money on the wrong ads, and figuring out what actually worked the hard way.
            </p>
            <p className="text-[16px] text-[#5C5C5C] leading-[1.8] mb-[18px]">
              We weren't consultants reading about the platform from the outside. We were in it — testing hooks at midnight, chasing creators who ghosted, and debugging listing issues that killed visibility for no obvious reason. We learned TikTok Shop by doing it, failing at it, and eventually cracking it.
            </p>
            <p className="text-[16px] text-[#5C5C5C] leading-[1.8] mb-[18px]">
              When other brand owners started asking us how we were getting results — and we saw the same mistakes playing out over and over — we realised there was a gap. <span className="font-bold text-[#2E2E2E]">Not another generalist agency that "also does TikTok." A specialist team that did nothing else.</span>
            </p>
            <p className="text-[16px] text-[#5C5C5C] leading-[1.8]">
              So that's what we built. A team of people who live inside TikTok Shop every single day — not managing your Instagram on the side, not running your email campaigns. Just TikTok Shop. All of it. All the time.
            </p>
          </div>

          {/* RIGHT STORY CARDS */}
          <div className="flex flex-col gap-[14px]">
            {[
              {
                label: "WHERE IT STARTED",
                title: "We ran TikTok Shops ourselves first",
                text: "Before we touched a client's account, we spent months operating our own. Every lesson we learned — we learned with our own money on the line."
              },
              {
                label: "WHAT WE SAW",
                title: "Good brands failing for fixable reasons",
                text: "Wrong categories. No affiliate system. Meta-style ads on a TikTok-native audience. The same 5 mistakes, over and over. We knew how to fix them."
              },
              {
                label: "WHAT WE BUILT",
                title: "The agency we wished existed",
                text: "No generalists. No split focus. A team that knows TikTok Shop inside out — and has the results to prove it. That's TikShopScale."
              },
              {
                label: "WHERE WE ARE NOW",
                title: "890+ brands. $2.4M+ GMV. Still learning.",
                text: "We've scaled brands from zero to $100K/mo. But the platform keeps evolving — and so do we. That curiosity is what keeps our results ahead of the market."
              }
            ].map((card, i) => (
              <div key={i} className="group relative bg-[#F7F7F5] border border-[#E5E5E2] rounded-[16px] p-[26px_28px] overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-[3px]">
                <div className="absolute top-0 left-0 bottom-0 width-[3px] w-[3px] bg-[#0D0D0D]" />
                <span className="text-[11px] font-[700] uppercase tracking-[2px] text-[#0D0D0D] block mb-[8px]">
                  {card.label}
                </span>
                <h4 className="font-syne font-[800] text-[17px] text-[#0D0D0D] mb-[6px]">
                  {card.title}
                </h4>
                <p className="text-[13.5px] text-[#5C5C5C] leading-[1.65]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — WHAT WE BELIEVE SECTION */}
      <section className="bg-[#F7F7F5] pt-[88px] pb-[88px] px-8">
        <div className="max-w-[1060px] mx-auto">
          <div className="max-w-[560px] mb-[52px]">
            <span className="font-syne font-[700] text-[11.5px] text-[#0D0D0D] tracking-[3px] uppercase block mb-[12px]">
              WHAT WE BELIEVE
            </span>
            <h2 className="font-syne font-[800] text-[clamp(32px,4vw,48px)] text-[#0D0D0D] leading-[1.08] mb-[16px]">
              Opinions most <TapeLabel className="inline-block px-3 py-1 mt-2 rotate-[-1.5deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black mx-1">agencies won't say out loud.</TapeLabel>
            </h2>
            <p className="text-[16px] text-[#5C5C5C] leading-[1.7]">
              We'd rather be honest and lose a client than be agreeable and waste their money. These are the things we actually believe — and they shape every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {[
              {
                num: "01",
                icon: "🎯",
                title: "TikTok Shop is not social media. It's a search engine with video.",
                text: "Most brands treat TikTok like Instagram — post content, hope it goes viral. That's not how TikTok Shop works. It rewards consistent product-focused content, keyword-optimised listings, and an affiliate network that creates purchase signals. Brands that understand this compound. Brands that don't, plateau."
              },
              {
                num: "02",
                icon: "💰",
                title: "Paid ads without organic foundation is just burning money faster.",
                text: "We've audited hundreds of TikTok ad accounts. The ones bleeding money all have the same problem — they went paid before they had proven organic content. Spark Ads only work when they're amplifying something that already converts. Running cold paid traffic before that? You're funding TikTok's ad revenue, not your own.",
                dark: true
              },
              {
                num: "03",
                icon: "🤝",
                title: "Affiliates are the most underused lever in eCommerce right now.",
                text: "Every brand obsesses over ads. Almost none build a real affiliate system. But the top-performing TikTok Shops we've analysed get 40–70% of their GMV from affiliates — not ads. It compounds. It's lower CAC. And it keeps working even when you stop spending. Most brands have no idea they're leaving this on the table."
              },
              {
                num: "04",
                icon: "📊",
                title: "We'll tell you if TikTok Shop isn't right for your product. Even if it costs us a client.",
                text: "Some products don't work on TikTok Shop. Wrong price point, wrong demographic, wrong visual format. We'd rather tell you that on the first call than take your money, deliver disappointing results, and damage your trust in the platform forever. Honesty upfront is worth more than a short-term retainer."
              }
            ].map((belief, i) => (
              <div key={i} className={`group relative rounded-[18px] p-[36px_32px] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-[4px] border ${belief.dark ? 'bg-[#0D0D0D] border-[#0D0D0D]' : 'bg-[#FFFFFF] border-[#E5E5E2]'}`}>
                <div className={`font-syne font-[800] text-[52px] absolute top-[20px] right-[24px] pointer-events-none line-height-1 leading-none ${belief.dark ? 'text-[rgba(255,255,255,0.06)]' : 'text-[#E5E5E2]'}`}>
                  {belief.num}
                </div>
                <div className="text-[28px] mb-[16px]">{belief.icon}</div>
                <h3 className={`font-syne font-[800] text-[19px] leading-[1.2] mb-[10px] ${belief.dark ? 'text-[#F5EDE3]' : 'text-[#0D0D0D]'}`}>
                  {belief.title}
                </h3>
                <p className={`text-[14.5px] leading-[1.72] ${belief.dark ? 'text-[rgba(255,255,255,0.5)]' : 'text-[#5C5C5C]'}`}>
                  {belief.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — WHY TIKTOK SHOP ONLY SECTION */}
      <section className="bg-[#0D0D0D] pt-[88px] pb-[88px] px-8">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="font-syne font-[700] text-[11.5px] text-[#F5EDE3] tracking-[3px] uppercase block mb-[18px]">
              WHY TIKTOK SHOP ONLY
            </span>
            <h2 className="font-syne font-[800] text-[clamp(32px,4vw,48px)] text-white leading-[1.1] mb-[18px]">
              The focused bet that <TapeLabel className="inline-block px-3 py-1 mt-2 rotate-[-1.5deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black mx-1">changes everything.</TapeLabel>
            </h2>
            <p className="text-[16px] text-[rgba(255,255,255,0.5)] leading-[1.7] mb-[32px]">
              Every generalist agency says they "do TikTok." What they mean is they have one person who watched a YouTube tutorial and manages it between Instagram posts. That's not us.
            </p>

            <div className="flex flex-col gap-[12px]">
              {[
                { icon: "🔍", h: "We see algorithm changes in real time", p: "Because we're inside TikTok Shop every day across dozens of accounts — not checking in monthly." },
                { icon: "🧪", h: "We test faster than any generalist can", p: "Our entire creative and ad testing infrastructure is built for one platform. We're not adapting Meta frameworks to TikTok." },
                { icon: "🤝", h: "Our creator relationships are TikTok-specific", p: "We're not managing Instagram influencers. Every creator in our network is a TikTok Shop affiliate who sells products — not just posts about them." },
                { icon: "⚡", h: "We move faster because we're not split", p: "No context-switching between platforms. Your account gets the full attention of a team that lives and breathes one thing." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-[14px]">
                  <div className="w-[32px] h-[32px] rounded-[8px] bg-[#F5EDE3] border border-[#D4B483]/30 flex items-center justify-center text-[15px] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-[700] text-white mb-[3px]">{item.h}</h4>
                    <p className="text-[13.5px] text-[rgba(255,255,255,0.4)] leading-[1.55]">{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FOCUS CARD */}
          <div className="bg-[#181818] border border-[rgba(255,255,255,0.07)] rounded-[18px] p-8">
            <h3 className="font-syne font-[700] text-[14px] text-[#F5EDE3] tracking-[1px] uppercase mb-[20px]">
              OUR FOCUS VS GENERALIST AGENCIES
            </h3>
            <div className="flex flex-col">
              {[
                { name: "🎵 TikTok Shop", val: 100, label: "100% Focus", color: "#F5EDE3" },
                { name: "📸 Instagram", val: 0, label: "We don't", color: "rgba(255,255,255,0.2)" },
                { name: "📦 Amazon", val: 0, label: "We don't", color: "rgba(255,255,255,0.2)" },
                { name: "📘 Facebook / Meta", val: 0, label: "We don't", color: "rgba(255,255,255,0.2)" },
                { name: "🌐 eBay / Etsy", val: 0, label: "We don't", color: "rgba(255,255,255,0.2)" }
              ].map((row, i) => (
                <div key={i} className={`flex items-center justify-between py-[13px] ${i !== 4 ? 'border-b border-[rgba(255,255,255,0.06)]' : ''}`}>
                  <div className="text-[14px] text-[rgba(255,255,255,0.5)] flex items-center gap-2">
                    {row.name}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-[80px] h-[6px] rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                      <div className="h-full rounded-full bg-[#F5EDE3]" style={{ width: `${row.val}%` }}></div>
                    </div>
                    <div className="text-[13px] font-[700] w-[75px] text-right" style={{ color: row.color }}>{row.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-[rgba(255,255,255,0.07)]">
              <p className="text-[13px] text-[rgba(255,255,255,0.35)] leading-[1.65]">
                Generalist agencies split their attention — and their expertise — across all of these. You get a fraction of a team. We give you everything we have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — HOW WE WORK SECTION */}
      <section className="bg-[#FFFFFF] pt-[88px] pb-[88px] px-8 border-t border-[#E5E5E2]">
        <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT CONTENT */}
          <div>
            <span className="font-syne font-[700] text-[11.5px] text-[#0D0D0D] tracking-[3px] uppercase block mb-[18px]">
              HOW WE WORK
            </span>
            <h2 className="font-syne font-[800] text-[clamp(32px,4vw,48px)] text-[#0D0D0D] leading-[1.08] mb-4">
              What it's actually like to <TapeLabel className="inline-block px-3 py-1 mt-2 rotate-[-1.5deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black mx-1">work with us.</TapeLabel>
            </h2>
            <p className="text-[16px] text-[#5C5C5C] leading-[1.7]">
              No surprises. No hand-holding required. Just a clear, fast-moving partnership where you always know what's happening and why.
            </p>

            <div className="flex flex-col gap-[10px] mt-8">
              {[
                { icon: "📞", h: "We start with a real audit — not a sales pitch", p: "First call we look at your shop, your numbers, and your competitors. You leave with clarity — not a deck full of promises." },
                { icon: "⚡", h: "We move in days — not weeks", p: "Most agencies need 6 weeks to \"onboard.\" We're launching content in week two. Speed is a competitive advantage on TikTok." },
                { icon: "📊", h: "You hear from us weekly — with real data", p: "Not a monthly PDF that says \"results improving.\" Every week: what's live, what's working, what we're changing, and why." },
                { icon: "🔓", h: "Cancel anytime. No lock-in.", p: "We don't believe in holding clients with contracts. We hold them with results. If we stop performing, you should leave — and we'd respect that." }
              ].map((item, i) => (
                <div key={i} className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-[14px] p-[22px_24px] flex items-start gap-[14px] transition-all duration-300 hover:shadow-md hover:translate-x-1">
                  <div className="w-[36px] h-[36px] rounded-[9px] bg-[#F5EDE3] flex items-center justify-center text-[17px] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-[700] text-[#0D0D0D] mb-[4px]">{item.h}</h4>
                    <p className="text-[13.5px] text-[#5C5C5C] leading-[1.6]">{item.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT - EXPECT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] pt-8 lg:pt-[100px]">
            <div className="bg-[#F5EDE3] border border-[#D4B483]/20 rounded-[14px] p-[22px]">
              <span className="text-[11px] font-[700] uppercase tracking-[2px] text-[#0D0D0D] block mb-[12px]">FROM US</span>
              <ul className="flex flex-col gap-3 text-[13.5px] text-black leading-[1.5]">
                {[
                  "Weekly performance updates with real numbers",
                  "Fast execution — content live in week 2",
                  "Honest advice, even if it's not what you want to hear",
                  "One dedicated person who knows your brand",
                  "Zero hidden fees or surprise charges",
                  "Full transparency on what we're doing and why"
                ].map((li, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#D4B483]">→</span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-[14px] p-[22px]">
              <span className="text-[11px] font-[700] uppercase tracking-[2px] text-[#0D0D0D] block mb-[12px]">FROM YOU</span>
              <ul className="flex flex-col gap-3 text-[13.5px] text-[#2E2E2E] leading-[1.5]">
                {[
                  "A product people actually want to buy",
                  "Fast responses when we need approvals",
                  "Trust us to do our job — we'll earn it",
                  "Willingness to test and iterate quickly",
                  "Product samples sent to creators on time",
                  "Realistic expectations — results take weeks, not days"
                ].map((li, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#9A9A9A]">→</span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — WHO WE'RE BUILT FOR SECTION */}
      <section className="bg-[#F7F7F5] pt-[88px] pb-[88px] px-8">
        <div className="max-w-[1060px] mx-auto">
          <div className="max-w-[580px] mx-auto text-center mb-[48px]">
            <span className="font-syne font-[700] text-[11.5px] text-[#0D0D0D] tracking-[3px] uppercase block mb-[12px]">
              WHO WE'RE BUILT FOR
            </span>
            <h2 className="font-syne font-[800] text-[clamp(32px,4vw,48px)] text-[#0D0D0D] leading-[1.08] mb-4">
              We're the right fit for some brands. <TapeLabel className="inline-block px-3 py-1 rotate-[-1.5deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black mx-1">Not all.</TapeLabel>
            </h2>
            <p className="text-[16px] text-[#5C5C5C] leading-[1.7]">
              We'd rather be honest about this upfront than waste your time or ours. Read both sides and decide for yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {/* YES CARD */}
            <div className="bg-[#FFFFFF] border border-[#E5E5E2] border-t-[3px] border-t-[#16A34A] rounded-[18px] p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-[3px]">
              <span className="text-[11px] font-[900] text-[#16A34A] uppercase mb-4 block">✓ WE'RE A GREAT FIT IF YOU...</span>
              <h3 className="font-syne font-[800] text-[19px] text-[#0D0D0D] mb-[14px]">You're ready to move fast and trust the process.</h3>
              <ul className="flex flex-col gap-[9px]">
                {[
                  "Have a product with real demand — or a clear plan to find one",
                  "Are serious about TikTok Shop as a real revenue channel",
                  "Can invest properly — not looking for a $200/mo miracle",
                  "Want to understand what's happening — but don't need to control every post",
                  "Are willing to send product samples to creators quickly",
                  "Understand results compound over weeks — not overnight",
                  "Want a team that's honest with you, even when the news isn't great"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-[#2E2E2E] leading-[1.55]">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center text-[10px] font-black shrink-0">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NO CARD */}
            <div className="bg-[#FFFFFF] border border-[#E5E5E2] border-t-[3px] border-t-[#FCA5A5] rounded-[18px] p-8 transition-all duration-300 hover:shadow-md hover:-translate-y-[3px]">
              <span className="text-[11px] font-[900] text-[#DC2626] uppercase mb-4 block">✕ WE'RE PROBABLY NOT THE RIGHT FIT IF YOU...</span>
              <h3 className="font-syne font-[800] text-[19px] text-[#0D0D0D] mb-[14px]">You want cheap, fast, or fully hands-off without investment.</h3>
              <ul className="flex flex-col gap-[9px]">
                {[
                  "Need to approve every single piece of content before it goes live",
                  "Expect $50K/mo GMV within 2 weeks of starting",
                  "Have a product with no proven demand on any platform",
                  "Want TikTok Shop managed for under $500/mo",
                  "Are looking for a yes-man agency that never pushes back",
                  "Can't move fast — slow approvals kill TikTok momentum",
                  "Want to stay anonymous — TikTok Shop requires brand presence"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-[#2E2E2E] leading-[1.55]">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#FEE2E2] text-[#DC2626] flex items-center justify-center text-[10px] font-black shrink-0">✕</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — TEAM SECTION */}
      <section className="bg-[#FFFFFF] pt-[88px] pb-[88px] px-8 border-t border-[#E5E5E2]">
        <div className="max-w-[1060px] mx-auto">
          <div className="max-w-[560px] mb-[52px]">
            <span className="font-syne font-[700] text-[11.5px] text-[#0D0D0D] tracking-[3px] uppercase block mb-[12px]">
              THE TEAM
            </span>
            <h2 className="font-syne font-[800] text-[clamp(32px,4vw,48px)] text-[#0D0D0D] leading-[1.08] mb-[16px]">
              Real people. Real specialists. <TapeLabel className="inline-block px-3 py-1 rotate-[-1.5deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black mx-1">No generalists allowed.</TapeLabel>
            </h2>
            <p className="text-[16px] text-[#5C5C5C] leading-[1.7]">
              Every person on this team was hired for one reason — they're genuinely excellent at their specific role inside TikTok Shop. No account managers who "also do content." No creatives who "also run ads."
            </p>
          </div>

          {/* FOUNDER CARD */}
          <div className="bg-[#F5EDE3] border-[1.5px] border-[#D4B483]/30 rounded-[22px] p-9 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-9 items-start mb-8">
            {/* PHOTO PLACEHOLDER */}
            <div className="w-full h-[340px] rounded-[18px] overflow-hidden border-[3px] border-[#D4B483] bg-[#F7F7F5] flex items-center justify-center text-[14px] text-[#9A9A9A] font-bold">
              Founder photo
            </div>
            {/* TEXT */}
            <div>
              <span className="text-[11px] font-[700] uppercase tracking-[2px] text-[#0D0D0D] block mb-2.5">FOUNDER & STRATEGY LEAD</span>
              <h3 className="font-syne font-[800] text-[clamp(24px,3vw,36px)] text-[#0D0D0D] leading-[1.1] mb-4">
                The person behind <TapeLabel className="inline-block px-2 py-1 rotate-[-1.5deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black mx-1">TikShopScale.</TapeLabel>
              </h3>
              <p className="text-[15px] text-[#5C5C5C] leading-[1.75] mb-3.5">
                Before TikShopScale existed, I was deep inside TikTok Shop — running accounts, testing creators, burning money on the wrong ads, and figuring out what actually worked the hard way.
              </p>
              <p className="text-[15px] text-[#5C5C5C] leading-[1.75] mb-3.5">
                When other brand owners started asking how I was getting results, I realised there was a gap. Not another generalist agency that "also does TikTok." A specialist team that did nothing else. <span className="font-bold text-[#2E2E2E]">So that's what I built.</span>
              </p>
              <p className="text-[15px] text-[#5C5C5C] leading-[1.75] mb-6">
                Every system we use, every process we follow, every creator strategy we deploy — I've tested it personally before we ever ran it for a client. That's the standard I hold the team to.
              </p>
              <div className="flex flex-wrap gap-5">
                <div className="bg-white border border-[#E5E5E2] rounded-[12px] p-4 min-w-[120px]">
                  <div className="font-syne font-[800] text-2xl text-black leading-none mb-1">$2.4M+</div>
                  <div className="text-[12px] text-[#9A9A9A]">GMV Generated</div>
                </div>
                <div className="bg-white border border-[#E5E5E2] rounded-[12px] p-4 min-w-[120px]">
                  <div className="font-syne font-[800] text-2xl text-black leading-none mb-1">890+</div>
                  <div className="text-[12px] text-[#9A9A9A]">Brands Scaled</div>
                </div>
                <div className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-[12px] p-4 min-w-[120px]">
                  <div className="font-syne font-[800] text-2xl text-[#0D0D0D] leading-none mb-1">1</div>
                  <div className="text-[12px] text-[#9A9A9A]">Platform. Always.</div>
                </div>
              </div>
            </div>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]">
            {[
              { emoji: "👤", border: "border-[#D4B483]", name: "Founder", role: "FOUNDER & STRATEGY LEAD", bio: "Built TikShopScale after running TikTok Shop accounts independently and seeing the same fixable mistakes costing brands millions. Obsessed with the platform's commercial mechanics." },
              { emoji: "🎬", border: "border-[#E5E5E2]", name: "Creative Director", role: "UGC & HOOK STRATEGY", bio: "Responsible for every hook framework and creative brief we produce. Has personally overseen 500+ TikTok Shop creatives and knows exactly why some sell and most don't." },
              { emoji: "👥", border: "border-[#E5E5E2]", name: "Creator Lead", role: "AFFILIATE & CREATOR NETWORK", bio: "Manages our entire creator pipeline — sourcing, vetting, outreach, onboarding, and retention. Has built affiliate networks of 300+ creators for single clients." },
              { emoji: "📊", border: "border-[#E5E5E2]", name: "Paid Media Lead", role: "SPARK ADS & PERFORMANCE", bio: "Has managed $2M+ in TikTok ad spend. Builds every paid strategy from TikTok's native mechanics — never a copy-paste from Meta or Google." }
            ].map((member, i) => (
              <div key={i} className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-[18px] p-[28px_22px] text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-[5px]">
                <div className={`w-[72px] h-[72px] rounded-full bg-[#0D0D0D] border-[3px] ${member.border} flex items-center justify-center text-[32px] mx-auto mb-4`}>
                  {member.emoji}
                </div>
                <h4 className="font-syne font-[800] text-[16px] text-[#0D0D0D] mb-1">{member.name}</h4>
                <div className="text-[12px] font-[700] tracking-[1.5px] uppercase text-[#0D0D0D] mb-2.5 leading-tight">{member.role}</div>
                <p className="text-[13px] text-[#5C5C5C] leading-[1.65]">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* NOTE */}
          <div className="mt-8 bg-[#F5EDE3] border border-[#D4B483]/30 rounded-[14px] p-[22px_28px] flex items-center gap-4">
            <span className="text-[28px]">📝</span>
            <p className="text-[14px] text-black leading-[1.65]">
              <span className="font-bold">Note on team photos:</span> We'll update this section with real names and photos as the team grows. For now — know that every person listed is real, active, and working on client accounts every single day. No headcount padding, no offshore outsourcing we don't tell you about.
            </p>
          </div>
        </div>
      </section>

      {/* 10 — FINAL CTA SECTION */}
      <section id="contact" className="cta-section relative bg-[#0D0D0D] pt-[100px] pb-[100px] px-8 text-center overflow-hidden">
        <div className="relative z-10">
          <FadeIn>
            <span className="font-syne font-[700] text-[11.5px] text-[#F5EDE3] tracking-[3px] uppercase block mb-[10px]">
              SOUND LIKE THE RIGHT FIT?
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-syne font-[800] text-[clamp(30px,5vw,54px)] text-white leading-[1.08] mb-[16px]">
              Let's have an honest conversation about <TapeLabel className="inline-block px-3 py-1 mt-2 rotate-[-1.5deg] origin-left bg-[#F5EDE3] text-[#0D0D0D] mx-1 transition-transform duration-500 hover:rotate-0">your brand.</TapeLabel>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[17px] text-[rgba(255,255,255,0.45)] max-w-[480px] mx-auto mb-[40px]">
              No pitch deck. No hard sell. Book a free 20-minute call and we'll tell you exactly what we think — including if TikTok Shop isn't the right move for you right now.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact">
                <button className="bg-[#0D0D0D] hover:bg-[#2E2E2E] text-white px-10 py-4 rounded-[10px] font-[700] text-[16px] transition-all duration-300 hover:-translate-y-1">
                  Book a Free 20-Min Call →
                </button>
              </Link>
              <Link to="/case-studies" className="text-[rgba(255,255,255,0.45)] text-[15px] px-6 py-4 hover:text-white transition-colors duration-300">
                See Our Results First
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-[12.5px] text-[rgba(255,255,255,0.25)] mt-[24px]">
              No commitment · We'll review your brand before the call · Honest advice guaranteed
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default About;
