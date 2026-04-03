import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import CreativeWorkSection from "@/components/CreativeWorkSection";
import BehindCurtainsSection from "@/components/BehindCurtainsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-24">
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
              Nice to meet you. I'm <span className="text-primary">Anjali</span>
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm Anjali Kamal, a BTech student at IIIT Jabalpur passionate about building full-stack applications that combine clean architecture with great user experiences.
            </p>
            <p>
              My work spans across full-stack web development, backend system design, and creative writing. I enjoy transforming complex problems into elegant, scalable solutions that real users love.
            </p>
            <p>
              Apart from coding, I love photography, creative writing and exploring ideas that blend technology with storytelling. Currently I'm building projects that solve real-world problems and exploring freelancing opportunities.
            </p>
            <div className="flex gap-4 pt-4">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/anjalikamal-ak3105/" },
                { label: "GitHub", href: "https://github.com/A-verse" },
                { label: "Instagram", href: "https://instagram.com/anjalikamal3105" },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-2xl"
        >
          <img
            src="https://aversee.vercel.app/cyber-security-experts-working-with-tech-devices-neon-lights.jpg"
            alt="Working with tech devices"
            className="w-full object-cover rounded-2xl"
          />
        </motion.div>
      </section>

      <CreativeWorkSection />
      <WorkExperienceSection />
      <BehindCurtainsSection />
      <Footer />
    </div>
  );
};

export default About;
