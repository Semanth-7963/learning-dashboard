import { createClient } from "@/lib/supabase/server";
import { motion } from "framer-motion";
import { CoursesGrid } from "@/components/pages/CoursesGrid";
import type { Course } from "@/types";

async function fetchCourses(): Promise<Course[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return data as Course[];
}

export default async function CoursesPage() {
  const courses = await fetchCourses();

  return (
    <section className="p-4 md:p-6 lg:p-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">My Courses</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {courses.length} active courses — keep the momentum going!
        </p>
      </div>
      <CoursesGrid courses={courses} />
    </section>
  );
}
