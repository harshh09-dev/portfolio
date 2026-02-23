import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Akshit Malik",
    role: "Software Engineer III, Google",
    quote: "Parth stands out as a reliable frontend contributor. His clean code and user-friendly interfaces consistently add value with dependable initiative.",
  },
  {
    name: "Gulshan Sharma",
    role: "SDE II, Big4",
    quote: "Parth's attention to detail and focus on creating smooth interfaces helped refine our work significantly. His frontend skills stand out clearly.",
  },
  {
    name: "Shashank Kumar",
    role: "Senior Software Engineer, Cognizant",
    quote: "Working with Parth has been genuinely positive. He brings strong frontend knowledge and fresh perspective to every problem.",
  },
  {
    name: "Awdhesh Mishra",
    role: "Engineering Manager, Meta",
    quote: "His structured, calm approach and understanding of frontend concepts helps move work forward efficiently.",
  },
  {
    name: "Gaurav Pandey",
    role: "Senior Developer, Microsoft",
    quote: "Parth brings balanced technical understanding and practical thinking. His full-stack knowledge simplified complex ideas into elegant interfaces.",
  },
  {
    name: "Yuvika Bhat",
    role: "Product Manager, Amazon",
    quote: "Parth is a great frontend developer who understood our needs and improved things effectively. His attention to detail made collaboration comfortable.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h4 className="mt-4 text-sm font-semibold text-foreground">{t.name}</h4>
              <p className="text-xs text-muted-foreground">{t.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
