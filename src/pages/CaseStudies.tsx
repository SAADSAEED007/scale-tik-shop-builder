import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import TapeLabel from "@/components/TapeLabel";
import CaseStudiesTicker from "@/components/CaseStudiesTicker";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  TrendingUp,
  Clock,
  Target,
  ArrowUpRight,
  User,
  Quote
} from "lucide-react";

interface CaseStudy {
  id: string;
  category: string;
  stage: string;
  service: string;
  title: string;
  problem: string;
  stats: { value: string; label: string }[];
  quote: string;
  author: string;
  role: string;
}

const studies: CaseStudy[] = [
  {
    id: "beauty-1",
    category: "beauty",
    stage: "scaling",
    service: "ads",
    title: "Meta was 2x ROAS. TikTok hit 6.8x by week three.",
    problem: "This brand was spending $8K/mo on Meta ads with mediocre returns. They were sceptical about TikTok but agreed to a 30-day test. We rebuilt their entire ad strategy for TikTok's native ecosystem — not a copy-paste from Meta.",
    stats: [
      { value: "6.8x", label: "ROAS achieved" },
      { value: "3 wks", label: "Time to 6x ROAS" },
      { value: "-40%", label: "CPA vs Meta" }
    ],
    quote: "We were on Meta with 2x ROAS. TikTok with their system hit 6.8x in week three. I wish we'd switched sooner.",
    author: "Skincare Brand",
    role: "US"
  },
  {
    id: "fashion-1",
    category: "fashion",
    stage: "new-launch",
    service: "creators",
    title: "$47K/month in 6 weeks. Zero TikTok presence to start.",
    problem: "Brand had been on TikTok Shop for months with no traction and a single listing that wasn't converting. After a full shop audit and creator pipeline launch, monthly GMV jumped from near-zero to $47K in 6 weeks.",
    stats: [
      { value: "$47K", label: "Monthly GMV" },
      { value: "6 wks", label: "Time to result" },
      { value: "89", label: "Active affiliates" }
    ],
    quote: "Months of nothing, then suddenly everything clicked. The shop audit alone found things I never would have caught.",
    author: "Fashion Brand",
    role: "UK"
  },
  {
    id: "health-1",
    category: "health",
    stage: "scaling",
    service: "live",
    title: "First live session. $14K revenue. 2 hours.",
    problem: "This health brand had never done a live session. They thought live shopping was 'not for their category.' We sourced and trained a host, scripted the full session, and set up countdown mechanics. First live generated $14K.",
    stats: [
      { value: "$14K", label: "First session revenue" },
      { value: "2 hrs", label: "Session length" },
      { value: "4.1x", label: "Session ROAS" }
    ],
    quote: "I thought live wasn't for us. First session did $14K. We now go live twice a week.",
    author: "Health Brand",
    role: "US"
  },
  {
    id: "home-1",
    category: "home",
    stage: "new-launch",
    service: "setup",
    title: "Listing audit found $18K/mo in recoverable GMV. Before a single ad.",
    problem: "Home goods brand with strong products but a broken shop structure. Wrong categories, missing attributes, images that didn't follow TikTok's algorithm preferences. A full listing audit and rebuild before any paid spend increased organic visibility by 340%.",
    stats: [
      { value: "+340%", label: "Organic visibility" },
      { value: "$18K", label: "Recovered GMV/mo" },
      { value: "2 wks", label: "Audit to live" }
    ],
    quote: "They found 6 things wrong in the first audit call. I'd had the shop running for 4 months and had no idea.",
    author: "Home Goods Brand",
    role: "AU"
  },
  {
    id: "beauty-2",
    category: "beauty",
    stage: "scaling",
    service: "creators",
    title: "Top 20 creators retained. 42% of GMV for 4 straight months.",
    problem: "Brand had built an affiliate network but creators kept going quiet after their first post. High churn meant constant recruitment cost. We built a tiered incentive structure and retention programme — top 20 creators stayed active and drove 42% of GMV consistently.",
    stats: [
      { value: "42%", label: "GMV from top 20" },
      { value: "4 mo", label: "Consistent output" },
      { value: "-60%", label: "Creator churn rate" }
    ],
    quote: "We used to lose creators after one post. Now our top 20 feel like part of the team. The revenue consistency changed everything.",
    author: "Skincare Brand",
    role: "CA"
  },
  {
    id: "health-2",
    category: "health",
    stage: "scaling",
    service: "ops",
    title: "Cut 3 SKUs. Monthly profit up 38% in 30 days.",
    problem: "Health brand at $60K/mo GMV that couldn't figure out why profit felt low. Weekly reporting identified 3 slow-moving SKUs consuming 22% of margin with zero ROI on their ad spend.",
    stats: [
      { value: "+38%", label: "Monthly profit" },
      { value: "30 days", label: "Time to result" },
      { value: "3", label: "SKUs identified" }
    ],
    quote: "Revenue looked great. Profit felt wrong. They found out why in week two. I hadn't looked at SKU-level data like that before.",
    author: "Health & Wellness Brand",
    role: "US"
  }
];

