import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import HeroScene from "./HeroScene";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/30 to-background" />

      <div className="relative z-10 text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <TextReveal
          className="hero-name mt-4 text-foreground select-none"
          delay={0.4}
          stagger={0.05}
        >
          ANJALI
        </TextReveal>

        {/* Positioning */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary"
        >
          Full Stack Developer • Writer • Visual Storyteller
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-display mx-auto mt-6 max-w-2xl text-xl italic text-muted-foreground md:text-2xl"
        >
          I design and build digital experiences that combine technology, aesthetics and storytelling.
        </motion.p>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-10"
        >
          <MagneticButton strength={0.15}>
            <a
              href="https://drive.google.com/file/d/your-resume-link"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-6px_hsl(330,80%,60%,0.4)]"
            >
              Download Resume
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
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
        transition={{ duration: 0.8, delay: 1.8 }}
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
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-widest">Full Stack Developer</p>
          </div>
        </MagneticButton>
      </motion.div>
    </section>
  );
};

export default HeroSection;
