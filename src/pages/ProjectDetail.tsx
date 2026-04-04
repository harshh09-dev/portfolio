import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/components/ProjectsSection";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground">Project not found</h1>
          <Link to="/projects" className="mt-4 inline-block text-primary hover:underline">← Back to projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-20">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black text-foreground md:text-7xl"
        >
          {project.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 flex flex-wrap gap-2"
        >
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {project.images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border">
              <img src={img} alt={`${project.title} ${i + 1}`} className="w-full object-cover aspect-video" loading="lazy" />
            </div>
          ))}
        </motion.div>

        {/* Details */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { label: "What", content: project.what },
            { label: "How", content: project.how },
            { label: "Impact", content: project.impact },
          ].map((section) => (
            <motion.div
              key={section.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{section.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex gap-4"
        >
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:shadow-[0_0_30px_-6px_hsl(var(--primary)/0.4)]">
              <ExternalLink className="h-4 w-4" /> Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary">
              <Github className="h-4 w-4" /> Source Code
            </a>
          )}
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
