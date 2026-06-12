import { Suspense } from "react";
import { createClient } from "@/lib/supabase/server";
import { BentoGrid } from "@/components/tiles/BentoGrid";
import { DashboardSkeleton } from "@/components/ui/DashboardSkeleton";
import type { Course } from "@/types";

async function fetchCourses(): Promise<Course[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch courses: ${error.message}`);
  }

  return data as Course[];
}

async function DashboardContent() {
  const courses = await fetchCourses();
  return <BentoGrid courses={courses} />;
}

export default function DashboardPage() {
  return (
    <section className="p-4 md:p-6 lg:p-8 min-h-screen">
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
    </section>
  );
}
