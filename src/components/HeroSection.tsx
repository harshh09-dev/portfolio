import { motion } from "framer-motion";
import { MapPin, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Background subtle gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center"
      >
        <h1 className="hero-name text-foreground select-none">PARTH</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 mt-8 text-center"
      >
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          I design and build products that
        </p>
        <p className="font-display mt-2 text-3xl italic text-foreground md:text-5xl">
          deliver real impact.
        </p>
      </motion.div>

      {/* Bottom badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-12 left-0 right-0 flex items-end justify-between px-8 md:px-16"
      >
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest">Based in Noida,</p>
            <p className="text-xs uppercase tracking-widest">India</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Code2 className="h-4 w-4 text-primary" />
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-widest">Full Stack Dev,</p>
            <p className="text-xs uppercase tracking-widest">& Designer</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
