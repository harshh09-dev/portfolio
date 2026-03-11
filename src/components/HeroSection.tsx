import { motion } from "framer-motion";
import { MapPin, Code2 } from "lucide-react";
import HeroScene from "./HeroScene";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/30 to-background" />

      <div className="relative z-10 text-center">
        <TextReveal
          className="hero-name text-foreground select-none"
          delay={0.2}
          stagger={0.05}
        >
          ANJALI
        </TextReveal>
      </div>

      <div className="relative z-10 mt-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          I design and build scalable systems that
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.1 }}
          className="font-display mt-2 text-3xl italic text-foreground md:text-5xl"
        >
          solve real-world problems.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-24 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-0 right-0 z-10 flex items-end justify-between px-8 md:px-16"
      >
        <MagneticButton strength={0.2}>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest">Based in Jaipur,</p>
              <p className="text-xs uppercase tracking-widest">India</p>
            </div>
          </div>
        </MagneticButton>
        <MagneticButton strength={0.2}>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Code2 className="h-4 w-4 text-primary" />
            <div className="text-right">
              <p className="text-xs font-semibold uppercase tracking-widest">Full Stack Dev,</p>
              <p className="text-xs uppercase tracking-widest">& AI Engineer</p>
            </div>
          </div>
        </MagneticButton>
      </motion.div>
    </section>
  );
};

export default HeroSection;
