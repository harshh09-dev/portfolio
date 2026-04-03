import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BehindCurtainsSection from "@/components/BehindCurtainsSection";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    date: "Mar 15, 2026",
    readTime: "5 min read",
    title: "Building Scalable APIs with Node.js and PostgreSQL",
    description: "A practical guide to designing RESTful APIs that handle real traffic. From connection pooling to query optimization — lessons from building production systems.",
    tags: ["Node.js", "PostgreSQL", "Backend", "API Design"],
  },
  {
    date: "Feb 28, 2026",
    readTime: "6 min read",
    title: "React Server Components vs Client Components: When to Use What",
    description: "Breaking down the mental model behind RSC. Real examples from my projects showing when server rendering actually matters and when it's overkill.",
    tags: ["React", "Next.js", "Performance", "Full Stack"],
  },
  {
    date: "Feb 5, 2026",
    readTime: "4 min read",
    title: "My Full Stack Tech Stack for 2026 and Why",
    description: "React, Node.js, PostgreSQL, Prisma, Tailwind — why I chose each tool and how they work together. A pragmatic guide for fellow developers.",
    tags: ["Tech Stack", "React", "Node.js", "Developer Tools"],
  },
  {
    date: "Jan 20, 2026",
    readTime: "3 min read",
    title: "How I Approach a Problem Before Writing Code",
    description: "Stop coding immediately. Learn the 80/20 rule of software engineering: 80% planning, 20% typing. A guide to thinking like a senior engineer.",
    tags: ["Engineering", "Productivity", "System Design"],
  },
  {
    date: "Jan 5, 2026",
    readTime: "5 min read",
    title: "Authentication Done Right: JWT, Sessions, and OAuth",
    description: "Implementing auth from scratch vs using libraries. Security pitfalls I've encountered and how to avoid them in your full-stack apps.",
    tags: ["Authentication", "Security", "Backend", "Node.js"],
  },
  {
    date: "Dec 31, 2025",
    readTime: "3 min read",
    title: "The Reality of Shipping Products as a Student in India",
    description: "Balancing a Computer Science degree with a growing portfolio of side projects. From tutorial hell to shipping real products, here is my story.",
    tags: ["Student Dev", "Indie Hacking", "Career"],
  },
  {
    date: "Dec 15, 2025",
    readTime: "4 min read",
    title: "Database Design Patterns Every Developer Should Know",
    description: "Normalization, indexing, and query optimization. Practical patterns I use in every project to keep databases fast and maintainable.",
    tags: ["Database", "PostgreSQL", "System Design", "Backend"],
  },
  {
    date: "Dec 1, 2025",
    readTime: "3 min read",
    title: "Why I Built FocusMate: Solving My Own Productivity Problem",
    description: "The story behind building a privacy-focused digital wellbeing system. From the frustration of constant distractions to engineering a hardware-software solution.",
    tags: ["Projects", "Raspberry Pi", "Python", "Case Study"],
  },
  {
    date: "Nov 15, 2025",
    readTime: "2 min read",
    title: "Things I Wish I Knew Before Starting Full Stack Development",
    description: "Key lessons learned from my coding journey — from debugging nightmares to deployment wins. Honest advice for aspiring full-stack developers.",
    tags: ["Career", "Advice", "Full Stack"],
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-name text-center text-[clamp(4rem,15vw,12rem)] font-black uppercase leading-[0.85] tracking-tighter text-foreground"
        >
          BLOGS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground"
        >
          THOUGHTS, TUTORIALS, AND
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-2 font-serif text-3xl italic text-foreground/80 md:text-4xl"
        >
          engineering insights.
        </motion.p>
      </section>

      {/* Blog Posts */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="mb-12 text-2xl font-bold text-foreground">Latest Posts</h2>
        <div className="space-y-0 divide-y divide-border">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer py-8 transition-colors hover:bg-card/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-card px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <BehindCurtainsSection />
      <Footer />
    </div>
  );
};

export default Blogs;
