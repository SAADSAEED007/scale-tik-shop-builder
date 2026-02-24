import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TapeLabel from "@/components/TapeLabel";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Zap, FlaskConical, Users, DollarSign } from "lucide-react";

const values = [
  { icon: Zap, title: "Speed", desc: "We move fast because TikTok moves faster. Weekly sprints, not quarterly plans." },
  { icon: FlaskConical, title: "Testing", desc: "Every creative, hook, and strategy gets tested. Data drives every decision." },
  { icon: Users, title: "Creator-First", desc: "Creators are the engine. We build systems that keep them posting and selling." },
  { icon: DollarSign, title: "Profit-First", desc: "Vanity metrics are noise. We optimize for GMV, ROAS, and actual revenue." },
];

const team = [
  { name: "Founder", role: "Strategy & Growth" },
  { name: "Head of Creative", role: "UGC & Content Direction" },
  { name: "Ads Lead", role: "Spark Ads & Performance" },
  { name: "Creator Manager", role: "Affiliates & Partnerships" },
];

const About = () => (
  <div>
    <section className="pt-52 pb-16 md:pt-64 md:pb-24 bg-card">
      <div className="container max-w-3xl text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            We help brands <TapeLabel>win</TapeLabel> on TikTok Shop
          </h1>
          <p className="text-lg text-muted-foreground">
            Scale Tik Shop is a performance-first agency built specifically for TikTok commerce. We combine creator strategy, paid media, and shop operations to drive real revenue — not just views.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-12">
            Our <TapeLabel>values</TapeLabel>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.05}>
              <div className="p-6 rounded-lg border border-border bg-card">
                <v.icon className="mb-3" size={28} strokeWidth={1.5} />
                <h3 className="text-lg font-bold mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-card">
      <div className="container max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-12">
            The <TapeLabel>team</TapeLabel>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.05}>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-muted mb-4" />
                <h3 className="font-bold text-sm">{t.name}</h3>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-primary text-primary-foreground text-center">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Let's build something big.</h2>
          <Link to="/contact">
            <Button variant="hero-secondary" size="lg" className="gap-2 mt-2">
              Book a Call <ArrowRight size={16} />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  </div>
);

export default About;
