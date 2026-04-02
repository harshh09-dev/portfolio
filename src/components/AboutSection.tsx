import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="section-label">A little about me</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl"
        >
          Nice to meet you.{" "}
          <span className="font-display italic">I'm Anjali</span>
        </motion.h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.2fr]">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-border"
          >
            <img
              src="https://aversee.vercel.app/cyber-security-experts-working-with-tech-devices-neon-lights.jpg"
              alt="Anjali Kamal working with technology"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm <span className="font-semibold text-foreground">Anjali Kamal</span>, a BTech student at IIIT Jabalpur passionate about building digital experiences that combine creativity and technology.
              </p>
              <p>
                My work spans across <span className="text-foreground">web development</span>, <span className="text-foreground">graphic design</span>, and <span className="text-foreground">visual storytelling</span> through photography. I enjoy transforming ideas into meaningful products that are both functional and aesthetically engaging.
              </p>
              <p>
                Apart from coding, I love photography, creative writing and exploring aesthetic ideas that combine art with technology. Currently I'm exploring freelancing and building projects that solve real-world problems while maintaining strong visual design.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-4">
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
                  className="rounded-full border border-border px-5 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
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
