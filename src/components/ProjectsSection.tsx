import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FocusMate",
    problem: "Digital distractions and lack of workspace awareness reduce productivity and wellbeing.",
    solution: "Built a modular edge-computing system connecting physical workspace signals with intelligent digital automation — a privacy-first digital wellbeing system.",
    tags: ["Raspberry Pi", "Python", "Android", "Event-Driven Systems"],
    link: "",
    github: "https://github.com/A-verse",
    screenshot: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    title: "JMRC Metro Services Portal",
    problem: "Metro passengers lacked a unified platform for fare calculation, complaints, and service feedback.",
    solution: "Built a scalable service management platform with route-based fare calculation engine, complaint lifecycle APIs with SLA monitoring, and analytics dashboard with sentiment analysis.",
    tags: ["Next.js 16", "TypeScript", "Zod", "Serverless Functions", "Netlify"],
    link: "https://jmrc-service-portal-nl7e.vercel.app/",
    github: "",
    screenshot: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
  },
  {
    title: "FABRO",
    problem: "Traditional embroidery artisans had no digital presence for custom apparel ordering.",
    solution: "Engineered a modern e-commerce platform with customization-first ordering flow, WhatsApp-integrated checkout, and CMS-ready product schema with SEO optimization.",
    tags: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "SEO"],
    link: "https://fabro-handcrafted-indian-embroidery.vercel.app/",
    github: "",
    screenshot: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
  },
  {
    title: "Palate",
    problem: "Home cooks needed a structured platform to manage, share, and discover recipes.",
    solution: "Built a scalable full-stack recipe management platform with relational schema, protected API routes, cloud image storage, and role-based access policies.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Supabase Auth"],
    link: "https://palate-nu.vercel.app/",
    github: "",
    screenshot: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
  },
];

const ProjectsSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground">
            AK
          </div>
          <div>
            <p className="section-label">Featured projects</p>
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

        <div className="mt-16 space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-12px_hsl(330,80%,60%,0.15)]"
            >
              {/* Screenshot */}
              <div className="relative h-56 w-full overflow-hidden md:h-72">
                <img
                  src={project.screenshot}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-foreground md:text-3xl">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-full bg-card/80 p-2 backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground">
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="rounded-full bg-card/80 p-2 backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Problem & Solution */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-destructive/80">Problem</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">Solution</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

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

                {/* Links */}
                <div className="mt-4 flex gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary hover:underline">
                      Live Demo →
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-muted-foreground hover:text-foreground hover:underline">
                      Source Code →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
