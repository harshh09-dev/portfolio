import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import BehindCurtainsSection from "@/components/BehindCurtainsSection";
import { Linkedin, Github, Twitter } from "lucide-react";

const lifestyleImages = [
  { label: "EAT", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
  { label: "TRAVEL", src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80" },
  { label: "CODE", src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-name text-center text-[clamp(4rem,15vw,12rem)] font-black uppercase leading-[0.85] tracking-tighter text-foreground"
        >
          ABOUT ME
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground"
        >
          GET TO KNOW MORE ABOUT
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-2 font-serif text-3xl italic text-foreground/80 md:text-4xl"
        >
          who i am.
        </motion.p>
      </section>

      {/* About Content */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">A LITTLE ABOUT ME</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Nice to meet you. I'm <span className="text-primary">Parth</span>
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I transform complex ideas into high-speed, scalable web products. As an engineering-driven developer, I focus on the entire stack—prioritizing clean architecture, seamless performance, and modern solutions that drive real value.
            </p>
            <p>
              Beyond writing code, I understand the product lifecycle. As the founder of Rune, Rune AI, and Rune Hub, I've learned firsthand how to build, ship, and scale meaningful products in a fast-paced environment.
            </p>
            <p>
              My philosophy is simple: build things that last. I help startups and businesses bridge the gap between concept and reality with code that performs.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://linkedin.com/in/ksparth128" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com/ksparth12" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://x.com/ksparth12" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Lifestyle Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-4"
        >
          {lifestyleImages.map((img) => (
            <div key={img.label} className="group relative overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.label}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-4">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground">{img.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Work Experience */}
      <WorkExperienceSection />

      <BehindCurtainsSection />
      <Footer />
    </div>
  );
};

export default About;
