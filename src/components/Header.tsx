import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import navLogo from "@/assets/nav_logo.png";

const navItems = [
  { label: "Services", path: "/services" },
  { label: "About", path: "/#about" },
  { label: "Careers", path: "/careers" },
  { label: "Case Studies", path: "/case-studies" },
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
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div className={`fixed top-6 left-0 right-0 z-50 px-4 md:px-6 flex justify-center pointer-events-none transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      }`}>
      <header
        className={`w-full max-w-5xl rounded-[2.5rem] md:rounded-full border border-border/30 bg-white/70 dark:bg-card/70 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out pointer-events-auto ${scrolled ? "py-2 px-3 md:px-5 max-w-4xl" : "py-4 px-5 md:px-8"
          } ${open ? "rounded-[2rem] bg-white dark:bg-card shadow-2xl" : ""}`}
      >
        <div className="flex items-center justify-between">
          {/* Left: Logo + Brand Name */}
          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 group transition-all duration-300 active:scale-95 shrink-0"
          >
            <div className="relative h-14 w-14 md:h-20 md:w-20 flex items-center justify-center transition-all duration-500">
              <img
                src={navLogo}
                alt="TikShop Scale"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 md:h-36 md:w-36 object-contain filter drop-shadow-sm max-w-none"
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-heading font-black text-xl md:text-2xl tracking-tighter text-foreground whitespace-nowrap leading-none">
                TikShop
              </span>
              <span className="font-heading font-bold text-[0.75rem] md:text-[0.85rem] uppercase tracking-[0.2em] text-primary/40 group-hover:text-primary transition-all duration-500">
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

          {/* Right: CTA Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/contact" className="hidden sm:block">
              <Button
                variant="hero"
                size="sm"
                className="rounded-full px-7 py-5 h-auto shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95 border-none font-bold"
              >
                Get Started
              </Button>
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-3 rounded-2xl bg-secondary/20 hover:bg-secondary/40 text-foreground transition-all active:scale-90"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <X className={`absolute transition-all duration-500 ease-in-out ${open ? 'scale-100 rotate-0 opacity-100' : 'scale-50 rotate-90 opacity-0'}`} size={22} />
                <Menu className={`absolute transition-all duration-500 ease-in-out ${open ? 'scale-50 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} size={22} />
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
            <Link to="/contact" onClick={() => setOpen(false)} className="block pt-4">
              <Button variant="hero" className="w-full rounded-[1.5rem] py-8 text-xl font-black shadow-2xl active:scale-[0.98] transition-all">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
