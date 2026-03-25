import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import navLogo from "@/assets/nav_logo.webp";
import navLogo84 from "@/assets/nav_logo-84.webp";

const navItems = [
  { label: "Services", path: "/services" },
  { label: "Who We Are", path: "/about" },
  { label: "Why Us", path: "/why-us" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Careers", path: "/careers" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    // If clicking Home while on Home, or clicking a page link while already on that page
    if ((path === "/" && location.pathname === "/") || (path === location.pathname)) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    } else if (path.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const id = path.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      }
    }
  };

  useEffect(() => {
    let ticking = false;
    let rafId: number;
    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Scrolled state for appearance (padding/max-width)
          setScrolled(currentScrollY > 15);

          // Visibility state for hide/show on scroll direction
          if (currentScrollY <= 50) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY.current + 15) {
            // Scrolling down - Hide
            if (isVisible) setIsVisible(false);
          } else if (currentScrollY < lastScrollY.current - 15) {
            // Scrolling up - Show
            if (!isVisible) setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (ticking && rafId) window.cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <div className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 md:px-6 transition-all duration-500 ease-in-out will-change-transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      }`}>
      <header
        className={`w-full max-w-full rounded-[2.5rem] md:rounded-full border border-border/30 bg-white/70 dark:bg-card/70 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out pointer-events-auto ${scrolled ? "py-2 px-4 md:px-8" : "py-3 md:py-4 px-4 md:px-8"
          } ${open ? "rounded-[2rem] bg-white dark:bg-card shadow-2xl is-open" : ""}`}
      >
        <div className="flex items-center justify-between">
          {/* Left: Logo + Brand Name */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-1 md:gap-1 group transition-all duration-300 active:scale-95 shrink-0"
          >
            <div className="relative h-9 w-9 md:h-16 md:w-16 flex items-center justify-center transition-all duration-500">
              <img
                src={navLogo}
                srcSet={`${navLogo84} 84w, ${navLogo} 1536w`}
                sizes="(max-width: 768px) 84px, 168px"
                alt="TikShop Scale"
                width="1536"
                height="1024"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 md:h-28 md:w-28 object-contain filter drop-shadow-sm max-w-none dark-mode-logo transition-all duration-300"
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-heading font-black text-base md:text-2xl tracking-tighter text-foreground whitespace-nowrap leading-none">
                TikShop
              </span>
              <span className="font-heading font-bold text-[0.6rem] md:text-[0.85rem] uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary/40 group-hover:text-primary transition-all duration-500">
                Scale
              </span>
            </div>
          </Link>

          {/* Center: Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 bg-secondary/10 rounded-full p-1.5 border border-border/5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-tight transition-all duration-300 ${location.pathname === item.path
                  ? "text-primary bg-background shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                  : "text-muted-foreground hover:text-primary hover:bg-white/50 dark:hover:bg-secondary/20"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Button & Mobile Menu */}
          <div className="flex items-center gap-1 md:gap-1.5 shrink-0 max-md:max-w-[65vw] max-md:justify-end">
            <Link to="/creators" className="flex shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent max-md:border-transparent max-md:shadow-none max-md:p-1 md:border-[1.5px] border-[#E5E5E2] text-black rounded-[8px] p-[4px_8px] md:p-[6px_12px] h-auto text-[9.5px] min-[390px]:text-[11px] md:text-[13px] whitespace-nowrap hover:bg-[#F5EDE3] max-md:hover:bg-transparent md:hover:border-black hover:-translate-y-0.5 transition-all duration-300 active:scale-95 font-bold leading-none tracking-tighter"
              >
                <span className="md:hidden">Join Network</span>
                <span className="hidden md:inline">Join Our Creator Network</span>
              </Button>
            </Link>
            <Link to="/landing" className="flex shrink-0">
              <Button
                variant="hero"
                size="sm"
                className="rounded-full p-[5px_8px] min-[390px]:p-[6px_10px] md:p-[8px_16px] h-auto text-[9.5px] min-[390px]:text-[11px] md:text-[13px] whitespace-nowrap shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95 border-none font-bold"
              >
                <span className="md:hidden">Scale Shop</span>
                <span className="hidden md:inline">Scale My TikTok Shop</span>
              </Button>
            </Link>

            {/* Mobile toggle - placed at the far right */}
            <button
              className="md:hidden flex items-center justify-center w-8 h-8 min-[390px]:w-10 min-[390px]:h-10 rounded-xl bg-secondary/20 hover:bg-secondary/40 text-foreground transition-all active:scale-90 shrink-0 ml-0.5"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 flex items-center justify-center pointer-events-none">
                <X className={`absolute transition-all duration-500 ease-in-out ${open ? 'scale-100 rotate-0 opacity-100' : 'scale-50 rotate-90 opacity-0'}`} size={18} />
                <Menu className={`absolute transition-all duration-500 ease-in-out ${open ? 'scale-50 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} size={18} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[500px] opacity-100 mt-6 border-t border-border/5 pt-6" : "max-h-0 opacity-0 mt-0"}`}>
          <div className="flex flex-col gap-2 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => {
                  handleNavClick(e, item.path);
                  setOpen(false);
                }}
                className={`flex items-center justify-between px-6 py-4 rounded-[1.5rem] text-lg font-extrabold transition-all ${location.pathname === item.path
                  ? "bg-primary text-primary-foreground shadow-xl translate-x-1"
                  : "text-muted-foreground hover:bg-secondary/30 active:translate-x-1"
                  }`}
              >
                {item.label}
                <div className={`w-2 h-2 rounded-full transition-all duration-500 ${location.pathname === item.path ? "bg-primary-foreground scale-100" : "bg-primary opacity-20 scale-50"}`} />
              </Link>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
