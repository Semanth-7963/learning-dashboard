"use client";

import { motion } from "framer-motion";
import { Flame, Star, Clock } from "lucide-react";

export function HeroTile() {
  const hour = new Date().getHours();
  let greeting = "Good evening";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 17) greeting = "Good afternoon";

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { scale: 1 },
        hover: {
          scale: 1.012,
          transition: { type: "spring", stiffness: 260, damping: 18 },
        },
      }}
      className="grain-texture relative rounded-2xl p-6 md:p-8 bg-surface border border-border overflow-hidden min-h-[180px] flex flex-col justify-between"
    >
      {/* bg blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-accent-2/5 blur-3xl pointer-events-none" />

      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1, transition: { duration: 0.25 } },
        }}
        className="absolute inset-0 rounded-2xl border border-accent/40 shadow-glow pointer-events-none"
      />

      <div className="relative z-10">
        <p className="text-muted-foreground text-sm mb-2 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {greeting}
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Welcome back,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">
            Semanth
          </span>{" "}
          👋
        </h1>
        <p className="text-muted-foreground text-sm mt-2">
          You&apos;re on a roll! Keep pushing your limits today.
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-3 mt-4 flex-wrap">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20">
          <Flame className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-semibold text-orange-300">14 Day Streak</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-semibold text-yellow-300">2,840 XP</span>
        </div>
      </div>
    </motion.article>
  );
}
