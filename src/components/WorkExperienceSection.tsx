import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    role: "Web Developer",
    company: "FABRO",
    period: "Feb 2026 – Present",
    location: "Remote",
    bullets: [
      "Delivered scalable e-commerce platform for Indian embroidery artisans — 3x increase in online order inquiries.",
      "Engineered WhatsApp-integrated checkout flow, improving user conversion by reducing cart abandonment.",
      "Built maintainable TypeScript architecture supporting future brand expansion and CMS integration.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "API integration"],
  },
  {
    role: "Software Developer",
    company: "Jaipur Metro Rail Corporation (JMRC)",
    period: "Jun – Aug 2025",
    location: "Jaipur",
    bullets: [
      "Developed voice detection module for CCS2300 counters within Automatic Fare Collection system.",
      "Built smart complaint & feedback portal — reduced issue resolution time through structured lifecycle tracking.",
      "Gained hands-on exposure to hardware-software integration: SMPS, signaling, and embedded systems.",
    ],
    tags: ["System integration", "Full-stack", "Embedded systems"],
  },
  {
    role: "Core Working Committee",
    company: "Astronomy & Physics Society, IIIT Jabalpur",
    period: "Aug 2024 – Apr 2025",
    location: "IIIT Jabalpur",
    bullets: [
      "Organized 10+ technical workshops and coding sessions — increased STEM engagement by 40%.",
      "Coordinated cross-functional teams for coding challenges, guest lectures, and technical events.",
      "Facilitated peer learning sessions strengthening community engagement and knowledge sharing.",
    ],
    tags: ["Leadership", "Technical mentoring", "Event planning"],
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "May – Aug 2024",
    location: "Remote",
    bullets: [
      "Contributed feature enhancements and bug fixes to production-level open-source repositories.",
      "Integrated third-party APIs and optimized UI responsiveness — improved load times by 25%.",
      "Strengthened code quality through structured PR reviews and collaborative Git workflows.",
    ],
    tags: ["React", "Node.js", "TypeScript", "Open Source"],
  },
];

const WorkExperienceSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="section-label">Career path</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Experience That{" "}
            <span className="font-display italic">Ships</span>
          </h2>
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1} direction="left">
                <div className="group relative py-8 pl-12">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 300 }}
                    className="absolute left-[12px] top-10 h-4 w-4 rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_15px_2px_hsl(330,80%,60%,0.4)]"
                  />

                  <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_60px_-12px_hsl(330,80%,60%,0.08)]">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                        <p className="text-sm font-medium text-primary">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.period} · {exp.location}
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
