import { motion } from "framer-motion";
import { Globe, Layout, Code, Server, Camera, PenTool } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full Stack Development",
    description: "End-to-end web applications built with React, Node.js, and modern databases — optimized for performance and scalability.",
  },
  {
    icon: Layout,
    title: "Portfolio Websites",
    description: "Custom portfolio sites that showcase your work with stunning visuals and smooth interactions.",
  },
  {
    icon: Code,
    title: "Frontend Engineering",
    description: "Pixel-perfect, responsive interfaces with React, TypeScript, and Tailwind CSS — fast and accessible.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "RESTful APIs, database design, authentication systems, and server-side logic with Node.js and PostgreSQL.",
  },
  {
    icon: Camera,
    title: "Creative Photography",
    description: "Visual storytelling through photography — product shots, portraits, and creative compositions.",
  },
  {
    icon: PenTool,
    title: "Content & Technical Writing",
    description: "Blog posts, documentation, and creative writing that communicate complex ideas simply and effectively.",
  },
];

const ServicesSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">What I can help with</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-bold text-foreground md:text-6xl"
        >
          SERVICES{" "}
          <span className="font-display italic">I Offer</span>
        </motion.h2>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-10px_hsl(330,80%,60%,0.12)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-6px_hsl(330,80%,60%,0.4)]"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
