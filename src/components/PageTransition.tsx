import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      }}
      exit={{
        opacity: 0,
        y: -20,
        filter: "blur(4px)",
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
