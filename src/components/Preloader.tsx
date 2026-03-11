import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [phase, setPhase] = useState<"text" | "exit">("text");
  const name = "ANJALI KAMAL";
  const subtitle = "YOUR EXPERIENCE IS LOADING...";

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("exit"), 2400);
    const timer2 = setTimeout(() => onComplete(), 3200);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Counter */}
        <motion.div
          className="absolute bottom-8 right-8 text-7xl font-black text-muted-foreground/10 tabular-nums"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Counter />
        </motion.div>

        {/* Main text */}
        <div className="overflow-hidden">
          <div className="flex">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block text-5xl font-black tracking-tight text-foreground md:text-8xl"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <div className="mt-6 flex gap-3 overflow-hidden">
          {subtitle.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.4, ease: "linear" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 24);
    return () => clearInterval(interval);
  }, []);

  return <>{count}</>;
};

export default Preloader;
