import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github } from "lucide-react";

const signatures = [
  { name: "Parth Sharma", date: "Dec 31", message: "Welcome ❤️", pinned: true },
  { name: "Laura", date: "Feb 22", message: "Amazing UI and smooth interactions! Loved it!" },
  { name: "Kaushal S", date: "Feb 22", message: "Nice Site !" },
  { name: "Dhruv Sharma", date: "Feb 21", message: "Great and inspiring work buddy ! 👍" },
  { name: "Prashant Chouhan", date: "Feb 21", message: "lovelyyyy" },
  { name: "chintan", date: "Feb 16", message: "Lovely site bro" },
  { name: "Omkar", date: "Feb 16", message: "Kindly provide me with the code, sir." },
  { name: "Sameer Sahu", date: "Feb 4", message: "Great work dude keep inspiring. Looking at ur UI design and smooth motions i must say u have great taste in designing. HOPE U DO GOOD.....", liked: true },
];

const Guestbook = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              LEAVE YOUR SIGNATURE
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-4"
            >
              <span className="block text-6xl font-black uppercase tracking-tight text-foreground md:text-8xl lg:text-9xl">GUEST</span>
              <span className="block font-serif text-5xl italic text-foreground/80 md:text-7xl lg:text-8xl">book</span>
            </motion.h1>
          </div>

          {/* Sign In Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center rounded-2xl border border-border bg-card/50 p-8"
          >
            <h2 className="text-2xl font-bold text-foreground">Leave your</h2>
            <p className="font-serif text-2xl italic text-foreground/80">Signature!</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Sign in to leave your mark, customize your profile, and connect with other visitors.
            </p>
            <button className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-4 w-4" />
              Google
            </button>
            <button className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
              <Github className="h-4 w-4" />
              GitHub
            </button>
            <p className="mt-4 text-center text-[10px] text-muted-foreground">
              By joining, you agree to our Terms of Service.
            </p>
          </motion.div>
        </div>

        {/* Signatures */}
        <div className="mt-20">
          <p className="mb-8 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">RECENT SIGNATURES</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {signatures.map((sig, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative rounded-xl border border-border bg-card/30 p-5"
              >
                {/* Quote mark */}
                <span className="absolute right-4 top-4 font-serif text-4xl text-border/50">"</span>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-xs font-bold text-foreground">
                    {sig.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{sig.name}</p>
                    <p className="font-mono text-[10px] uppercase text-muted-foreground">{sig.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{sig.message}</p>

                {sig.pinned && (
                  <div className="mt-4 border-t border-border pt-3">
                    <span className="text-[10px] font-medium text-primary">📌 Pinned</span>
                  </div>
                )}
                {sig.liked && (
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                    <span className="text-[10px] font-medium text-primary">Liked by Parth</span>
                    <span className="text-sm">❤️</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guestbook;
