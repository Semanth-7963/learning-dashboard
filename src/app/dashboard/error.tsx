"use client";

import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center h-full min-h-[60vh] gap-6 p-8"
    >
      <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20">
        <AlertTriangle className="w-8 h-8 text-red-400" />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-white mb-2">
          Something went wrong
        </h2>
        <p className="text-muted-foreground text-sm max-w-sm">
          {error.message || "Failed to load dashboard data. Please check your Supabase connection."}
        </p>
      </div>
      <button
        onClick={reset}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-colors"
      >
        <RefreshCw className="w-4 h-4" />
        Try again
      </button>
    </motion.div>
  );
}
