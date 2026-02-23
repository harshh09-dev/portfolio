import { motion } from "framer-motion";

const mobileScreenshots = [
  "https://parthh.in/_next/image?url=%2Fimages%2Fprojects%2FProject%20Images%2FMobile%2FMobile_RuneHub1.PNG&w=640&q=75",
  "https://parthh.in/_next/image?url=%2Fimages%2Fprojects%2FProject%20Images%2FMobile%2FMobile_Rune1.PNG&w=640&q=75",
  "https://parthh.in/_next/image?url=%2Fimages%2Fprojects%2FProject%20Images%2FMobile%2FMobile_RuneAI1.PNG&w=640&q=75",
];

const FounderSection = () => {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left text */}
            <div>
              <h3 className="text-3xl font-bold text-foreground md:text-4xl">
                Founder of <span className="text-primary">Rune</span>
              </h3>
              <p className="mt-2 font-mono text-sm text-muted-foreground">
                {"< Crafting Digital Experiences />"}
              </p>
            </div>

            {/* Right - mobile screenshots carousel */}
            <div className="flex justify-center gap-4 overflow-hidden">
              {mobileScreenshots.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="w-28 flex-shrink-0 overflow-hidden rounded-xl border border-border shadow-lg md:w-36"
                >
                  <img
                    src={src}
                    alt={`Rune app screenshot ${i + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
