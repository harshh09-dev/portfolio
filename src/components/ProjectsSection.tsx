import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Rune",
    description:
      "All-in-one productivity toolkit featuring 100+ powerful tools for learning, creating, and working smarter.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "OpenAI"],
    link: "https://rune.codes/",
  },
  {
    title: "RuneAI",
    description:
      "Powerful RAG system with three specialized models, 500K context limit, and advanced Web Search.",
    tags: ["LangGraph", "Tavily", "Appwrite", "Next.js"],
    link: "https://ai.rune.codes/",
  },
  {
    title: "RuneHub",
    description:
      "Comprehensive programming education platform with tutorials, articles, and tech trends.",
    tags: ["React", "Next.js", "Sanity CMS", "TypeScript"],
    link: "https://runehub.page/",
  },
  {
    title: "Portfolio Template",
    description:
      "Stunning modern portfolio with smooth animations, responsive design, and clean aesthetic.",
    tags: ["React", "Framer Motion", "Next.js", "Tailwind CSS"],
    link: "https://parthsharma-ruby.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Crafting modern experiences</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-bold text-foreground md:text-6xl"
        >
          VENTURE{" "}
          <span className="text-muted-foreground">SHOWCASE</span>
        </motion.h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-12px_hsl(142,71%,45%,0.15)]"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
