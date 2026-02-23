import { motion } from "framer-motion";

const lifestyleImages = [
  { label: "EAT", src: "https://parthh.in/_next/image?url=%2Fimages%2Fwebp%2FEAT.webp&w=640&q=75" },
  { label: "TRAVEL", src: "https://parthh.in/_next/image?url=%2Fimages%2Fwebp%2FTRAVEL.webp&w=640&q=75" },
  { label: "CODE", src: "https://parthh.in/_next/image?url=%2Fimages%2Fwebp%2FCODE.webp&w=640&q=75" },
];

const AboutSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="section-label">A quick glance</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl"
        >
          Building the bridge between{" "}
          <span className="font-display italic">ideas and experiences</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I'm Parth Sharma, an engineering-driven developer who turns complex technical
            challenges into high-speed web products. I manage the entire stack with a focus on
            clean, reusable code and seamless performance. I excel in Next.js and full-stack
            architecture, always delivering modern solutions that actually solve problems for every user.
          </p>
          <p>
            As the founder of Rune, I manage platforms like Rune AI and Rune Hub. Building a
            startup ecosystem has taught me how to ship products that scale.
          </p>
          <p className="font-medium text-foreground">
            My code is built to last, helping your startup reach the next level!
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
            { label: "LinkedIn", href: "https://linkedin.com/in/ksparth128" },
            { label: "GitHub", href: "https://github.com/ksparth12" },
            { label: "Twitter", href: "https://x.com/ksparth12" },
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
