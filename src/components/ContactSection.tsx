import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
            <span className="h-3 w-3 rounded-full bg-primary animate-pulse" />
          </div>
          <p className="text-sm font-medium text-primary">Available for work</p>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-5xl">
            Let's build something{" "}
            <span className="font-display italic">that actually works.</span>
          </h2>
          <a
            href="mailto:anjalikamal3105@gmail.com"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-8 py-4 text-lg font-medium text-foreground transition-all hover:border-primary hover:shadow-[0_0_30px_-8px_hsl(142,71%,45%,0.3)]"
          >
            <Mail className="h-5 w-5 text-primary" />
            anjalikamal3105@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
