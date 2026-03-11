import { motion } from "framer-motion";
import { Github, BookOpen, Music } from "lucide-react";

const BehindCurtainsSection = () => {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">Behind the curtains</p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-3xl font-bold text-foreground md:text-5xl"
        >
          Decoding logic
          <span className="font-mono text-primary">&& </span>
          <span className="font-display italic">the lyrics</span>
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* GitHub Card */}
          <motion.a
            href="https://github.com/A-verse"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50"
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

          {/* Lyrics & Music Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-8"
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
        </div>

        {/* Visitors / Guestbook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 rounded-2xl border border-border bg-card p-8"
        >
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-foreground" />
            <p className="text-sm font-semibold text-foreground">Visitors</p>
          </div>
          <h3 className="mt-6 text-xl font-bold text-foreground">
            Leave your <span className="font-display italic">signature</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">Let me know you were here.</p>

          {/* Avatar stack */}
          <div className="mt-6 flex -space-x-2">
            {["AK", "MK", "AJ", "NLJ"].map((initials, i) => (
              <div
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-secondary text-xs font-bold text-foreground"
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Join others</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BehindCurtainsSection;
