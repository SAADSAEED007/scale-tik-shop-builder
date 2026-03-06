import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import footerLogo from "@/assets/footer_logo.png";
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

      <div className="footer-content container max-w-[1240px] mx-auto px-10 pt-[72px] pb-[56px] px-[24px] md:px-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-12 md:gap-[56px] text-center md:text-left">

          {/* COLUMN 1 — BRAND COLUMN */}
          <div className="flex flex-col items-center md:items-start lg:col-span-1">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-[12px] mb-[20px] group transition-all duration-300 active:scale-95"
            >
              <div className="relative h-16 w-16 flex items-center justify-center transition-all duration-500">
                <img src={footerLogo} alt="TikShop Scale" className="h-[64px] w-auto object-contain" />
              </div>
              <div className="flex flex-col -space-y-1">
                <span className="font-syne font-[800] text-[20px] tracking-[-0.3px] text-[#1A1A1A] leading-none">
                  TikShop
                </span>
                <span className="font-syne font-[700] text-[9.5px] uppercase tracking-[3px] text-[#9A9080]">
                  Scale
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-[14px] text-[#6B6358] leading-[1.75] max-w-[300px] mb-[24px] font-medium">
              TikTok Shop is all we do. That's why we're better at it than anyone who doesn't.
            </p>

            {/* Social Buttons */}
            <div className="flex justify-center md:justify-start gap-[8px] mb-[28px]">
              {[
                { icon: <XIcon className="w-5 h-5" fill="currentColor" />, label: "X" },
                { icon: <Linkedin size={18} />, label: "LinkedIn" },
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <Facebook size={18} />, label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-[38px] h-[38px] rounded-full bg-[rgba(0,0,0,0.06)] border border-[rgba(0,0,0,0.08)] flex items-center justify-center text-[#3D3830] transition-all duration-200 hover:bg-[#1A1A1A] hover:text-[#EDEADF] hover:-translate-y-[2px]"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-[8px]">
              {/* Badge 1 — TikTok Shop Partner */}
              <div className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.09)] rounded-[8px] px-[12px] py-[6px] h-[40px] flex items-center shadow-[0_1px_4px_rgba(0,0,0,0.05)] whitespace-nowrap">
                <img src={tiktokShopLogo} alt="TikTok Shop Partner" className="h-full w-auto object-contain" />
              </div>
              {/* Badge 2 — Clutch Verified */}
              <div className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.09)] rounded-[8px] padding-[7px_13px] px-[13px] py-[7px] text-[12px] font-[700] color-[#1A1A1A] text-[#1A1A1A] inline-flex items-center gap-[7px] shadow-[0_1px_4px_rgba(0,0,0,0.05)] whitespace-nowrap">
                <div className="w-[14px] h-[14px] rounded-full bg-[#FF3D2E]" />
                Clutch Verified
              </div>
              {/* Badge 3 — Trustpilot */}
              <div className="bg-[#FFFFFF] border border-[rgba(0,0,0,0.09)] rounded-[8px] padding-[7px_13px] px-[13px] py-[7px] text-[12px] font-[700] color-[#1A1A1A] text-[#1A1A1A] inline-flex items-center gap-[7px] shadow-[0_1px_4px_rgba(0,0,0,0.05)] whitespace-nowrap">
                <div className="bg-[#00B67A] p-0.5 flex items-center justify-center rounded-[2px]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                Trustpilot
                <div className="flex gap-0.5 ml-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-[14px] h-[14px] bg-[#00B67A] rounded-[2px] flex items-center justify-center text-white text-[9px]">★</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2 — NAVIGATION */}
          <div className="flex flex-col items-center md:items-start mt-8 md:mt-0">
            <h4 className="text-[10px] font-[700] uppercase tracking-[3px] text-[#9A9080] mb-[20px]">NAVIGATION</h4>
            <nav className="flex flex-col gap-[11px] items-center md:items-start text-[14px] font-[500] text-[#3D3830]">
              <Link to="/services" className="nav-link hover:text-[#1A1A1A]">Services</Link>
              <Link to="/" className="nav-link hover:text-[#1A1A1A]">Why Us</Link>
              <Link to="/about" className="nav-link hover:text-[#1A1A1A]">Who We Are</Link>
              <a href="#" className="nav-link hover:text-[#1A1A1A]">Careers</a>
              <Link to="/case-studies" className="nav-link hover:text-[#1A1A1A]">Case Studies</Link>
              <Link to="/testimonials" className="nav-link hover:text-[#1A1A1A]">Testimonials</Link>
              <Link to="/creators" className="nav-link hover:text-[#1A1A1A]">Join Our Creator Network</Link>
              <Link to="/landing" className="mt-[4px]">
                <span className="bg-[#1A1A1A] text-[#EDEADF] px-[14px] py-[7px] rounded-[100px] text-[12.5px] font-[700] inline-flex items-center gap-[6px] hover:bg-[#333] transition-all hover:-translate-y-[1px]">
                  Scale My TikTok Shop
                </span>
              </Link>
            </nav>
          </div>

          {/* COLUMN 3 — CONTACT */}
          <div className="flex flex-col items-center md:items-start mt-8 md:mt-0 lg:pl-4">
            <h4 className="text-[10px] font-[700] uppercase tracking-[3px] text-[#9A9080] mb-[20px]">CONTACT</h4>
            <div className="flex flex-col items-center md:items-start gap-[14px]">
              {/* Item 1 — Email */}
              <div className="flex items-center gap-[10px]">
                <div className="w-[34px] h-[34px] bg-[rgba(0,0,0,0.05)] rounded-[8px] flex items-center justify-center shrink-0">
                  <Mail size={16} stroke="#3D3830" strokeWidth={2} />
                </div>
                <a href="mailto:info@tikshopscale.com" className="text-[14px] font-[500] text-[#3D3830] hover:text-[#1A1A1A] transition-colors">
                  info@tikshopscale.com
                </a>
              </div>
              {/* Item 2 — Book a Call */}
              <div className="flex items-center gap-[10px]">
                <div className="w-[34px] h-[34px] bg-[rgba(0,0,0,0.05)] rounded-[8px] flex items-center justify-center shrink-0">
                  <Phone size={16} stroke="#3D3830" strokeWidth={2} />
                </div>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-[500] text-[#3D3830] hover:text-[#1A1A1A] transition-colors"
                >
                  Book a Call →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-[56px] pt-[20px] border-t border-[rgba(0,0,0,0.08)] flex flex-col md:flex-row justify-between items-center gap-[12px] text-center md:text-left">
          <div className="text-[12px] text-[#9A9080] font-medium">
            © 2023–2026 TikShop Scale. All rights reserved.
          </div>

          <div className="flex gap-[22px] justify-center md:justify-center">
            <a href="#" className="text-[12px] font-[600] text-[#9A9080] uppercase tracking-[0.5px] hover:text-[#1A1A1A] transition-colors">Privacy</a>
            <a href="#" className="text-[12px] font-[600] text-[#9A9080] uppercase tracking-[0.5px] hover:text-[#1A1A1A] transition-colors">Terms</a>
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
