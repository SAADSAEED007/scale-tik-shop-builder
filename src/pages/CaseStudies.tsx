import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TapeLabel from "@/components/TapeLabel";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

const filters = ["All", "UGC", "Ads", "Affiliate", "Ops"];

const studies = [
  {
    title: "Beauty Brand Blowup",
    tag: "UGC",
    overview: "A fast-growing beauty brand needed to break through on TikTok Shop with creator-driven content and a scalable affiliate strategy.",
    problem: "Low organic reach, no creator relationships, and zero TikTok Shop presence despite strong DTC sales.",
    solution: "We launched a full creator seeding program, produced 40+ UGC assets, and optimized their shop listings for conversion.",
    metrics: ["+340% GMV in 60 days", "42 creators activated", "3.8x ROAS on Spark Ads", "18% conversion rate on top SKU", "$127K total attributed revenue"],
  },
  {
    title: "Supplement Scale",
    tag: "Ads",
    overview: "A supplement brand wanted to profitably scale TikTok ads with a performance creative testing framework.",
    problem: "Previous ad spend was unprofitable. Creative fatigue hit quickly and there was no testing system in place.",
    solution: "We built a weekly creative testing pipeline, launched Spark Ads from top-performing organic content, and optimized bidding strategy.",
    metrics: ["4.2x ROAS on Spark Ads", "60+ creatives tested", "$89K monthly ad spend managed", "22% decrease in CPA", "3 winning hooks identified"],
  },
  {
    title: "Fashion Affiliate Engine",
    tag: "Affiliate",
    overview: "A mid-size fashion brand wanted to build a self-sustaining affiliate program that would drive consistent TikTok Shop sales.",
    problem: "No creator relationships, no affiliate infrastructure, and products weren't optimized for TikTok's algorithm.",
    solution: "We built the affiliate program from scratch, onboarded 120+ creators, and created incentive structures that drove consistent posting.",
    metrics: ["120+ creators activated", "$210K GMV in 90 days", "35% month-over-month growth", "8.4% average commission rate", "400+ affiliate videos posted"],
  },
  {
    title: "Live Shopping Launch",
    tag: "Ops",
    overview: "An electronics accessories brand wanted to test live shopping as a new revenue channel on TikTok Shop.",
    problem: "No live selling experience, no hosts, and no playbook for engaging TikTok's live shopping audience.",
    solution: "We developed a complete live shopping strategy, recruited and trained hosts, and ran bi-weekly live events.",
    metrics: ["$48K first live event", "12 live sessions in first month", "2,400 avg concurrent viewers", "6.2% live conversion rate", "$180K total live revenue in Q1"],
  },
];

const CaseStudies = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? studies : studies.filter((s) => s.tag === active);

  return (
    <div>
      <section className="py-20 md:py-28 bg-card">
        <div className="container max-w-3xl text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <TapeLabel>Case Studies</TapeLabel>
            </h1>
            <p className="text-lg text-muted-foreground">Real results from real brands. Here's what happens when strategy meets execution.</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                  active === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-foreground/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {filtered.map((cs) => (
              <FadeIn key={cs.title}>
                <div className="border border-border rounded-lg p-8 md:p-10 bg-card">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-muted">{cs.tag}</span>
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight mt-4 mb-4">{cs.title}</h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-bold mb-1">Overview</h4>
                      <p className="text-sm text-muted-foreground">{cs.overview}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1">The Problem</h4>
                      <p className="text-sm text-muted-foreground">{cs.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold mb-1">What We Did</h4>
                      <p className="text-sm text-muted-foreground">{cs.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold mb-3">Results</h4>
                    <div className="flex flex-wrap gap-3">
                      {cs.metrics.map((m) => (
                        <span key={m} className="tape-label text-sm font-bold px-3 py-1.5" style={{ transform: "none" }}>
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded bg-muted/50 border border-border">
                    <p className="text-xs text-muted-foreground italic">Creative examples coming soon — stay tuned.</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="text-center mt-16">
            <FadeIn>
              <h3 className="text-2xl font-black mb-4">Want results like these?</h3>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="gap-2">
                  Book a Free Audit <ArrowRight size={16} />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
