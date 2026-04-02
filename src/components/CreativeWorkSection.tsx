import { motion } from "framer-motion";
import { Camera, PenLine, Palette, Sparkles } from "lucide-react";

const creativeAreas = [
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing moments, emotions, and stories through the lens. From landscapes to portraits.",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80",
    ],
  },
  {
    icon: PenLine,
    title: "Poetry & Writing",
    description: "Expressing thoughts through words — exploring themes of technology, nature, and human connection.",
    images: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80",
    ],
  },
  {
    icon: Palette,
    title: "Visual Design",
    description: "Creating visual identities, posters, and digital art that blend aesthetics with purpose.",
    images: [
      "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=400&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
    ],
  },
];

const CreativeWorkSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-primary" />
          <p className="section-label">Beyond code</p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-bold text-foreground md:text-6xl"
        >
          VISUAL{" "}
          <span className="font-display italic">Experiments</span>
        </motion.h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Creativity isn't confined to code. I explore visual storytelling through photography, writing, and design.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {creativeAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card"
            >
              {/* Image gallery */}
              <div className="grid grid-cols-2 gap-1">
                {area.images.map((img, j) => (
                  <div key={j} className="overflow-hidden">
                    <img
                      src={img}
                      alt={`${area.title} ${j + 1}`}
                      className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2">
                  <area.icon className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">{area.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeWorkSection;
