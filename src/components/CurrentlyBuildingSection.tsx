import { motion } from "framer-motion";
import { Rocket, ArrowUpRight } from "lucide-react";

const CurrentlyBuildingSection = () => {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-primary/5 p-8 md:p-12"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Currently Working On</p>
              <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                Privacy-Focused Digital Wellbeing System
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Currently working on an interdisciplinary engineering project focused on privacy-first digital wellbeing systems using Raspberry Pi, Python, and Android — combining hardware with intelligent software to help users manage focus and productivity without compromising privacy.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Raspberry Pi", "Python", "Android", "Edge Computing", "Privacy-First"].map((tag) => (
                  <span key={tag} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-sm italic text-muted-foreground">
                "Currently building meaningful digital projects and exploring the intersection of technology, creativity and design."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyBuildingSection;
