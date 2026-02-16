import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3">Scale Tik Shop</h3>
          <p className="text-sm text-primary-foreground/60">Built for TikTok commerce.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Pages</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/60">
            <Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link>
            <Link to="/case-studies" className="hover:text-primary-foreground transition-colors">Case Studies</Link>
            <Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Get in Touch</h4>
          <p className="text-sm text-primary-foreground/60">hello@scaletikshop.com</p>
          <div className="flex gap-4 mt-4 text-primary-foreground/60">
            <span className="text-xs">TikTok</span>
            <span className="text-xs">Instagram</span>
            <span className="text-xs">LinkedIn</span>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-xs text-primary-foreground/40 text-center">
        © {new Date().getFullYear()} Scale Tik Shop. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
