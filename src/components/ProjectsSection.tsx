import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FocusMate",
    description:
      "Modular edge-computing system connecting physical workspace signals with intelligent digital automation.",
    bullets: [
      "Real-time presence monitoring and event-driven decision engine",
      "Android control app for personalized focus management",
      "Privacy-first architecture with fully local processing",
    ],
    tags: ["Raspberry Pi", "Python", "Android", "Event-Driven Systems"],
    link: "",
  },
  {
    title: "JMRC Metro Services Portal",
    description:
      "Scalable service management platform built with serverless APIs and algorithm-driven fare computation.",
    bullets: [
      "Designed route-based fare calculation engine with inter-line transfer logic",
      "Implemented complaint lifecycle APIs with SLA breach monitoring",
      "Built analytics dashboard with sentiment analysis and resolution tracking",
      "Structured modular project architecture with type-safe APIs",
    ],
    tags: ["Next.js 16", "TypeScript (Strict)", "Zod", "Serverless Functions", "Netlify"],
    link: "https://jmrc-service-portal-nl7e.vercel.app/",
  },
  {
    title: "FABRO",
    description:
      "Modern e-commerce platform engineered for customization-first apparel ordering with performance-optimized architecture.",
    bullets: [
      "Designed modular product + customization flow with dynamic state management",
      "Implemented WhatsApp-integrated checkout logic with structured message payloads",
      "Optimized image-heavy layout using Next.js image pipeline",
      "Structured CMS-ready product schema with SEO metadata & JSON-LD",
    ],
    tags: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Local State Architecture", "SEO Optimization"],
    link: "https://fabro-handcrafted-indian-embroidery.vercel.app/",
  },
  {
    title: "APS Official Website",
    description:
      "Community-focused web platform engineered to streamline event communication and member engagement.",
    bullets: [
      "Designed modular event and gallery components",
      "Implemented structured routing for dynamic event detail pages",
      "Integrated motion-based UI transitions for enhanced user experience",
      "Built scalable layout structure for future forum and resource expansion",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://aps-iiitdmj.vercel.app/",
  },
  {
    title: "Palate",
    description:
      "Scalable full-stack recipe management platform engineered with modern App Router architecture and typed API routes.",
    bullets: [
      "Designed relational schema with Prisma ORM and PostgreSQL",
      "Implemented protected API routes with Supabase authentication",
      "Integrated cloud image storage with role-based access policies",
      "Structured modular routing with Next.js App Router",
    ],
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Supabase Auth", "Server Components"],
    link: "https://palate-nu.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Profile avatar + heading */}
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground">
            AK
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
          <span className="text-muted-foreground">Showcase</span>
        </motion.h2>

        <div className="mt-16 space-y-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link || undefined}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-12px_hsl(142,71%,45%,0.15)] md:p-10"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-foreground md:text-3xl">{project.title}</h3>
                {project.link && (
                  <ExternalLink className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:text-primary" />
                )}
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

              {project.link && (
                <p className="mt-4 text-xs font-medium text-primary">Live Demo →</p>
              )}

              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>

        {/* See more */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/A-verse"
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
