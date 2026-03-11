import { motion } from "framer-motion";

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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground mb-4">
                AK
              </div>
              <h3 className="text-3xl font-bold text-foreground md:text-4xl">
                Crafting <span className="text-primary">modern</span> experiences
              </h3>
              <p className="mt-2 font-mono text-sm text-muted-foreground">
                {"< Building Scalable Systems />"}
              </p>
            </div>

            {/* Right - Image */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-sm overflow-hidden rounded-xl border border-border shadow-lg"
              >
                <img
                  src="https://aversee.vercel.app/cyber-security-experts-working-with-tech-devices-neon-lights.jpg"
                  alt="Cyber security experts working with tech devices"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