const CaseStudies = () => {
  return (
    <div className="bg-[#F7F7F5] min-h-screen font-body text-[#0D0D0D]">
      {/* SECTION 1 — HERO */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-24 bg-white relative overflow-hidden text-center">
        {/* Subtle radial beige glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#F5EDE3_0%,_transparent_70%)] opacity-40 pointer-events-none" />

        <div className="container max-w-[1240px] mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="inline-block px-5 py-2.5 rounded-full bg-black/5 backdrop-blur-md border border-neutral-200/50 mb-10 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
              <span className="font-heading text-[12px] md:text-[14px] font-black tracking-[0.1em] text-black uppercase block">
                Updated with <TapeLabel className="inline-block px-2 py-0.5 bg-[#F5EDE3] shadow-sm text-black rounded-sm mx-1">latest results</TapeLabel>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tighter leading-[1.1] text-neutral-900 mb-8 max-w-4xl mx-auto">
              Real Brands. <br className="hidden md:block" />
              <TapeLabel className="inline-block px-4 py-1 rotate-[-2deg] origin-left bg-[#F5EDE3] shadow-sm transform hover:rotate-0 transition-transform duration-500 text-black">
                Real Numbers.
              </TapeLabel> <br className="hidden md:block" />
              <span className="text-black font-black text-[clamp(24px,4vw,48px)]">No Fluff.</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-500 font-medium max-w-xl mx-auto leading-relaxed mb-12">
              Every case study below is a real brand we worked with. We show you the starting point, what we did, and exactly what changed.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 — TICKER */}
      <CaseStudiesTicker />


      <div className="py-24 md:py-32">
        <div className="container max-w-[1060px] mx-auto px-4">
          {/* SECTION 4 — FEATURED CASE STUDY */}
          <FadeIn>
            <div className="bg-white border border-[#E5E5E2] rounded-[22px] overflow-hidden shadow-md mb-24 group">
              {/* TOP SECTION (dark header) */}
              <div className="bg-[#0D0D0D] p-10 md:p-14 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#D4B48310_0%,_transparent_60%)] opacity-50" />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 relative z-10">
                  <div>
                    <span className="text-[#F5EDE3] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-4 block">
                      ✦ FEATURED CASE STUDY
                    </span>
                    <h2 className="text-3xl md:text-[44px] font-black font-heading text-white tracking-tighter leading-[1] mb-8">
                      From $800/month to $23K <br className="hidden md:block" />
                      — in 60 days flat
                    </h2>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest border border-white/5">💄 Beauty Accessories</span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest border border-white/5">📍 US Brand</span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest border border-white/5">🚀 New to TikTok Shop</span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest border border-white/5">🛠 Creator Seeding + Spark Ads</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 results-stats-grid">
                    {[
                      { val: "+2,775%", label: "GMV Growth" },
                      { val: "60 Days", label: "Time to Result" },
                      { val: "6.4x", label: "ROAS" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-[#F5EDE3] p-4 rounded-xl min-w-[140px] text-center shadow-sm border border-[#E5E5E2]/50">
                        <div className="text-2xl font-black font-heading text-[#0D0D0D] leading-none mb-1">{stat.val}</div>
                        <div className="text-[10px] font-black text-[#0D0D0D]/60 uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BODY SECTION */}
              <div className="p-10 md:p-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                  <div>
                    <h4 className="text-[11px] font-black text-[#0D0D0D] uppercase tracking-widest mb-6">THE PROBLEM:</h4>
                    <p className="text-[#5C5C5C] text-lg leading-relaxed font-medium">
                      This brand had been live on TikTok Shop for 3 months with zero traction — fewer than 20 orders a week, no creator strategy, and was running ads straight to cold traffic with no organic foundation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-[#0D0D0D] uppercase tracking-widest mb-6">WHY IT WASN'T WORKING:</h4>
                    <p className="text-[#5C5C5C] text-lg leading-relaxed font-medium">
                      The shop had 4 listing titles in the wrong category — which completely killed algorithm visibility. No affiliate recruitment meant no organic reach. And their ads were Meta-style creative.
                    </p>
                  </div>
                </div>

                <div className="mb-20">
                  <h4 className="text-[11px] font-black text-[#0D0D0D] uppercase tracking-widest mb-8">WHAT WE DID:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Audited every listing", desc: "fixed 4 category mismatches, rewrote titles and descriptions with SEO keywords." },
                      { title: "Recruited 47 creators", desc: "sent samples, briefed each with hook-first scripts tailored to their audience." },
                      { title: "Tested 3 hook variants", desc: "identified the winning angle by day 12 of the creative cycle." },
                      { title: "Launched Spark Ads", desc: "scaled from $800/day to $2,400/day by week 5 with 6x+ ROAS." },
                      { title: "Expanded network", desc: "reached 140 creators by week 6 — affiliate sales reached 58% of GMV." }
                    ].map((step, i) => (
                      <div key={i} className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-2xl p-6 hover:border-[#D4B483]/30 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 rounded-full bg-[#F5EDE3] flex items-center justify-center text-[#0D0D0D] text-sm font-black shrink-0 border border-[#E5E5E2]/50">{i + 1}</div>
                          <div>
                            <h5 className="font-black text-[#0D0D0D] mb-2">{step.title}</h5>
                            <p className="text-sm text-[#5C5C5C] leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-20">
                  <h4 className="text-[11px] font-black text-[#0D0D0D] uppercase tracking-widest mb-8">TIMELINE:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 border border-[#E5E5E2] rounded-2xl overflow-hidden bg-[#F7F7F5]">
                    {[
                      { week: "Week 1", action: "Shop audit + fixed listings" },
                      { week: "Week 1–2", action: "Creator recruitment" },
                      { week: "Week 2–3", action: "Content live + testing" },
                      { week: "Week 3–4", action: "Spark Ads launched" },
                      { week: "Week 5–6", action: "Affiliate scale + $23K" }
                    ].map((t, i) => (
                      <div key={i} className="p-6 border-r border-[#E5E5E2] last:border-0 hover:bg-black/5 transition-colors">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#F5EDE3] border border-[#E5E5E2]/50 text-[10px] font-black text-[#0D0D0D] uppercase tracking-widest mb-3">{t.week}</div>
                        <div className="text-sm font-bold text-[#5C5C5C] leading-tight">{t.action}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-20">
                  <h4 className="text-[11px] font-black text-[#0D0D0D] uppercase tracking-widest mb-8">RESULTS:</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full rounded-2xl overflow-hidden border-collapse text-left">
                      <thead>
                        <tr className="bg-[#0D0D0D]">
                          <th className="px-8 py-5 text-[11px] font-black text-white/50 uppercase tracking-widest">METRIC</th>
                          <th className="px-8 py-5 text-[11px] font-black text-white/50 uppercase tracking-widest">BEFORE</th>
                          <th className="px-8 py-5 text-[11px] font-black text-white/50 uppercase tracking-widest">AFTER</th>
                          <th className="px-8 py-5 text-[11px] font-black text-white/50 uppercase tracking-widest text-right">TIMEFRAME</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { m: "Monthly GMV", b: "$800/mo", a: "$23,400/mo", t: "60 days" },
                          { m: "Weekly Orders", b: "~18/week", a: "340+/week", t: "60 days" },
                          { m: "Active Affiliates", b: "0", a: "140", t: "6 weeks" },
                          { m: "Paid ROAS", b: "1.4x", a: "6.4x", t: "30 days" },
                          { m: "Affiliate % of GMV", b: "0%", a: "58%", t: "6 weeks" }
                        ].map((row, i) => (
                          <tr key={i} className="bg-[#F7F7F5] border-t border-[#E5E5E2] first:border-t-0 hover:bg-white/40 transition-colors">
                            <td className="px-8 py-5 text-sm font-black text-[#0D0D0D]">{row.m}</td>
                            <td className="px-8 py-5 text-sm font-bold text-[#5C5C5C]">{row.b}</td>
                            <td className="px-8 py-5 text-sm font-black text-[#16A34A]">{row.a}</td>
                            <td className="px-8 py-5 text-sm font-bold text-[#5C5C5C] text-right">{row.t}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-[#F5EDE3] border border-[#D4B483]/30 rounded-2xl p-10 mb-16 relative overflow-hidden">
                  <Quote size={48} className="absolute -top-4 -left-4 text-[#D4B483]/10" />
                  <p className="text-xl md:text-2xl font-medium text-black leading-relaxed mb-8 relative z-10">
                    "I was ready to quit TikTok Shop before finding them. Within 60 days I had more orders than I knew what to do with. The creator setup alone changed everything — I didn't realise I'd been doing it completely wrong."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0D0D0D] flex items-center justify-center text-white text-xl">👩</div>
                    <div>
                      <div className="font-black text-black">Sarah K.</div>
                      <div className="text-xs font-bold text-[#D4B483] uppercase tracking-widest">Beauty Accessories Brand, US</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 hero-buttons">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button className="w-full bg-[#0D0D0D] text-white hover:bg-neutral-800 rounded-full px-10 py-7 text-lg font-black transition-all hover:scale-105 shadow-xl">
                      Get Results Like This <ArrowRight size={20} className="ml-2" />
                    </Button>
                  </Link>
                  <span className="text-sm font-bold text-[#9A9A9A] uppercase tracking-widest">Free Audit call — no commitment required</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* SECTION 5 — MORE RESULTS GRID */}
          <div className="flex items-center gap-8 mb-16">
            <span className="text-[11px] font-black text-[#9A9A9A] uppercase tracking-widest shrink-0">MORE RESULTS</span>
            <div className="h-px bg-[#E5E5E2] w-full" />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}
          >
            {studies.map((study) => (
              <div key={study.id} className="bg-white border border-[#E5E5E2] rounded-[18px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 flex flex-col h-full relative group">
                {/* Category bar color */}
                <div
                  className="h-1 w-full"
                  style={{
                    backgroundColor:
                      study.category === "beauty" ? "#F9A8D4" :
                        study.category === "health" ? "#86EFAC" :
                          study.category === "fashion" ? "#93C5FD" : "#FCA5A5"
                  }}
                />

                <div className="p-8 pb-4 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2 py-0.5 rounded-md bg-[#F7F7F5] border border-[#E5E5E2] text-[9px] font-black text-[#5C5C5C] uppercase tracking-widest">
                      {study.category === "beauty" ? "💄" : study.category === "health" ? "💊" : study.category === "fashion" ? "👗" : "🏠"} {study.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#F5EDE3] text-[9px] font-black text-black uppercase tracking-widest">
                      {study.stage.replace("-", " ")}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#EDE9FE] text-[9px] font-black text-[#5B21B6] uppercase tracking-widest">
                      {study.service === "ads" ? "Spark Ads" : study.service === "creators" ? "Creator Seeding" : study.service === "live" ? "Live Shopping" : study.service === "setup" ? "Shop Setup" : study.service}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black font-heading tracking-tight leading-tight mb-6 text-[#0D0D0D]">
                    "{study.title}"
                  </h3>

                  <p className="text-sm text-[#5C5C5C] font-medium leading-relaxed mb-8">
                    {study.problem}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mb-8">
                    {study.stats.map((s, i) => (
                      <div key={i} className="bg-[#F7F7F5] border border-[#E5E5E2] rounded-lg p-3 text-center">
                        <div className={`text-base font-black font-heading ${i === 0 ? "text-[#16A34A]" : "text-[#0D0D0D]"}`}>{s.value}</div>
                        <div className="text-[9px] font-black text-[#9A9A9A] uppercase leading-none mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="italic text-sm text-[#5C5C5C] leading-snug p-4 bg-[#F7F7F5] border-l-[3px] border-[#D4B483] rounded-r-lg mb-8">
                    "{study.quote}"
                  </div>
                </div>

                <div className="px-8 py-6 bg-[#fcfcfc] border-t border-neutral-50 flex items-center justify-between">
                  <span className="text-[10px] font-black text-[#9A9A9A] uppercase tracking-widest">{study.author} · {study.role}</span>
                  <Link to="/contact" className="text-[11px] font-black text-[#0D0D0D] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                    Get similar results <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 6 — TRANSPARENCY / HONEST SECTION */}
        <section className="mt-40 mb-32">
          <div className="container max-w-[1100px] mx-auto px-4">
            <FadeIn>
              <div className="bg-[#0D0D0D] rounded-[2rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#D4B48310_0%,_transparent_60%)] opacity-50" />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-16 relative z-10">
                  <div>
                    <span className="text-[#F5EDE3] font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-6 block">
                      A NOTE ON TRANSPARENCY
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black font-heading text-white tracking-tighter mb-10 leading-[1.1]">
                      We don’t chase volume. <br className="hidden md:block" />
                      <TapeLabel className="inline-block px-3 py-1 bg-[#F5EDE3] text-black shadow-sm transform rotate-[1deg] mt-2">We build real results.</TapeLabel>
                    </h2>

                    <div className="space-y-8 max-w-lg">
                      <p className="text-white/50 text-xl font-medium leading-relaxed">
                        We’re selective about who we partner with. <br />
                        We would rather deeply scale 10 brands than lightly touch 50.
                      </p>

                      <p className="text-white/50 text-xl font-medium leading-relaxed">
                        Every case study here represents focused execution, full team attention, and strategy built around long-term growth, not quick wins.
                      </p>

                      <p className="text-white/50 text-xl font-medium leading-relaxed">
                        This approach does not scale wide. <br />
                        <span className="text-white">It scales results.</span>
                      </p>
                    </div>

                    <p className="text-white/25 text-[11px] font-bold mt-12 uppercase tracking-widest italic">
                      📝 Note: Some client names are anonymised by request.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { val: "100%", title: "TikTok Shop only", sub: "Not splitting our focus across 6 platforms" },
                      { val: "60d", title: "Average time to meaningful results", sub: "Not 6 months. Most clients see traction in 4–6 weeks." },
                      { val: "0", title: "Lock-in contracts", sub: "We earn your business every month. Cancel anytime." }
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex items-start gap-6 hover:bg-white/10 transition-colors">
                        <div className="text-4xl font-black font-heading text-[#F5EDE3] leading-none">{item.val}</div>
                        <div>
                          <h4 className="text-white text-base font-black mb-2 leading-none uppercase tracking-widest">{item.title}</h4>
                          <p className="text-white/40 text-sm font-medium leading-snug">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 7 — BOTTOM CTA */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container max-w-[860px] mx-auto px-4">
            <FadeIn>
              <div className="bg-[#0D0D0D] rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl group">
                {/* Subtle radial beige glow behind */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4B48310_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="relative z-10">
                  <span className="text-white font-heading font-black text-[11px] uppercase tracking-[0.2em] mb-6 block">
                    READY TO BE THE NEXT CASE STUDY?
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black font-heading text-white tracking-tighter mb-8 leading-[1.1]">
                    Tell us your situation. <br />
                    We'll tell you <TapeLabel className="inline-block px-3 py-0.5 bg-[#F5EDE3] text-black shadow-sm transform rotate-[1deg]">what's possible.</TapeLabel>
                  </h3>
                  <p className="text-white/50 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto leading-relaxed">
                    Book a Free Audit Call. We'll look at your brand, ask the right questions, and give you an honest view of what TikTok Shop can do for you — no pitch, no pressure.
                  </p>

                  <div className="flex flex-col items-center gap-6 hero-buttons">
                    <Link to="/contact" className="w-full sm:w-auto">
                      <Button className="w-full bg-[#F5EDE3] text-black hover:bg-white rounded-full px-10 py-8 text-xl font-black transition-all hover:scale-105 shadow-xl">
                        Book a Free Audit Call <ArrowRight size={24} className="ml-2" />
                      </Button>
                    </Link>
                    <Link to="/services" className="text-white/50 hover:text-white text-sm font-bold transition-colors">
                      View Our Services
                    </Link>
                  </div>

                  <p className="text-white/25 text-[11px] font-bold mt-12 uppercase tracking-widest">
                    No commitment · We'll review your brand before the call · Spots are limited
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudies;
