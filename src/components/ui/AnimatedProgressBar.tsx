"use client";

import { motion } from "framer-motion";

// animates from 0 to the actual value when card comes into view
export function AnimatedProgressBar({ value, isInView }: { value: number; isInView: boolean }) {
  return (
    <div className="w-full h-1.5 rounded-full bg-surface-3 overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
        initial={{ width: "0%" }}
        animate={isInView ? { width: `${value}%` } : {}}
        transition={{
          duration: 1,
          ease: [0.34, 1.56, 0.64, 1],
          delay: 0.15,
        }}
      />
    </div>
  );
}
