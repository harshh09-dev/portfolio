import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: "philosophy", label: "Philosophy", content: "Detail-driven design that prioritizes user intent over decoration. Every pixel earns its place." },
  { id: "motion", label: "Motion", content: "Subtle movement that confirms intent — never distracting. Animations serve function, not ego." },
  { id: "type", label: "Type", content: "Typography as interface. Hierarchy, rhythm, and scale guide users through content effortlessly." },
  { id: "feedback", label: "Feedback", content: "Instant, meaningful responses to every interaction. Users never wonder if something worked." },
  { id: "craft", label: "Craft", content: "Sweating spacing, timing, and transitions — the tiny stuff that separates good from exceptional." },
];

const PhilosophySection = () => {
  const [activeTab, setActiveTab] = useState("philosophy");
  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
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
        <div className="mt-12 flex flex-wrap gap-3">
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
    </section>
  );
};

export default PhilosophySection;
