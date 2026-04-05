import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "focusmate",
    title: "FocusMate",
    what: "A privacy-first digital wellbeing system that connects physical workspace signals with intelligent automation.",
    how: "Built modular edge-computing architecture using Raspberry Pi, Python, and Android — event-driven design with zero cloud dependency for maximum privacy.",
    impact: "Eliminated digital distractions for users without compromising personal data. Demonstrated hardware-software integration at engineering project level.",
    tags: ["Raspberry Pi", "Python", "Android", "Edge Computing"],
    link: "",
    github: "https://github.com/A-verse",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    ],
  },
  {
    id: "jmrc",
    title: "JMRC Metro Services Portal",
    what: "A unified service platform for metro passengers — fare calculation, complaints, and feedback with analytics.",
    how: "Engineered route-based fare calculation engine, complaint lifecycle APIs with SLA monitoring, and sentiment analysis dashboard using Next.js 16 and serverless functions.",
    impact: "Streamlined metro service management for JMRC operations. Reduced complaint resolution ambiguity through structured lifecycle tracking.",
    tags: ["Next.js 16", "TypeScript", "Zod", "Serverless", "Netlify"],
    link: "https://jmrc-service-portal-nl7e.vercel.app/",
    github: "",
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    ],
  },
  {
    id: "fabro",
    title: "FABRO",
    what: "Modern e-commerce platform giving traditional embroidery artisans a digital presence with custom ordering.",
    how: "Built customization-first ordering flow with WhatsApp-integrated checkout, CMS-ready product schema, and SEO optimization using Next.js App Router.",
    impact: "Enabled artisans to reach customers digitally. Improved user conversion through seamless cart and order workflows.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    link: "https://fabro-handcrafted-indian-embroidery.vercel.app/",
    github: "",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    ],
  },
  {
    id: "palate",
    title: "Palate",
    what: "Full-stack recipe management platform with relational schema and role-based access control.",
    how: "Built with Next.js 14, Prisma ORM, PostgreSQL, and Supabase Auth. Cloud image storage, protected API routes, and granular RLS policies.",
    impact: "Shipped a production-ready app with real authentication, data persistence, and image handling — demonstrating full-stack engineering maturity.",
    tags: ["Next.js 14", "Prisma", "PostgreSQL", "Supabase Auth"],
    link: "https://palate-nu.vercel.app/",
    github: "",
    images: [
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
    ],
  },
];

const StickyProjectCard = ({ project, index, totalCards }: { project: typeof projects[0]; index: number; totalCards: number }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, index < totalCards - 1 ? 0.6 : 1]);

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{
        top: `${80 + index * 30}px`,
        zIndex: index + 1,
        paddingBottom: index < totalCards - 1 ? "2rem" : 0,
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-background/50 transition-colors duration-500 hover:border-primary/40"
      >
        {/* Image carousel */}
        <div className="relative h-52 w-full overflow-hidden md:h-64 lg:h-72">
          <motion.img
            key={imgIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={project.images[imgIdx]}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

          {project.images.length > 1 && (
            <div className="absolute bottom-16 right-4 flex gap-2 md:right-6">
              <button
                onClick={(e) => { e.preventDefault(); setImgIdx(imgIdx === 0 ? project.images.length - 1 : imgIdx - 1); }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-card/80 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={(e) => { e.preventDefault(); setImgIdx((imgIdx + 1) % project.images.length); }}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-card/80 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between md:left-6 md:right-6">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                0{index + 1} / 0{totalCards}
              </span>
              <h3 className="mt-1 text-xl font-bold text-foreground md:text-3xl">{project.title}</h3>
            </div>
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

        {/* WHAT / HOW / IMPACT */}
        <div className="p-5 md:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">What</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.what}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">How</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.how}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary/80">Impact</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.impact}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>

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
            <Link to={`/projects/${project.id}`} className="ml-auto text-xs font-semibold text-primary hover:underline">
              View Details →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="section-label">Featured projects</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl font-bold text-foreground md:text-6xl"
        >
          VENTURE{" "}
          <span className="text-muted-foreground">Showcase</span>
        </motion.h2>

        <div className="relative mt-16">
          {projects.map((project, i) => (
            <StickyProjectCard key={project.id} project={project} index={i} totalCards={projects.length} />
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

export { projects };
export default ProjectsSection;
