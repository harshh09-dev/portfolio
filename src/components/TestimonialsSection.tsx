import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Gulshan Sharma",
    role: "SDE II, Big4",
    quote: "Parth's attention to detail and focus on creating smooth interfaces helped refine our work significantly. His frontend skills stand out clearly.",
  },
  {
    name: "Shashank Kumar",
    role: "Senior Software Engineer, Cognizant",
    quote: "Working with Parth has been genuinely positive. He brings strong frontend knowledge and fresh perspective to every problem, making collaboration smooth.",
  },
  {
    name: "Armaan Singh",
    role: "Technical Lead, Infosys",
    quote: "Parth contributed solid improvements through structured approach and clear communication. He's someone you can rely on when building quality interfaces.",
  },
  {
    name: "Akshit Malik",
    role: "Software Engineer III, Google",
    quote: "Parth stands out as a reliable frontend contributor. His clean code and user-friendly interfaces consistently add value with dependable initiative.",
  },
  {
    name: "Yuvika Bhat",
    role: "Product Manager, Amazon",
    quote: "Parth is a great frontend developer who understood our needs and improved things effectively. His attention to detail made collaboration comfortable.",
  },
  {
    name: "Gaurav Pandey",
    role: "Senior Developer, Microsoft",
    quote: "Parth brings balanced technical understanding and practical thinking. His full-stack knowledge simplified complex ideas into elegant interfaces.",
  },
  {
    name: "Awdhesh Mishra",
    role: "Engineering Manager, Meta",
    quote: "His structured, calm approach and understanding of frontend concepts helps move work forward efficiently.",
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
                  {t.name.split(" ").map((n) => n[0]).join("")}
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
