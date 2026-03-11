import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mayank Kaushik",
    role: "Co-Intern, JMRC",
    quote: "Working with Anjali on the JMRC Services Portal was seamless. She structured the APIs and frontend logic clearly, making integration smooth and the system easy to scale.",
  },
  {
    name: "Aruna Jain",
    role: "Founder, FABRO",
    quote: "Anjali understood the vision behind FABRO and translated it into a clean, elegant digital experience. The customization flow and product presentation reflect thoughtful design and structured execution.",
  },
  {
    name: "Natwar Lal Jain",
    role: "DGM (S&T), Jaipur Metro Rail Corporation",
    quote: "Anjali demonstrated a structured approach while working on the JMRC Services Portal. Her clarity in system design and attention to implementation details contributed meaningfully to the project.",
  },
  {
    name: "Anil Sharma",
    role: "Project Mentor, JMRC",
    quote: "Anjali maintained a structured approach throughout the JMRC Services Portal project. Her clarity in system flow and implementation ensured steady progress and reliable results.",
  },
  {
    name: "Sukriti Jha",
    role: "Team Lead, Aikyam – ABU DD Robocon 2025",
    quote: "Anjali contributed strong analytical thinking and structured calculations to the Robocon robot design. Her work on motion parameters and system integration added clarity and precision to our overall build.",
  },
  {
    name: "Prof. Shyam Kumar Chokka",
    role: "Project Mentor (NeuroSpeak), IIIT Jabalpur",
    quote: "Anjali demonstrated interdisciplinary thinking in the NeuroSpeak project, integrating AI concepts with system-level architecture. Her structured approach and technical clarity were commendable.",
  },
  {
    name: "Prof. Yashpal Singh Katharria",
    role: "Project Supervisor (FocusMate), IIIT Jabalpur",
    quote: "Anjali contributed meaningfully to the FocusMate team by bringing structured thinking to the system design and implementation. Her ability to coordinate hardware integration with software logic supported the overall success of the project.",
  },
];

const TestimonialsSection = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <p className="section-label">What others say</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-4xl font-bold text-foreground md:text-6xl"
        >
          The Voices{" "}
          <span className="font-display italic">Behind</span>
        </motion.h2>
      </div>

      {/* Horizontal scrolling carousel */}
      <div className="mt-16">
        <div className="animate-testimonial-scroll flex gap-6 px-6">
          {doubled.map((t, i) => (
            <div
              key={t.name + i}
              className="w-[340px] flex-shrink-0 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 3)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
