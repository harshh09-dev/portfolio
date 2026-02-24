import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
];

const moreLinks = [
  { label: "Links", href: "/links" },
  { label: "Uses", href: "/uses" },
  { label: "Guestbook", href: "/guestbook" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-xs font-bold text-foreground">
          PS
        </div>
        <div className="hidden sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Creative Engineer</p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">Building the Future</p>
        </div>
      </Link>

      {/* Desktop links */}
      <div className="hidden items-center gap-1 rounded-full border border-border bg-card/80 px-2 py-1 backdrop-blur-md md:flex">
        {mainLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              isActive(link.href)
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* More dropdown */}
        <div ref={moreRef} className="relative">
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              moreLinks.some((l) => isActive(l.href))
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            More
            <ChevronDown className={`h-3.5 w-3.5 transition-transform ${moreOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {moreOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl border border-border bg-card/95 py-1 shadow-xl backdrop-blur-md"
              >
                {moreLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMoreOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* CTA */}
      <Link
        to="/links"
        className="hidden rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary md:block"
      >
        Book a Call
      </Link>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="text-foreground md:hidden"
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 border-b border-border bg-background p-6 md:hidden"
          >
            {[...mainLinks, ...moreLinks].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-lg font-medium ${
                  isActive(link.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
