import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BehindCurtainsSection from "@/components/BehindCurtainsSection";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { id: "01", name: "GitHub", url: "https://github.com/ksparth12" },
  { id: "02", name: "X", url: "https://x.com/ksparth12" },
  { id: "03", name: "LinkedIn", url: "https://linkedin.com/in/ksparth128" },
  { id: "04", name: "Email", url: "mailto:hello@parthh.in" },
];

const Links = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pt-32 pb-24">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          CONNECT / FOLLOW / CHAT
        </motion.p>

        <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-black uppercase leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              MY<br />
              <span className="font-black">DIGITAL</span><br />
              PRESENCE
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-full border-2 border-border md:h-56 md:w-56"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              alt="Parth Sharma"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Links List */}
        <div className="mt-16 divide-y divide-border border-t border-border">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="group flex items-center justify-between py-8 transition-colors hover:bg-card/20"
            >
              <div className="flex items-center gap-8">
                <span className="text-sm text-muted-foreground">{link.id}</span>
                <span className="text-3xl font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-primary md:text-5xl">
                  {link.name}
                </span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary">
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <BehindCurtainsSection />
      <Footer />
    </div>
  );
};

export default Links;
