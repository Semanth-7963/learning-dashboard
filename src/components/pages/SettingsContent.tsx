"use client";

import { motion } from "framer-motion";
import { User, Bell, Shield, Palette, Globe, ChevronRight } from "lucide-react";

const sections = [
  {
    title: "Profile",
    icon: User,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    fields: [
      { label: "Full Name", value: "Semanth Parvataneni", type: "text" },
      { label: "Email", value: "semanth@example.com", type: "email" },
      { label: "Username", value: "@semanth", type: "text" },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    toggles: [
      { label: "Daily learning reminders", enabled: true },
      { label: "Streak alerts", enabled: true },
      { label: "New course announcements", enabled: false },
      { label: "Achievement unlocked", enabled: true },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export function SettingsContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 max-w-2xl"
    >
      {/* Profile Section */}
      <motion.article
        variants={itemVariants}
        className="rounded-2xl p-6 bg-surface border border-border"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <User className="w-5 h-5 text-indigo-400" />
          </div>
          <h2 className="text-white font-semibold">Profile</h2>
        </div>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-6 p-4 rounded-xl bg-surface-3">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            S
          </div>
          <div>
            <p className="text-white font-medium">Semanth Parvataneni</p>
            <p className="text-muted-foreground text-sm">Pro Member · 2,840 XP</p>
          </div>
          <button className="ml-auto text-xs text-indigo-400 border border-indigo-500/30 px-3 py-1.5 rounded-lg hover:bg-indigo-500/10 transition-colors">
            Change Photo
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { label: "Full Name", value: "Semanth Parvataneni" },
            { label: "Email", value: "semanth@example.com" },
            { label: "Username", value: "@semanth" },
          ].map((field) => (
            <div key={field.label}>
              <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1 block">
                {field.label}
              </label>
              <input
                type="text"
                defaultValue={field.value}
                className="w-full bg-surface-3 border border-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
            </div>
          ))}
          <button className="mt-2 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors">
            Save Changes
          </button>
        </div>
      </motion.article>

      {/* Notifications Section */}
      <motion.article
        variants={itemVariants}
        className="rounded-2xl p-6 bg-surface border border-border"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
            <Bell className="w-5 h-5 text-yellow-400" />
          </div>
          <h2 className="text-white font-semibold">Notifications</h2>
        </div>
        <div className="flex flex-col gap-4">
          {[
            { label: "Daily learning reminders", enabled: true },
            { label: "Streak alerts", enabled: true },
            { label: "New course announcements", enabled: false },
            { label: "Achievement unlocked", enabled: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-1">
              <span className="text-sm text-white">{item.label}</span>
              <div
                className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors ${
                  item.enabled ? "bg-indigo-600" : "bg-surface-3"
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    item.enabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.article>

      {/* Appearance & More */}
      <motion.article
        variants={itemVariants}
        className="rounded-2xl p-6 bg-surface border border-border"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
            <Palette className="w-5 h-5 text-pink-400" />
          </div>
          <h2 className="text-white font-semibold">More Settings</h2>
        </div>
        <div className="flex flex-col">
          {[
            { icon: Palette, label: "Appearance", desc: "Dark mode · Accent color" },
            { icon: Shield, label: "Privacy & Security", desc: "Password · 2FA" },
            { icon: Globe, label: "Language & Region", desc: "English · IST" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="flex items-center gap-4 py-3 border-b border-border last:border-0 hover:bg-surface-3 -mx-2 px-2 rounded-lg transition-colors"
              >
                <Icon className="w-4 h-4 text-muted-foreground" />
                <div className="text-left flex-1">
                  <p className="text-sm text-white">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </motion.article>
    </motion.div>
  );
}
