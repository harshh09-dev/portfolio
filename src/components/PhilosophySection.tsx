import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const tabs = [
  { id: "philosophy", label: "Philosophy", content: "Detail-driven design that prioritizes user intent over decoration. Every pixel earns its place." },
  { id: "motion", label: "Motion", content: "Subtle movement that confirms intent — never distracting. Animations serve function, not ego." },
  { id: "type", label: "Type", content: "Typography as interface. Hierarchy, rhythm, and scale guide users through content effortlessly." },
  { id: "feedback", label: "Feedback", content: "Instant, meaningful responses to every interaction. Users never wonder if something worked." },
  { id: "craft", label: "Craft", content: "Sweating spacing, timing, and transitions — the tiny stuff that separates good from exceptional." },
  { id: "micro", label: "Micro-interactions", content: "Subtle movement that confirms intent — never distracting." },
];

const PhilosophySection = () => {
  const [activeTab, setActiveTab] = useState("philosophy");
  const activeContent = tabs.find((t) => t.id === activeTab);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Get IST time for clock hands
  const utc = time.getTime() + time.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);
  const seconds = ist.getSeconds();
  const minutes = ist.getMinutes();
  const hours = ist.getHours() % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          {/* Left content */}
          <div>
            <p className="section-label text-primary">UI Philosophy</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-6xl"
            >
              Interfaces{" "}
              <span className="font-display italic">you can feel.</span>
            </motion.h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              I sweat spacing, timing, and feedback — the tiny stuff.
            </p>

            {/* Tabs */}
            <div className="mt-10 flex flex-wrap gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-secondary text-muted-foreground hover:border-muted-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 rounded-2xl border border-border bg-card p-8"
            >
              <p className="text-lg text-foreground">{activeContent?.content}</p>
            </motion.div>
          </div>

          {/* Right - Analog Clock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden items-center justify-center md:flex"
          >
            <div className="relative h-56 w-56">
              {/* Clock face */}
              <div className="absolute inset-0 rounded-full border-2 border-border bg-card">
                {/* Hour markers */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-0 h-full w-px origin-bottom"
                    style={{ transform: `rotate(${i * 30}deg)` }}
                  >
                    <div className={`mx-auto ${i % 3 === 0 ? "h-3 w-0.5 bg-foreground" : "h-2 w-px bg-muted-foreground/50"}`} />
                  </div>
                ))}

                {/* Hour hand */}
                <div
                  className="absolute bottom-1/2 left-1/2 w-1 origin-bottom rounded-full bg-foreground"
                  style={{
                    height: "50px",
                    marginLeft: "-2px",
                    transform: `rotate(${hourDeg}deg)`,
                    transition: "transform 0.5s ease",
                  }}
                />
                {/* Minute hand */}
                <div
                  className="absolute bottom-1/2 left-1/2 w-0.5 origin-bottom rounded-full bg-foreground"
                  style={{
                    height: "65px",
                    marginLeft: "-1px",
                    transform: `rotate(${minuteDeg}deg)`,
                    transition: "transform 0.3s ease",
                  }}
                />
                {/* Second hand */}
                <div
                  className="absolute bottom-1/2 left-1/2 origin-bottom rounded-full bg-primary"
                  style={{
                    height: "70px",
                    width: "1px",
                    marginLeft: "-0.5px",
                    transform: `rotate(${secondDeg}deg)`,
                  }}
                />
                {/* Center dot */}
                <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
