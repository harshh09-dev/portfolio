import { motion } from "framer-motion";

const lifestyleImages = [
  { label: "EAT", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
  { label: "TRAVEL", src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80" },
  { label: "CODE", src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80" },
];

const AboutSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-4xl">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I'm Anjali Kamal, a B.Tech student at IIIT Jabalpur with a strong interest in building structured, scalable software. I enjoy working across the full stack, solving DSA problems, and understanding how systems operate under the hood.
          </p>
          <p>
            My recent work spans full-stack web applications, embedded systems, and algorithm-driven platforms. I'm currently exploring data science, system design, and practical AI integration — focusing on building solutions that are useful, reliable, and scalable in real-world environments.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex gap-6"
        >
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
              className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Lifestyle images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {lifestyleImages.map((img) => (
            <div key={img.label} className="group relative overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.label}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-4">
                <p className="text-sm font-bold uppercase tracking-widest text-foreground">{img.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
