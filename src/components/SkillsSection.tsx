import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Development",
    color: "text-primary",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma", "Git", "Docker", "AWS", "Vercel", "Linux"],
  },
  {
    category: "Design",
    color: "text-primary",
    skills: ["UI/UX Design", "Graphic Design", "Branding", "Figma", "Poster Design", "Logo Design"],
  },
  {
    category: "Creative",
    color: "text-primary",
    skills: ["Photography", "Photo Editing", "Content Writing", "Visual Storytelling", "Creative Direction"],
  },
];

const words = [
  "User-Friendly", "Adaptive", "Fluid", "Future-Proof",
  "SEO-Ready", "Immersive", "Protected", "Dependable", "Captivating",
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

        {/* Skills by category */}
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
                  <span
                    key={skill}
                    className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack animation strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-border bg-card p-6"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tools I Use</p>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "Figma", "Photoshop", "VS Code", "Git", "Tailwind CSS", "Framer Motion", "Prisma", "PostgreSQL"].map((tool) => (
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
          {[...words, ...words].map((word, i) => (
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
