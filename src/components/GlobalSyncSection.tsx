import { motion } from "framer-motion";
import { Globe, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const timezones = [
  { code: "GB", label: "UK", offset: 0, flag: "🇬🇧" },
  { code: "IN", label: "India", offset: 5.5, flag: "🇮🇳" },
  { code: "US", label: "USA", offset: -5, flag: "🇺🇸" },
];

const GlobalSyncSection = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getTimeForOffset = (offset: number) => {
    const utc = time.getTime() + time.getTimezoneOffset() * 60000;
    const d = new Date(utc + 3600000 * offset);
    return d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
  };

  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left - Clock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">Available Globally</p>
            <h3 className="text-2xl font-bold text-foreground">
              Global <span className="font-display italic">Sync</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">Adaptable across time zones</p>

            {/* Timezone badges */}
            <div className="mt-8 flex gap-4">
              {timezones.map((tz) => (
                <div
                  key={tz.code}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-secondary px-5 py-3"
                >
                  <span className="text-2xl">{tz.flag}</span>
                  <p className="text-xs font-semibold text-foreground">{tz.label}</p>
                  <p className="text-[10px] text-muted-foreground">{getTimeForOffset(tz.offset)}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-3 w-3 items-center justify-center">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-primary" />
                </div>
                <span className="text-sm font-medium text-primary">Remote</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <p className="text-lg font-semibold text-foreground">India</p>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-block rounded-full border border-primary bg-primary/10 px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Available for work
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-xl font-bold text-foreground">
                Let's build something{" "}
                <span className="font-display italic">that actually works.</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">hello@parthh.in</p>
              <p className="mt-1 text-xs text-muted-foreground/60">Tap to copy email</p>
              <a
                href="#contact"
                className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_-4px_hsl(142,71%,45%,0.4)]"
              >
                Connect Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSyncSection;
