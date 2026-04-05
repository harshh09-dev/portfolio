import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Camera } from "lucide-react";
import { useRef } from "react";
import HeroScene from "./HeroScene";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <HeroScene />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/30 to-background" />

      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground"
        >
          Hi, I'm
        </motion.p>

        <TextReveal
          className="hero-name mt-4 text-foreground select-none"
          delay={0.4}
          stagger={0.05}
        >
          ANJALI
        </TextReveal>

        {/* Role cards */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
            Full Stack Developer
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            <Camera className="h-3.5 w-3.5" />
            Photographer
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-display mx-auto mt-6 max-w-2xl text-xl italic text-muted-foreground md:text-2xl"
        >
          I design and build digital experiences that combine technology, aesthetics and storytelling.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton strength={0.15}>
            <a
              href="#work"
              className="rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_30px_-8px_hsl(330,80%,60%,0.3)]"
            >
              View Projects
            </a>
          </MagneticButton>
          <MagneticButton strength={0.15}>
            <a
              href="https://drive.google.com/file/d/your-resume-link"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-6px_hsl(330,80%,60%,0.4)]"
            >
              Download Resume
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>

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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
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
