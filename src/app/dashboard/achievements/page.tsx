import { AchievementsContent } from "@/components/pages/AchievementsContent";

export default function AchievementsPage() {
  return (
    <section className="p-4 md:p-6 lg:p-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Achievements</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Your milestones and badges earned so far
        </p>
      </div>
      <AchievementsContent />
    </section>
  );
}
