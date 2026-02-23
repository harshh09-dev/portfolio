import { motion } from "framer-motion";

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
            clean, reusable code and seamless performance.
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
      </div>
    </section>
  );
};

export default AboutSection;
