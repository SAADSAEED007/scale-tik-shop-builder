import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import navLogo from "@/assets/nav_logo.png";
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer relative bg-[#EDEADF] text-[#1A1A1A] overflow-hidden border-t border-[rgba(0,0,0,0.07)]">
      <style>{`
        .footer::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          opacity: 0.5;
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
      `}</style>

      <div className="footer-content container max-w-[1240px] mx-auto px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-[72px] pb-10 sm:pb-12 md:pb-[56px]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center md:items-start gap-10 sm:gap-12 md:gap-[56px] lg:gap-0 text-center md:text-left">
          {/* COLUMN 1 — BRAND COLUMN */}
          <div className="flex flex-col items-center md:items-start lg:max-w-[300px] mt-2">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-1 group transition-all duration-300 active:scale-95 mb-[20px] md:-ml-2 pb-2"
            >
              <div className="relative h-16 w-16 flex items-center justify-center transition-all duration-500">
                <img
                  src={navLogo}
                  alt="TikShop Scale"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 object-contain filter drop-shadow-sm max-w-none"
                />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-heading font-black text-[24px] tracking-tighter text-[#1A1A1A] leading-none">
                  TikShop
                </span>
                <span className="font-heading font-bold text-[0.85rem] uppercase tracking-[0.2em] text-[#9A9080] group-hover:text-black transition-all duration-500">
                  Scale
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-[14px] text-[#6B6358] leading-[1.75] mb-[24px] font-medium">
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
                  style={{ background: s.bg }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-1">
              {/* Badge 1 — TikTok Shop Partner */}
              <div className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.09)] rounded-lg px-4 h-11 md:h-14 flex items-center justify-center shadow-sm whitespace-nowrap overflow-hidden max-w-fit">
                <img
                  src={tiktokShopLogo}
                  alt="TikTok Shop Partner"
                  className="h-[20px] md:h-[24px] w-auto object-contain block shrink-0"
                  style={{ maxHeight: '100%', maxWidth: '160px' }}
                />
              </div>
              {/* Badge 2 — Clutch Verified */}
              <div className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.09)] rounded-lg px-4 h-11 md:h-14 text-[13px] md:text-[15px] font-bold text-[#1A1A1A] inline-flex items-center gap-2 shadow-sm whitespace-nowrap">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#FF3D2E] shrink-0" />
                <span>Clutch Verified</span>
              </div>
              <a
                href="https://www.trustpilot.com/review/tikshopscale.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.09)] rounded-lg px-4 h-11 md:h-14 text-[13px] md:text-[15px] font-bold text-[#1A1A1A] inline-flex items-center gap-2 shadow-sm whitespace-nowrap transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
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

          {/* COLUMN 2 — NAVIGATION */}
          <div className="flex flex-col items-center md:items-start lg:px-4">
            <h4 className="text-[10px] font-[700] uppercase tracking-[3px] text-[#9A9080] mb-[20px]">NAVIGATION</h4>
            <nav className="flex flex-col gap-[11px] items-center md:items-start text-[14px] font-[500] text-[#3D3830]">
              <Link to="/services" className="nav-link hover:text-[#1A1A1A]">Services</Link>
              <Link to="/about" className="nav-link hover:text-[#1A1A1A]">Who We Are</Link>
              <Link to="/why-us" className="nav-link hover:text-[#1A1A1A]">Why Us</Link>
              <Link to="/case-studies" className="nav-link hover:text-[#1A1A1A]">Case Studies</Link>
              <Link to="/careers" className="nav-link hover:text-[#1A1A1A]">Careers</Link>
              <Link to="/creators" className="nav-link hover:text-[#1A1A1A]">Join Our Creator Network</Link>
              <Link to="/landing" className="mt-2">
                <span className="bg-[#1A1A1A] text-[#EDEADF] px-4 py-2 rounded-full text-[13px] font-bold inline-flex items-center gap-2 hover:bg-[#333] transition-all hover:-translate-y-0.5 shadow-sm md:-ml-1.5">
                  Scale My TikTok Shop
                </span>
              </Link>
            </nav>
          </div>

          {/* COLUMN 3 — CONTACT & GLOBAL PRESENCE */}
          <div className="flex flex-col items-center md:items-start lg:pl-4 xl:pl-0">
            <h4 className="text-[10px] font-[700] uppercase tracking-[3px] text-[#9A9080] mb-[20px]">CONTACT</h4>
            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-[14px] mb-[40px]">
              <div className="flex items-center gap-[10px]">
                <div className="w-[34px] h-[34px] bg-[rgba(0,0,0,0.05)] rounded-[8px] flex items-center justify-center shrink-0">
                  <Mail size={16} stroke="#3D3830" strokeWidth={2} />
                </div>
                <a href="mailto:info@tikshopscale.com" className="text-[14px] font-[500] text-[#3D3830] hover:text-[#1A1A1A] transition-colors">
                  info@tikshopscale.com
                </a>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="w-[34px] h-[34px] bg-[rgba(0,0,0,0.05)] rounded-[8px] flex items-center justify-center shrink-0">
                  <Phone size={16} stroke="#3D3830" strokeWidth={2} />
                </div>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-[14px] font-[500] text-[#3D3830] hover:text-[#1A1A1A] transition-colors">
                  Book a Call →
                </a>
              </div>
            </div>

            <h4 className="text-[10px] font-[700] uppercase tracking-[3px] text-[#9A9080] mb-[20px]">GLOBAL PRESENCE</h4>
            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-5">
              {/* US */}
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] rounded-[8px] flex items-center justify-center text-[10px] font-bold text-[#1A1A1A] tracking-tighter shrink-0">US</div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[14px] font-bold text-[#1A1A1A] mb-1">United States</span>
                  <span className="text-[11.5px] text-[#6B6358] font-medium">Florida</span>
                </div>
              </div>

              {/* AE */}
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.1)] rounded-[8px] flex items-center justify-center text-[10px] font-bold text-[#1A1A1A] tracking-tighter shrink-0">AE</div>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[14px] font-bold text-[#1A1A1A] mb-1">UAE</span>
                  <span className="text-[11.5px] text-[#6B6358] font-medium">Dubai</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 sm:mt-[56px] pt-4 sm:pt-[20px] border-t border-[rgba(0,0,0,0.08)] flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-[12px] text-center md:text-left">
          <div className="text-[12px] text-[#9A9080] font-medium">
            © 2023–2026 TikShop Scale. All rights reserved.
          </div>

          <div className="flex gap-[22px] justify-center md:justify-center">
            <Link to="/privacy" className="text-[12px] font-[600] text-[#9A9080] uppercase tracking-[0.5px] hover:text-[#1A1A1A] transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="text-[12px] font-[600] text-[#9A9080] uppercase tracking-[0.5px] hover:text-[#1A1A1A] transition-colors">Terms</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-[8px] text-[12px] font-[700] uppercase tracking-[1.5px] text-[#3D3830] hover:text-[#1A1A1A] transition-all"
          >
            BACK TO TOP
            <div className="w-[24px] h-[24px] bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#EDEADF] text-[12px] transition-transform duration-300 group-hover:-translate-y-[3px]">
              <ArrowUp size={12} strokeWidth={3} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
