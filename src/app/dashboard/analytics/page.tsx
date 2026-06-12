import { AnalyticsContent } from "@/components/pages/AnalyticsContent";

export default function AnalyticsPage() {
  return (
    <section className="p-4 md:p-6 lg:p-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Analytics</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Your learning stats and progress over time
        </p>
      </div>
      <AnalyticsContent />
    </section>
  );
}
