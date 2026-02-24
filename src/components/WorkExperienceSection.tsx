import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Founder & Full Stack Developer",
    company: "Rune",
    period: "2023 – Present",
    description:
      "Building Rune ecosystem — Rune (100+ tools), Rune AI (RAG-powered assistant), and RuneHub (programming education platform). Managing full product lifecycle from design to deployment.",
    tags: ["Next.js", "TypeScript", "LangGraph", "Vercel", "Appwrite"],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2022 – Present",
    description:
      "Delivering high-performance web applications for startups and businesses. Specializing in responsive UI, animations, and seamless user experiences.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
  },
  {
    role: "Full Stack Intern",
    company: "Various Startups",
    period: "2021 – 2022",
    description:
      "Contributed to frontend architecture and backend APIs. Gained hands-on experience in agile development, code reviews, and CI/CD pipelines.",
    tags: ["React", "Express.js", "MongoDB", "Git"],
  },
];

const WorkExperienceSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="section-label">Career path</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl"
        >
          Work{" "}
          <span className="font-display italic">Experience</span>
        </motion.h2>

        <div className="mt-12 space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative border-l-2 border-border py-8 pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-10 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />

              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5" />
                  {exp.period}
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
