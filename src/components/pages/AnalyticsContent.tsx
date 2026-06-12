"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, BookOpen, Flame, BarChart2 } from "lucide-react";

const stats = [
  { label: "Hours This Week", value: "12.4h", icon: Clock, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { label: "Lessons Completed", value: "34", icon: BookOpen, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { label: "Current Streak", value: "14 days", icon: Flame, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { label: "Avg. Daily Study", value: "1.8h", icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
];

const weeklyData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 1.2 },
  { day: "Wed", hours: 3.1 },
  { day: "Thu", hours: 0.8 },
  { day: "Fri", hours: 2.0 },
  { day: "Sat", hours: 1.5 },
  { day: "Sun", hours: 1.3 },
];

const maxHours = Math.max(...weeklyData.map((d) => d.hours));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export function AnalyticsContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.label}
              variants={itemVariants}
              whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`rounded-2xl p-5 bg-surface border ${s.bg} flex flex-col gap-3`}
            >
              <div className={`w-10 h-10 rounded-xl ${s.bg} border flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Weekly bar chart */}
      <motion.article
        variants={itemVariants}
        className="rounded-2xl p-6 bg-surface border border-border"
      >
        <div className="flex items-center gap-2 mb-6">
          <BarChart2 className="w-5 h-5 text-indigo-400" />
          <h2 className="text-white font-semibold">Weekly Study Hours</h2>
        </div>
        <div className="flex items-end gap-3 h-40">
          {weeklyData.map((d, i) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-2">
              <motion.div
                className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-indigo-400"
                initial={{ height: 0 }}
                animate={{ height: `${(d.hours / maxHours) * 100}%` }}
                transition={{ delay: i * 0.08, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              />
              <span className="text-xs text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
      </motion.article>

      {/* Course progress breakdown */}
      <motion.article
        variants={itemVariants}
        className="rounded-2xl p-6 bg-surface border border-border"
      >
        <h2 className="text-white font-semibold mb-5">Course Progress Breakdown</h2>
        <div className="flex flex-col gap-4">
          {[
            { name: "Advanced React Patterns", progress: 75, color: "from-indigo-500 to-purple-500" },
            { name: "TypeScript Mastery", progress: 45, color: "from-cyan-500 to-blue-500" },
            { name: "Next.js App Router", progress: 90, color: "from-green-500 to-emerald-500" },
            { name: "Supabase & PostgreSQL", progress: 30, color: "from-orange-500 to-amber-500" },
          ].map((c, i) => (
            <div key={c.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-white">{c.name}</span>
                <span className="text-muted-foreground">{c.progress}%</span>
              </div>
              <div className="h-2 rounded-full bg-surface-3 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${c.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${c.progress}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.article>
    </motion.div>
  );
}
