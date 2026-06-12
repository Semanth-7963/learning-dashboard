"use client";

import { motion } from "framer-motion";
import { CourseCard } from "@/components/tiles/CourseCard";
import type { Course } from "@/types";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function CoursesGrid({ courses }: { courses: Course[] }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {courses.map((course) => (
        <motion.div key={course.id} variants={itemVariants}>
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  );
}
