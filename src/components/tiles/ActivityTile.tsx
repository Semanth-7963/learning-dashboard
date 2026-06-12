"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { generateActivityData, getIntensityClass } from "@/lib/activity-data";

const tileVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.015,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const glowVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

export function ActivityTile() {
  const data = generateActivityData();
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <motion.article
      variants={tileVariants}
      initial="rest"
      whileHover="hover"
      className="grain-texture relative rounded-2xl p-5 bg-surface border border-border overflow-hidden h-full min-h-[280px] flex flex-col"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Hover glow border */}
      <motion.div
        variants={glowVariants}
        className="absolute inset-0 rounded-2xl border border-accent-3/30 shadow-glow-cyan pointer-events-none"
      />

      <div className="relative z-10 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-accent-3" />
              <h3 className="text-sm font-semibold text-white">Learning Activity</h3>
            </div>
            <p className="text-xs text-muted mt-0.5">Last 16 weeks</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-white">87</p>
            <p className="text-xs text-muted">sessions</p>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Day labels */}
          <div className="flex gap-1 pl-0">
            {days.map((day, i) => (
              <div key={i} className="w-4 text-[9px] text-muted text-center">
                {i % 2 === 0 ? day : ""}
              </div>
            ))}
          </div>

          {/* Grid — rows are days, columns are weeks */}
          <div className="flex gap-1">
            {data.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((value, di) => (
                  <motion.div
                    key={di}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: (wi * 7 + di) * 0.003,
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                    className={`w-3.5 h-3.5 rounded-sm ${getIntensityClass(value)} transition-colors hover:ring-1 hover:ring-accent/40`}
                    title={`${value} sessions`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-1 mt-auto pt-2">
            <span className="text-[10px] text-muted mr-1">Less</span>
            {[0, 1, 3, 5, 7].map((v) => (
              <div
                key={v}
                className={`w-3 h-3 rounded-sm ${getIntensityClass(v)}`}
              />
            ))}
            <span className="text-[10px] text-muted ml-1">More</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
