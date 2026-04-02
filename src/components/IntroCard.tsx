import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GraduationCap, Code2, Palette, Camera, MapPin } from "lucide-react";

const quickFacts = [
  { icon: GraduationCap, label: "BTech Student – IIIT Jabalpur" },
  { icon: Code2, label: "Full Stack Developer" },
  { icon: Palette, label: "Graphic Designer" },
  { icon: Camera, label: "Photographer" },
  { icon: MapPin, label: "Based in India" },
];

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
        {/* Quick Info Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card px-6 py-5"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-center gap-2">
                <fact.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">{fact.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">{formattedTime} IST</span>
            </div>
          </div>
        </motion.div>

        {/* Brand statement */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center text-sm font-medium italic tracking-wide text-muted-foreground/80"
        >
          "Building experiences where technology meets creativity."
        </motion.p>
      </div>
    </section>
  );
};

export default IntroCard;
