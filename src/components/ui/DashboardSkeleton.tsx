export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-6 lg:p-8">
      {/* Hero tile skeleton */}
      <div className="md:col-span-2 lg:col-span-2 rounded-2xl skeleton-shimmer min-h-[180px]" />

      {/* Activity tile skeleton */}
      <div className="md:col-span-2 lg:col-span-1 row-span-2 rounded-2xl skeleton-shimmer min-h-[280px]" />

      {/* Course card skeletons */}
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-2xl skeleton-shimmer min-h-[160px]">
          <div className="p-5 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5" />
            <div className="h-4 w-3/4 rounded bg-white/5" />
            <div className="h-3 w-1/2 rounded bg-white/5" />
            <div className="h-1.5 w-full rounded-full bg-white/5 mt-auto" />
          </div>
        </div>
      ))}
    </div>
  );
}
