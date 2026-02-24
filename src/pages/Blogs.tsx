import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BehindCurtainsSection from "@/components/BehindCurtainsSection";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    date: "Feb 5, 2026",
    readTime: "6 min read",
    title: "Hands-On with Claude Opus 4.6 vs Gemini 3 Pro vs GPT-5.2",
    description: "I tested Anthropic's newest Claude Opus 4.6 against Gemini 3 Pro and GPT-5.2 in a real 3-prompt product prototype. Here's what actually worked and where each model excels.",
    tags: ["AI", "Claude", "Gemini 3 Pro", "GPT-5.2", "Coding"],
  },
  {
    date: "Jan 30, 2026",
    readTime: "3 min read",
    title: "Typography as Interface: Why Inter and Outfit Rule the Web",
    description: "Why I chose Inter and Outfit for my portfolio and Rune AI. A deep dive into font functionality, readability at scale, and how typography defines digital product identity.",
    tags: ["design", "typography", "ui-ux", "branding"],
  },
  {
    date: "Dec 31, 2025",
    readTime: "2 min read",
    title: "Designing Fluid Interfaces: My Approach to Animation",
    description: "Moving beyond 'making things move' to 'making things feel'. A deep dive into physics-based animation, Framer Motion, and creating emotional connections with UI.",
    tags: ["design", "animation", "framer-motion", "ui-ux"],
  },
  {
    date: "Dec 31, 2025",
    readTime: "3 min read",
    title: "How I Approach a Problem Before Writing Code",
    description: "Stop coding immediately. Learn the 80/20 rule of software engineering: 80% planning, 20% typing. A guide to thinking like a senior engineer.",
    tags: ["Engineering", "Productivity", "System Design"],
  },
  {
    date: "Dec 31, 2025",
    readTime: "3 min read",
    title: "My Current Tech Stack & Why I Chose It",
    description: "A deep dive into my preferred tools and technologies for 2026, focusing on performance, scalability, and developer experience.",
    tags: ["tech-stack", "nextjs", "react", "typescript"],
  },
  {
    date: "Dec 31, 2025",
    readTime: "3 min read",
    title: "The Reality of Shipping Products as a Student in India",
    description: "Balancing a Computer Science degree with a growing portfolio of side projects. From tutorial hell to shipping Rune.codes, here is my story.",
    tags: ["student-dev", "indie-hacking", "india"],
  },
  {
    date: "Dec 31, 2025",
    readTime: "2 min read",
    title: "The Solo Developer's Toolkit (2026 Edition)",
    description: "The non-code tools that keep me productive, organized, and sane. A curated list of software for design, planning, and testing.",
    tags: ["productivity", "tools", "workflow"],
  },
  {
    date: "Dec 31, 2025",
    readTime: "3 min read",
    title: "Things I Wish I Knew Before Starting to Code",
    description: "Key lessons learned from my coding journey to help beginners avoid common pitfalls and accelerate their learning.",
    tags: ["career", "advice", "beginners"],
  },
  {
    date: "Dec 31, 2025",
    readTime: "2 min read",
    title: "Why I Built dsa-hub: Solving My Own Problem",
    description: "The story behind building a real-time collaborative code editor for DSA practice. From the frustration of scattered resources to learning WebSockets and CRDTs.",
    tags: ["projects", "websockets", "react", "case-study"],
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
          insights i share.
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
