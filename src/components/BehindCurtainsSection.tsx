import { motion } from "framer-motion";
import { Github, BookOpen, Music } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const BehindCurtainsSection = () => {
  return (
    <section className="px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-label">Behind the curtains</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="mt-4 text-3xl font-bold text-foreground md:text-5xl">
            Decoding logic
            <span className="font-mono text-primary">&& </span>
            <span className="font-display italic">the lyrics</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* GitHub Card */}
          <ScrollReveal direction="left" delay={0.1}>
            <motion.a
              href="https://github.com/A-verse"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group block rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_-20px_hsl(330,80%,60%,0.1)]"
            >
              <div className="flex items-center gap-3">
                <Github className="h-6 w-6 text-foreground" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Anjali's Github</p>
                  <p className="text-xs text-muted-foreground">Latest Push</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-secondary p-4">
                <p className="text-xs text-muted-foreground">2d ago</p>
                <p className="mt-1 text-sm text-foreground">
                  "feat: implement context-aware task scheduler for FocusMate system."
                </p>
                <p className="mt-2 text-xs text-muted-foreground">Repo: Private work</p>
              </div>
            </motion.a>
          </ScrollReveal>

          {/* Lyrics & Music Card */}
          <ScrollReveal direction="right" delay={0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_-20px_hsl(330,80%,60%,0.1)]"
            >
              <div className="flex items-center gap-3">
                <Music className="h-6 w-6 text-foreground" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Lyrics & Decoding</p>
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">
                Decoding the <span className="font-display italic">music</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                I love to break down the logic behind my favorite tracks—sometimes it's the lyrics, sometimes it's the code. Here you'll find a blend of both: music that inspires my work, and the logic that powers it.
              </p>
              <div className="mt-6 rounded-xl bg-secondary p-4">
                <p className="text-xs text-muted-foreground">Last Played</p>
                <p className="mt-1 text-sm font-semibold text-foreground">LIVE WHILE WE'RE YOUNG</p>
                <p className="text-xs text-muted-foreground">FROM ONE DIRECTION</p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Visitors / Guestbook */}
        <ScrollReveal delay={0.2}>
          <motion.div
            whileHover={{ y: -4 }}
            className="mt-6 rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_60px_-20px_hsl(330,80%,60%,0.1)]"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-foreground" />
              <p className="text-sm font-semibold text-foreground">Visitors</p>
            </div>
            <h3 className="mt-6 text-xl font-bold text-foreground">
              Leave your <span className="font-display italic">signature</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">Let me know you were here.</p>

            <div className="mt-6 flex -space-x-2">
              {["AK", "MK", "AJ", "NLJ"].map((initials, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-secondary text-xs font-bold text-foreground"
                >
                  {initials}
                </motion.div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Join others</p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BehindCurtainsSection;
