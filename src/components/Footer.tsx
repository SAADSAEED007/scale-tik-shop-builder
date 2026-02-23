import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import footerLogo from "@/assets/footer_logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Branding Section */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 group transition-all duration-300 active:scale-95 w-fit">
            <div className="relative h-12 w-12 md:h-20 md:w-20 flex items-center justify-center transition-all duration-500">
              <img src={footerLogo} alt="TikShop Scale" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-heading font-black text-xl md:text-2xl tracking-tighter text-primary-foreground whitespace-nowrap leading-none">
                TikShop
              </span>
              <span className="font-heading font-bold text-[0.7rem] md:text-[0.8rem] uppercase tracking-[0.2em] text-primary-foreground/40 group-hover:text-primary-foreground transition-all duration-500">
                Scale
              </span>
            </div>
          </Link>
          <p className="text-sm text-primary-foreground/60 max-w-xs leading-relaxed">
            Leading performance agency for TikTok Shop growth. We combine data-driven strategy with scroll-stopping creative to scale your brand.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary-foreground/30">Navigation</h4>
          <nav className="flex flex-col gap-3 text-sm text-primary-foreground/60 font-medium">
            <Link to="/services" className="hover:text-primary-foreground transition-colors w-fit">Services</Link>
            <Link to="/case-studies" className="hover:text-primary-foreground transition-colors w-fit">Case Studies</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors w-fit">About</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors w-fit">Contact</Link>
          </nav>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-6">
          <h4 className="font-bold text-sm uppercase tracking-widest text-primary-foreground/30">Connect</h4>
          <div className="flex gap-4">
            {[
              { icon: Twitter, href: "#", label: "X" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Facebook, href: "#", label: "Facebook" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-primary-foreground/5 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10 hover:scale-110 active:scale-95 transition-all duration-300 border border-primary-foreground/5 shadow-sm"
                aria-label={s.label}
              >
                <s.icon size={18} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-primary-foreground/5 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© {new Date().getFullYear()} Scale Tik Shop. All rights reserved.</span>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
