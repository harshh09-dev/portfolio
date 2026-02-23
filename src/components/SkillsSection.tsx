const skills = [
  "ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "Framer Motion",
  "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma",
  "Zustand", "Git", "Docker", "AWS", "Vercel", "Linux",
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

        {/* Skills grid */}
        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {skill}
            </span>
          ))}
        </div>
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
