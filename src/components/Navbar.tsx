import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-xs font-bold text-foreground">
          PS
        </div>
        <div className="hidden sm:block">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Creative Engineer</p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">Building the Future</p>
        </div>
      </div>

      {/* Desktop links */}
      <div className="hidden items-center gap-1 rounded-full border border-border bg-card/80 px-2 py-1 backdrop-blur-md md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="mailto:hello@parthh.in"
        className="hidden rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary md:block"
      >
        Book a Call
      </a>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="text-foreground md:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 border-b border-border bg-background p-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-lg font-medium text-foreground"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
