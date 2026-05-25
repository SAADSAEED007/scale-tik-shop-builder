import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import navLogo from "@/assets/nav_logo.webp";
import navLogo84 from "@/assets/nav_logo-84.webp";
import tiktokShopLogo from "@/assets/tiktokshop_brand logo.png";

// X SVG component for reusable parts
const XIcon = ({ className = "w-6 h-6", fill = "white" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// TikTok SVG component
const TikTokIcon = ({ className = "w-6 h-6", fill = "white" }) => (
  <svg className={className} viewBox="0 0 24 24" fill={fill}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
  </svg>
);

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains("dark-mode");
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDarkMode;
    setIsDarkMode(newIsDark);
    if (newIsDark) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer relative bg-[var(--footer-bg)] text-[var(--site-text)] overflow-hidden border-t border-[var(--card-border)] transition-colors duration-300">
      <style>{`
        .footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, var(--site-text) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          opacity: 0.05;
          z-index: 0;
        }
        .footer-content {
          position: relative;
          z-index: 1;
        }
        .nav-link {
          transition: all 0.2s ease;
        }
        .nav-link:hover {
          padding-left: 4px;
        }
        body.dark-mode .footer::before {
          opacity: 0.08;
        }
      `}</style>

      <div className="footer-content container max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-[72px] pb-10 sm:pb-12 md:pb-[56px]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center md:items-start gap-10 sm:gap-12 md:gap-[56px] lg:gap-0 text-center md:text-left">
          {/* COLUMN 1 BRAND COLUMN */}
          <div className="flex flex-col items-center md:items-start lg:max-w-[300px] mt-2">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-1 group transition-all duration-300 active:scale-95 mb-[20px] md:-ml-2 pb-2"
            >
              <div className="relative h-16 w-16 flex items-center justify-center transition-all duration-500">
                <img
                  src={navLogo}
                  srcSet={`${navLogo84} 84w, ${navLogo} 1536w`}
                  sizes="(max-width: 768px) 84px, 168px"
                  alt="TikShop Scale"
                  loading="lazy"
                  width="1536"
                  height="1024"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 object-contain filter drop-shadow-sm max-w-none dark-mode-logo transition-all duration-300"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-heading font-black text-[24px] tracking-tighter text-[var(--site-text)] leading-none transition-colors">
                  TikShop
                </span>
                <span className="font-heading font-bold text-[0.85rem] uppercase tracking-[0.2em] text-[var(--muted-text)] group-hover:text-[var(--site-text)] transition-all duration-500 transition-colors">
                  Scale
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-[14px] text-[var(--muted-text)] leading-[1.75] mb-[24px] font-medium transition-colors">
              TikTok Shop is all we do. That's why we're better at it than anyone who doesn't.
            </p>

            {/* Social Buttons */}
            <div className="flex justify-center md:justify-start gap-[10px] mb-[28px]">
              {[
                { icon: <XIcon className="w-[18px] h-[18px]" fill="white" />, label: "X", href: "https://x.com/tikshopscale", bg: "#000000" },
                { icon: <Linkedin size={18} strokeWidth={2.5} />, label: "LinkedIn", href: "https://www.linkedin.com/company/tikshop-scale/", bg: "#0A66C2" },
                { icon: <Instagram size={18} strokeWidth={2.5} />, label: "Instagram", href: "https://www.instagram.com/tikshopscale/", bg: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" },
                { icon: <Facebook size={18} strokeWidth={2.5} />, label: "Facebook", href: "https://www.facebook.com/tikshopscale", bg: "#1877F2" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href !== "#" ? "_blank" : undefined}
                  rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-[3px] hover:shadow-lg active:scale-95 border border-white/20"
                  style={{ background: s.bg, filter: `brightness(var(--social-bg-opacity-mod))` }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-1">
              {/* Badge 1 TikTok Shop Partner */}
              <div className="bg-[var(--badge-bg)] border border-[var(--card-border)] rounded-lg px-4 h-11 md:h-14 flex items-center justify-center shadow-sm whitespace-nowrap overflow-hidden max-w-fit transition-colors">
                <img
                  src={tiktokShopLogo}
                  alt="TikTok Shop Partner"
                  width="160"
                  height="24"
                  loading="lazy"
                  className={`h-[20px] md:h-[24px] w-auto object-contain block shrink-0 ${isDarkMode ? 'brightness-0 invert' : ''}`}
                  style={{ maxHeight: '100%', maxWidth: '160px' }}
                />
              </div>
              {/* Badge 2 Clutch Verified */}
              <div className="bg-[var(--badge-bg)] border border-[var(--card-border)] rounded-lg px-4 h-11 md:h-14 text-[13px] md:text-[15px] font-bold text-[var(--badge-text)] inline-flex items-center gap-2 shadow-sm whitespace-nowrap transition-colors">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#FF3D2E] shrink-0" />
                <span>Clutch Verified</span>
              </div>
              <a
                href="https://www.trustpilot.com/review/tikshopscale.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--badge-bg)] border border-[var(--card-border)] rounded-lg px-4 h-11 md:h-14 text-[13px] md:text-[15px] font-bold text-[var(--badge-text)] inline-flex items-center gap-2 shadow-sm whitespace-nowrap transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer transition-colors"
              >
                <div className="bg-[#00B67A] p-0.5 flex items-center justify-center rounded-[2px] h-4 w-4 md:h-[20px] md:w-[20px] shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <span>Trustpilot</span>
                <div className="flex gap-0.5 ml-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 bg-[#00B67A] rounded-[1px] flex items-center justify-center text-white text-[8px] md:text-[9px]">★</div>
                  ))}
                </div>
              </a>
            </div>
          </div>

          {/* COLUMN 2 NAVIGATION */}
          <div className="flex flex-col items-center md:items-start lg:px-4">
            <h2 className="text-[10px] font-[700] uppercase tracking-[3px] text-[var(--muted-text)] mb-[20px]">NAVIGATION</h2>
            <nav className="flex flex-col gap-[11px] items-center md:items-start text-[14px] font-[500] text-[var(--nav-link-text)]">
              <Link to="/services" className="nav-link hover:text-[var(--site-text)]">Services</Link>
              <Link to="/about" className="nav-link hover:text-[var(--site-text)]">Who We Are</Link>
              <Link to="/why-us" className="nav-link hover:text-[var(--site-text)]">Why Us</Link>
              <Link to="/case-studies" className="nav-link hover:text-[var(--site-text)]">Case Studies</Link>
              <Link to="/careers" className="nav-link hover:text-[var(--site-text)]">Careers</Link>
              <Link to="/creators" className="nav-link hover:text-[var(--site-text)]">Join Our Creator Network</Link>
              <Link to="/landing" className="mt-2">
                <span className="bg-[var(--site-text)] text-[var(--site-bg)] px-4 py-2 rounded-full text-[13px] font-bold inline-flex items-center gap-2 hover:opacity-80 transition-all hover:-translate-y-0.5 shadow-sm md:-ml-1.5">
                  Scale My TikTok Shop
                </span>
              </Link>
            </nav>
          </div>

          {/* COLUMN 3 CONTACT & GLOBAL PRESENCE */}
          <div className="flex flex-col items-center md:items-start lg:pl-4 xl:pl-0">
            <h2 className="text-[10px] font-[700] uppercase tracking-[3px] text-[var(--muted-text)] mb-[20px]">CONTACT</h2>
            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-[14px] mb-[40px]">
              <div className="flex items-center gap-[10px]">
                <div className="w-[34px] h-[34px] bg-[var(--site-text)]/5 rounded-[8px] flex items-center justify-center shrink-0">
                  <Mail size={16} stroke="var(--site-text)" strokeWidth={2} />
                </div>
                <a href="mailto:info@tikshopscale.com" className="text-[14px] font-[500] text-[var(--nav-link-text)] hover:text-[var(--site-text)] transition-colors">
                  info@tikshopscale.com
                </a>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[34px] h-[34px] bg-[var(--site-text)]/5 rounded-[8px] flex items-center justify-center shrink-0">
                  <Phone size={16} stroke="var(--site-text)" strokeWidth={2} />
                </div>
                <a href="https://calendly.com/tikshopscale/30mincall" target="_blank" rel="noopener noreferrer" className="text-[14px] font-[500] text-[var(--nav-link-text)] hover:text-[var(--site-text)] transition-colors">
                  Book a Call →
                </a>
              </div>
            </div>

            <h2 className="text-[10px] font-[700] uppercase tracking-[3px] text-[var(--muted-text)] mb-[20px]">GLOBAL PRESENCE</h2>
            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-5">
              {/* US */}
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] bg-[var(--site-text)]/5 border border-[var(--card-border)] rounded-[8px] flex items-center justify-center text-[10px] font-bold text-[var(--site-text)] tracking-tighter shrink-0 transition-colors">US</div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[14px] font-bold text-[var(--site-text)] mb-1 transition-colors">United States</span>
                  <span className="text-[11.5px] text-[var(--muted-text)] font-medium transition-colors">Florida</span>
                </div>
              </div>

              {/* AE */}
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] bg-[var(--site-text)]/5 border border-[var(--card-border)] rounded-[8px] flex items-center justify-center text-[10px] font-bold text-[var(--site-text)] tracking-tighter shrink-0 transition-colors">AE</div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[14px] font-bold text-[var(--site-text)] mb-1 transition-colors">UAE</span>
                  <span className="text-[11.5px] text-[var(--muted-text)] font-medium transition-colors">Dubai</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEGAL DISCLAIMER */}
        <div className="mt-10 sm:mt-[56px] pt-6 border-t border-[var(--footer-border)] text-center text-[10px] sm:text-[11px] leading-[1.6] tracking-wide text-[var(--muted-text)] opacity-60 hover:opacity-90 max-w-[850px] mx-auto transition-opacity duration-300 select-none">
          TikShop Scale is an independent agency and is not affiliated with, endorsed by, or connected to TikTok, TikTok Shop, or ByteDance. All trademarks belong to their respective owners.
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 pt-4 sm:pt-[20px] border-t border-[var(--footer-border)] flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-[12px] text-center md:text-left transition-colors">
          <div className="text-[12px] text-[var(--muted-text)] font-medium">
            © 2023–2026 TikShop Scale. All rights reserved.
          </div>

          <div className="flex gap-[22px] justify-center md:justify-center">
            <Link to="/privacy" className="text-[12px] font-[600] text-[var(--muted-text)] uppercase tracking-[0.5px] hover:text-[var(--site-text)] transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="text-[12px] font-[600] text-[var(--muted-text)] uppercase tracking-[0.5px] hover:text-[var(--site-text)] transition-colors">Terms</Link>
          </div>

          <div className="flex items-center gap-6">
            {/* <button
              onClick={toggleDarkMode}
              className="group flex items-center gap-[8px] text-[12px] font-[700] uppercase tracking-[1.5px] text-[var(--nav-link-text)] hover:text-[var(--site-text)] transition-all"
              aria-label="Toggle Dark Mode"
            >
              <span className="text-[14px] transition-transform duration-300 group-hover:scale-110">
                {isDarkMode ? "☀️" : "🌙"}
              </span>
              {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
            </button> */}

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-[8px] text-[12px] font-[700] uppercase tracking-[1.5px] text-[var(--nav-link-text)] hover:text-[var(--site-text)] transition-all"
            >
              BACK TO TOP
              <div className="w-[24px] h-[24px] bg-[var(--site-text)] rounded-full flex items-center justify-center text-[var(--site-bg)] text-[12px] transition-transform duration-300 group-hover:-translate-y-[3px]">
                <ArrowUp size={12} strokeWidth={3} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
