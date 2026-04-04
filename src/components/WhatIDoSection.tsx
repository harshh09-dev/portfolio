import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Server, Layers, Zap, Package, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full-Stack Applications",
    summary: "End-to-end web apps with React, Node.js, and modern databases.",
    detail: "From database schema design to pixel-perfect frontends — I build complete applications using React, Next.js, Node.js, PostgreSQL, and Prisma. Every project ships with authentication, proper error handling, and production-grade architecture.",
  },
  {
    icon: Server,
    title: "Backend APIs & Systems",
    summary: "RESTful APIs, database design, and server-side logic.",
    detail: "I design and implement scalable REST APIs with Express/Fastify, handle complex data relationships with Prisma/Drizzle, and build authentication systems, webhook integrations, and background job processors.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    summary: "Core Web Vitals, bundle analysis, and rendering strategies.",
    detail: "I audit and optimize applications for speed — lazy loading, code splitting, image optimization, caching strategies, and database query optimization. Measurable improvements in LCP, FID, and CLS scores.",
  },
  {
    icon: Package,
    title: "Real-World Products",
    summary: "Solving actual problems for real users with shipped software.",
    detail: "Every project I build addresses a genuine need — whether it's an e-commerce platform for artisans, a metro services portal for commuters, or a digital wellbeing system. I focus on shipping software that people actually use.",
  },
];

const WhatIDoSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="section-label">What I do</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-bold text-foreground md:text-6xl"
        >
          BUILD{" "}
          <span className="font-display italic">& Ship</span>
        </motion.h2>

        <div className="mt-16 space-y-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="flex w-full items-center gap-4 p-6 text-left"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{service.summary}</p>
                </div>
                <motion.div
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border px-6 pb-6 pt-4">
                      <p className="text-sm leading-relaxed text-muted-foreground">{service.detail}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
