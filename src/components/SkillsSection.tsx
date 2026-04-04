import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Development",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma", "Git", "Docker", "AWS", "Python", "REST APIs"],
  },
  {
    category: "Design",
    skills: ["Figma", "Graphic Design", "Poster Design", "Logo Design", "Branding", "UI/UX"],
  },
  {
    category: "Creative",
    skills: ["Photography", "Photo Editing", "Creative Writing", "Technical Writing", "Visual Storytelling"],
  },
];

const coreStrengths = [
  "System Design",
  "Clean Architecture",
  "API Design",
  "Database Modeling",
  "Performance Optimization",
  "Problem Solving",
  "Technical Documentation",
  "Agile Development",
];

const marqueeWords = [
  "Scalable", "Adaptive", "Fluid", "Future-Proof",
  "SEO-Ready", "Performant", "Secure", "Full-Stack",
];

const SkillsSection = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <p className="section-label">Technical arsenal</p>
        <h2 className="mt-4 text-4xl font-bold text-foreground md:text-6xl">
          MY SKILLSET{" "}
          <span className="text-muted-foreground">The Magic Behind</span>
        </h2>

        <div className="mt-16 space-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_-6px_hsl(var(--primary)/0.2)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-border bg-card p-6"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Core Strengths</p>
          <div className="flex flex-wrap gap-3">
            {coreStrengths.map((strength) => (
              <motion.span
                key={strength}
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
              >
                {strength}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 rounded-2xl border border-border bg-card p-6"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tools I Use</p>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "Node.js", "PostgreSQL", "Figma", "VS Code", "Git", "Tailwind CSS", "Docker", "Prisma", "Postman"].map((tool) => (
              <span key={tool} className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-foreground">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y border-border py-5">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="mx-6 flex items-center gap-4 text-lg font-semibold uppercase tracking-wider text-muted-foreground">
              {word}
              <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
