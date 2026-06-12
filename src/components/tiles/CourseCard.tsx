"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";
import { AnimatedProgressBar } from "@/components/ui/AnimatedProgressBar";
import type { Course } from "@/types";
import { LucideIcon } from "lucide-react";

// tried using a prop for this but it got messy, hardcoding for now
const cardGradients: Record<number, string> = {
  0: "from-indigo-500/10 to-purple-500/10",
  1: "from-cyan-500/10 to-blue-500/10",
  2: "from-pink-500/10 to-rose-500/10",
  3: "from-amber-500/10 to-orange-500/10",
};

export function CourseCard({ course }: { course: Course }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-50px" });

  // get the icon component from the string name stored in supabase
  const IconComp = (Icons[course.icon_name as keyof typeof Icons] as LucideIcon) ?? Icons.BookOpen;

  const gradientKey = Math.abs(course.title.charCodeAt(0)) % 4;

  return (
    <motion.article
      ref={cardRef}
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { scale: 1 },
        hover: {
          scale: 1.02,
          transition: { type: "spring", stiffness: 260, damping: 18 },
        },
      }}
      className="grain-texture relative rounded-2xl p-5 bg-surface border border-border overflow-hidden min-h-[160px] flex flex-col justify-between"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[gradientKey]} pointer-events-none`} />
      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-accent/5 blur-2xl pointer-events-none" />

      {/* glow on hover */}
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1, transition: { duration: 0.25 } },
        }}
        className="absolute inset-0 rounded-2xl border border-accent/30 shadow-glow pointer-events-none"
      />

      <div className="relative z-10 flex flex-col gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
          <IconComp className="w-5 h-5 text-accent" />
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white leading-tight">{course.title}</h3>
          <p className="text-xs text-muted mt-1">{course.progress}% complete</p>
        </div>

        <AnimatedProgressBar value={course.progress} isInView={inView} />
      </div>
    </motion.article>
  );
}
