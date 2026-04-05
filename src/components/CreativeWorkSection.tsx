import { motion } from "framer-motion";
import { Camera, PenLine, Sparkles } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, staggerItem } from "./ScrollReveal";

const photographyImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&q=80",
];

const writingPreviews = [
  {
    title: "The Quiet Art of Debugging Life",
    excerpt: "Sometimes the best fix is stepping away from the screen and letting the problem breathe...",
    category: "Reflections",
  },
  {
    title: "Why I Write Code Like Poetry",
    excerpt: "Every function tells a story. Every variable holds meaning. The best code reads like prose...",
    category: "Tech & Creativity",
  },
  {
    title: "Letters to the Night Sky",
    excerpt: "A collection of thoughts written under starlit Jaipur skies — where physics meets philosophy...",
    category: "Creative Writing",
  },
];

const CreativeWorkSection = () => {
  const [hoveredImg, setHoveredImg] = useState<number | null>(null);

  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="section-label">Beyond code</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-6xl">
            VISUAL{" "}
            <span className="font-display italic">Experiments</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Creativity isn't confined to code. I explore visual storytelling through photography and writing.
          </p>
        </ScrollReveal>

        {/* Photography Grid */}
        <div className="mt-16">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-2 mb-6">
              <Camera className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Photography</h3>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 gap-3 md:grid-cols-3" staggerDelay={0.06}>
            {photographyImages.map((img, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-xl"
                onMouseEnter={() => setHoveredImg(i)}
                onMouseLeave={() => setHoveredImg(null)}
              >
                <motion.img
                  src={img}
                  alt={`Photography ${i + 1}`}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                  animate={{ scale: hoveredImg === i ? 1.1 : 1 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredImg === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* Writing Previews */}
        <div className="mt-16">
          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-2 mb-6">
              <PenLine className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Writing</h3>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 md:grid-cols-3">
            {writingPreviews.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_0_40px_-10px_hsl(330,80%,60%,0.1)]"
                >
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                  <h4 className="mt-4 text-base font-bold text-foreground">{post.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeWorkSection;
