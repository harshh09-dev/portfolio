import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="section-label text-primary">A little about me</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl"
        >
          Nice to meet you. I'm <span className="text-primary">Anjali</span>
        </motion.h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src="https://aversee.vercel.app/cyber-security-experts-working-with-tech-devices-neon-lights.jpg"
              alt="Working with tech devices"
              className="w-full object-cover rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-4 text-muted-foreground"
          >
            <p>
              I'm Anjali Kamal, a BTech student at IIIT Jabalpur passionate about building full-stack applications that combine clean architecture with great user experiences.
            </p>
            <p>
              My work spans across full-stack web development, system design, and creative writing. I enjoy transforming complex problems into elegant, scalable solutions.
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
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
