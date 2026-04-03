import { motion } from "framer-motion";
import { GraduationCap, Code, MapPin, Pen } from "lucide-react";
import { useState, useEffect } from "react";

const quickFacts = [
  { icon: GraduationCap, label: "Bachelors in Technology @ IIIT Jabalpur" },
  { icon: Code, label: "Full Stack Developer" },
  { icon: Pen, label: "Writer" },
  { icon: MapPin, label: "Jaipur, India" },
];

const IntroCard = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const ist = new Date(utc + 5.5 * 3600000);
      setTime(
        ist.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-6 rounded-2xl border border-border bg-card/50 px-8 py-6"
        >
          {quickFacts.map((fact) => (
            <div key={fact.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <fact.icon className="h-4 w-4 text-primary" />
              <span>{fact.label}</span>
            </div>
          ))}
          <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary font-mono">{time}</span>
            <span>IST</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center text-sm italic text-muted-foreground"
        >
          Building experiences where technology meets creativity.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroCard;
