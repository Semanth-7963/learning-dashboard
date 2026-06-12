"use client";

import { motion } from "framer-motion";
import { HeroTile } from "./HeroTile";
import { CourseCard } from "./CourseCard";
import { ActivityTile } from "./ActivityTile";
import type { Course } from "@/types";

// stagger animation for tiles coming in
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const tile = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
};

export function BentoGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto"
    >
      {/* hero takes up more space on larger screens */}
      <motion.div variants={tile} className="md:col-span-2">
        <HeroTile />
      </motion.div>

      {/* activity on the right, spans 2 rows */}
      <motion.div variants={tile} className="md:col-span-2 lg:col-span-1 row-span-2">
        <ActivityTile />
      </motion.div>

      {courses.map((course) => (
        <motion.div key={course.id} variants={tile}>
          <CourseCard course={course} />
        </motion.div>
      ))}

      {courses.length === 0 && (
        <motion.div
          variants={tile}
          className="md:col-span-2 flex items-center justify-center p-8 rounded-2xl border border-border bg-surface text-muted text-sm"
        >
          No courses yet — add some rows to your Supabase courses table
        </motion.div>
      )}
    </motion.div>
  );
}
