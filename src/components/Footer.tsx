import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="font-display text-2xl font-bold italic text-foreground">A-VERSE</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Building digital experiences with code & creativity.
              </p>
            </div>
            <div className="flex gap-6">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/anjalikamal-ak3105/" },
                { label: "GitHub", href: "https://github.com/A-verse" },
                { label: "Instagram", href: "https://instagram.com/anjalikamal3105" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-sm text-muted-foreground transition-all duration-300 hover:text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Anjali Kamal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
