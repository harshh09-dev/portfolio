import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const IntroCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const indiaTime = new Date(
    time.getTime() + time.getTimezoneOffset() * 60000 + 5.5 * 3600000
  );
  const formattedTime = indiaTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <section className="px-6 py-8 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between rounded-2xl border border-border bg-card px-8 py-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Parth Sharma
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Noida, IN • {formattedTime}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Detail-driven UI
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroCard;
