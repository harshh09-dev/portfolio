import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, staggerItem } from "./ScrollReveal";

const tabs = [
  { id: "philosophy", label: "Philosophy", content: "Detail-driven development that prioritizes clean architecture and user experience. Every line of code earns its place." },
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

  const utc = time.getTime() + time.getTimezoneOffset() * 60000;
  const ist = new Date(utc + 5.5 * 3600000);
  const seconds = ist.getSeconds();
  const minutes = ist.getMinutes();
  const hours = ist.getHours() % 12;

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <ScrollReveal>
              <p className="section-label text-primary">Dev Philosophy</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-6xl">
                Interfaces{" "}
                <span className="font-display italic">you can feel.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-4 max-w-lg text-muted-foreground">
                I sweat spacing, timing, and feedback — the tiny stuff.
              </p>
            </ScrollReveal>

            <StaggerContainer className="mt-10 flex flex-wrap gap-3" staggerDelay={0.05}>
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  variants={staggerItem}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_-6px_hsl(330,80%,60%,0.4)]"
                      : "border-border bg-secondary text-muted-foreground hover:border-muted-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </StaggerContainer>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="mt-8 rounded-2xl border border-border bg-card p-8"
              >
                <p className="text-lg leading-relaxed text-foreground">{activeContent?.content}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Analog Clock */}
          <ScrollReveal delay={0.3} scale>
            <div className="hidden items-center justify-center md:flex">
              <div className="relative h-56 w-56">
                <div className="absolute inset-0 rounded-full border-2 border-border bg-card shadow-[0_0_60px_-20px_hsl(330,80%,60%,0.15)]">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute left-1/2 top-0 h-full w-px origin-bottom"
                      style={{ transform: `rotate(${i * 30}deg)` }}
                    >
                      <div className={`mx-auto ${i % 3 === 0 ? "h-3 w-0.5 bg-foreground" : "h-2 w-px bg-muted-foreground/50"}`} />
                    </div>
                  ))}
                  <div
                    className="absolute bottom-1/2 left-1/2 w-1 origin-bottom rounded-full bg-foreground"
                    style={{ height: "50px", marginLeft: "-2px", transform: `rotate(${hourDeg}deg)`, transition: "transform 0.5s ease" }}
                  />
                  <div
                    className="absolute bottom-1/2 left-1/2 w-0.5 origin-bottom rounded-full bg-foreground"
                    style={{ height: "65px", marginLeft: "-1px", transform: `rotate(${minuteDeg}deg)`, transition: "transform 0.3s ease" }}
                  />
                  <div
                    className="absolute bottom-1/2 left-1/2 origin-bottom rounded-full bg-primary"
                    style={{ height: "70px", width: "1px", marginLeft: "-0.5px", transform: `rotate(${secondDeg}deg)` }}
                  />
                  <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_2px_hsl(330,80%,60%,0.4)]" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
