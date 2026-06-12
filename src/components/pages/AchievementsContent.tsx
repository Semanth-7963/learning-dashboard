"use client";

import { motion } from "framer-motion";
import { Trophy, Flame, Zap, Star, BookOpen, Target, Award, Clock } from "lucide-react";

const achievements = [
  { icon: Flame, label: "On Fire", desc: "14-day learning streak", earned: true, color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { icon: Zap, label: "Speed Learner", desc: "Completed a course in under 7 days", earned: true, color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  { icon: Star, label: "Top Performer", desc: "Scored 90%+ on an assessment", earned: true, color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
  { icon: BookOpen, label: "Bookworm", desc: "Read 50+ lessons", earned: true, color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: Target, label: "Goal Crusher", desc: "Hit your weekly learning goal", earned: false, color: "text-pink-400", bg: "bg-pink-500/10 border-pink-500/20" },
  { icon: Award, label: "Course Master", desc: "Complete all 4 courses", earned: false, color: "text-green-400", bg: "bg-green-500/10 border-green-500/20" },
  { icon: Clock, label: "Night Owl", desc: "Study after midnight", earned: false, color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  { icon: Trophy, label: "Champion", desc: "Reach 10,000 XP", earned: false, color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export function AchievementsContent() {
  const earned = achievements.filter((a) => a.earned).length;

  return (
    <div>
      {/* Stats bar */}
      <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-surface border border-border">
        <Trophy className="w-8 h-8 text-yellow-400" />
        <div>
          <p className="text-white font-semibold">{earned} / {achievements.length} Unlocked</p>
          <p className="text-muted-foreground text-xs">Keep learning to unlock more!</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-2xl font-bold text-white">2,840</p>
          <p className="text-xs text-muted-foreground">Total XP</p>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {achievements.map((a) => {
          const Icon = a.icon;
          return (
            <motion.article
              key={a.label}
              variants={itemVariants}
              whileHover={{ scale: 1.04, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`relative rounded-2xl p-5 border flex flex-col items-center text-center gap-3 ${
                a.earned
                  ? `bg-surface ${a.bg}`
                  : "bg-surface/50 border-border opacity-40 grayscale"
              }`}
            >
              <div className={`w-12 h-12 rounded-full ${a.bg} border flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${a.color}`} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{a.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{a.desc}</p>
              </div>
              {a.earned && (
                <span className="absolute top-2 right-2 text-[10px] bg-green-500/20 text-green-400 border border-green-500/30 px-1.5 py-0.5 rounded-full">
                  Earned
                </span>
              )}
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}
