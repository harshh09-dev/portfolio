import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Rune",
    description:
      "🚀 Rune is your all-in-one productivity toolkit featuring 100+ powerful tools for learning, creating, and working smarter.",
    bullets: [
      "100+ free tools including text editors, PDF converters, and image processors",
      "AI-powered tools for writing, summarizing, and content creation",
      "Developer utilities with JSON formatter, regex tester, and code tools",
    ],
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "OpenAI", "Framer Motion", "Node.js", "Vercel"],
    link: "https://rune.codes/",
  },
  {
    title: "RuneAI",
    description:
      "🚀 Rune AI featuring a powerful RAG system, three specialized models (Fast, Thinking, Pro), and a massive 500K context limit.",
    bullets: [
      "Three specialized models: Fast (Groq), Thinking (Gemini), and Pro",
      "Massive 500K context limit for deep document analysis",
      "Advanced Web Search and intelligent automated Tool Calling",
    ],
    tags: ["LangGraph", "Tavily", "Appwrite", "Next.js", "Vercel"],
    link: "https://ai.rune.codes/",
  },
  {
    title: "RuneHub",
    description:
      "🚀 RuneHub is a comprehensive programming education platform featuring extensive tutorials and articles.",
    bullets: [
      "Comprehensive programming tutorials and articles across multiple languages",
      "Tech trends section with latest industry news and insights",
      "Sanity CMS integration for efficient content management",
    ],
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Sanity CMS"],
    link: "https://runehub.page/",
  },
  {
    title: "Old Portfolio",
    description:
      "🚀 A premium, high-performance portfolio crafted for the modern web with fluid GSAP animations.",
    bullets: [
      "Premium, high-performance design with fluid GSAP animations",
      "Physics-based interactions and advanced state management",
      "Robust full-stack architecture with Prisma and Node.js",
    ],
    tags: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "GSAP"],
    link: "https://parthsharma.me/",
  },
  {
    title: "Portfolio Template",
    description:
      "🚀 A stunning, modern portfolio template designed to showcase creative work with elegance and style.",
    bullets: [
      "Modern, responsive design with smooth animations and transitions",
      "Clean aesthetic layout perfect for showcasing creative projects",
      "Built with performance and accessibility in mind",
    ],
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://parthsharma-ruby.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Profile avatar + heading */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground">
            PS
          </div>
          <div>
            <p className="section-label">Crafting modern experiences</p>
          </div>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl font-bold text-foreground md:text-6xl"
        >
          VENTURE{" "}
          <span className="text-muted-foreground">SHOWCASE</span>
        </motion.h2>

        <div className="mt-16 space-y-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-12px_hsl(142,71%,45%,0.15)] md:p-10"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">{project.title}</h3>
                <ExternalLink className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:text-primary" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Bullet points */}
              <ul className="mt-4 space-y-1.5">
                {project.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tags */}
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

        {/* See more */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/ksparth12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            See more projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
