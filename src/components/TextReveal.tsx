import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

const TextReveal = ({ children, className = "", delay = 0, stagger = 0.03, once = true }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const words = children.split(" ");

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="flex flex-wrap">
        {words.map((word, wi) => (
          <span key={wi} className="mr-[0.3em] inline-flex overflow-hidden">
            {word.split("").map((char, ci) => (
              <motion.span
                key={ci}
                initial={{ y: "110%" }}
                animate={isInView ? { y: "0%" } : { y: "110%" }}
                transition={{
                  duration: 0.5,
                  delay: delay + (wi * word.length + ci) * stagger,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextReveal;
