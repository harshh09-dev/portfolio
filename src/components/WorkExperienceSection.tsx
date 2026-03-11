import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web Developer",
    company: "FABRO",
    period: "Feb 2026 – Present | Remote",
    bullets: [
      "Delivered a scalable e-commerce platform showcasing Indian embroidery through high-impact visual storytelling.",
      "Improved user conversion flow by designing seamless cart and order workflows integrated with WhatsApp-based routing.",
      "Built a maintainable TypeScript architecture to support future brand expansion and feature scaling.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Full-stack architecture", "Component architecture", "API integration", "State management"],
  },
  {
    role: "Software Developer",
    company: "Jaipur Metro Rail Corporation (JMRC)",
    period: "June 2025 – August 2025 | Jaipur",
    bullets: [
      "Improved operational efficiency by developing a voice detection module for CCS2300 counters within the Automatic Fare Collection system.",
      "Enhanced issue resolution workflows by collaborating on a smart complaint & feedback portal for metro operations.",
      "Bridged software and physical infrastructure systems by gaining hands-on exposure to SMPS and signaling components.",
    ],
    tags: ["System integration", "Hardware-software coordination", "Embedded systems integration", "Signal processing concepts", "Full-stack development", "Database workflows"],
  },
  {
    role: "Core Working Committee Member",
    company: "Astronomy & Physics Society (APS), IIIT Jabalpur",
    period: "August 2024 – April 2025",
    bullets: [
      "Increased student engagement in STEM activities by organizing and leading technical workshops and coding-based sessions.",
      "Coordinated cross-functional teams to execute coding challenges, guest lectures, and physics-based technical events.",
      "Streamlined event execution workflows by managing timelines, delegating responsibilities, and ensuring technical setup readiness.",
      "Facilitated knowledge-sharing sessions on coding and technical concepts, strengthening peer learning and community engagement.",
    ],
    tags: ["Leadership", "Technical mentoring", "Public speaking", "Process management", "System thinking", "Event planning", "Team collaboration", "Agile coordination"],
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "May 2024 – August 2024",
    bullets: [
      "Improved application performance and usability by contributing feature enhancements and bug fixes to production-level open-source repositories.",
      "Strengthened code quality and maintainability through structured PR reviews and collaborative Git workflows.",
      "Integrated third-party APIs and optimized UI responsiveness to enhance user experience.",
    ],
    tags: ["React", "Node.js", "TypeScript", "GitHub", "Version control", "API integration", "Frontend optimization", "Code reviews"],
  },
];

const WorkExperienceSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-4xl">
        <p className="section-label">Career path</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-bold leading-tight text-foreground md:text-5xl"
        >
          Experience That Brings{" "}
          <span className="font-display italic">Ideas to Life</span>
        </motion.h2>

        <div className="mt-12 space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative border-l-2 border-border py-8 pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-10 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />

              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Briefcase className="h-3.5 w-3.5" />
                  {exp.period}
                </div>
              </div>

              <ul className="mt-3 space-y-2">
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
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
