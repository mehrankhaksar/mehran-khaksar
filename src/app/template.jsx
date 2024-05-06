"use client";

import { motion } from "framer-motion";

import useScrollProgress from "@/hooks/useScrollProgress";

const pageVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      type: "linear",
      delay: 0.25,
      duration: 0.5,
    },
  },
};

export default function Template({ children }) {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <motion.main
        className="flex-1"
        variants={pageVariants}
        initial="hidden"
        animate="enter"
      >
        {children}
      </motion.main>
      ;
      <span
        className="w-1 fixed top-0 right-0 bottom-0 bg-primary transition-all duration-700 ease-in-out"
        style={{ transform: `translateY(${scrollProgress - 100}%)` }}
      />
    </>
  );
}
