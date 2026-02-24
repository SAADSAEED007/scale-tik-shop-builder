import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import footerLogo from "@/assets/footer_logo.png";
import clutchLogo from "@/assets/clutch_brand logo.png";
import tiktokLogo from "@/assets/tiktokshop_brand logo.png";
import trustpilotLogo from "@/assets/trustpilot_brand logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-[#F5EDE3] text-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Branding Section */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 group transition-all duration-300 active:scale-95 w-fit">
            <div className="relative h-16 w-16 md:h-24 md:w-24 flex items-center justify-center transition-all duration-500">
              <img src={footerLogo} alt="TikShop Scale" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-heading font-black text-xl md:text-2xl tracking-tighter text-foreground whitespace-nowrap leading-none">
                TikShop
              </span>
              <span className="font-heading font-bold text-[0.7rem] md:text-[0.8rem] uppercase tracking-[0.2em] text-foreground/40 group-hover:text-primary transition-all duration-500">
                Scale
              </span>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            Leading performance agency for TikTok Shop growth. We combine data-driven strategy with scroll-stopping creative to scale your brand.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-muted-foreground/30">Navigation</h4>
          <nav className="flex flex-col gap-3 text-sm text-muted-foreground font-medium">
            <Link to="/services" className="hover:text-primary transition-colors w-fit">Services</Link>
            <Link to="/case-studies" className="hover:text-primary transition-colors w-fit">Case Studies</Link>
            <Link to="/about" className="hover:text-primary transition-colors w-fit">About</Link>
            <Link to="/contact" className="hover:text-primary transition-colors w-fit">Contact</Link>
          </nav>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-sm uppercase tracking-widest text-muted-foreground/30">Connect</h4>
          <div className="flex gap-4">
            {[
              { icon: X, href: "#", label: "X" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Facebook, href: "#", label: "Facebook" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-primary/5 text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 active:scale-95 transition-all duration-300 border border-primary/5 shadow-sm"
                aria-label={s.label}
              >
                <s.icon size={18} strokeWidth={2} />
              </a>
            ))}
          </div>
          <a href="mailto:info@tikshopscale.com" className="text-sm font-bold text-foreground hover:text-primary transition-colors w-fit pt-2">
            info@tikshopscale.com
          </a>

          {/* Brand Logos */}
          <div className="flex flex-nowrap items-center gap-4 md:gap-5 pt-8">
            <img
              src={tiktokLogo}
              alt="TikTok Shop Partner"
              className="h-10 md:h-12 w-auto hover:scale-105 transition-all duration-500 object-contain flex-shrink-0"
              loading="lazy"
            />
            <img
              src={clutchLogo}
              alt="Clutch"
              className="h-12 md:h-16 w-auto hover:scale-105 transition-all duration-500 object-contain flex-shrink-0"
              loading="lazy"
            />
            <img
              src={trustpilotLogo}
              alt="Trustpilot"
              className="h-10 md:h-12 w-auto hover:scale-105 transition-all duration-500 object-contain flex-shrink-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>



      <div className="mt-12 pt-6 border-t border-border/50 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-foreground">© 2023-2026 Scale Tik Shop. All rights reserved.</span>
        <div className="flex gap-8">
          <Link to="/privacy" className="text-foreground hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-foreground hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
