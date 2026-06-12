"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  BarChart2,
  Settings,
  ChevronLeft,
  Zap,
} from "lucide-react";
import { NavItem } from "./NavItem";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Courses", icon: BookOpen, href: "/dashboard/courses" },
  { label: "Achievements", icon: Trophy, href: "/dashboard/achievements" },
  { label: "Analytics", icon: BarChart2, href: "/dashboard/analytics" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("/dashboard");

  return (
    <motion.nav
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="hidden md:flex flex-col h-full bg-surface border-r border-border relative shrink-0 overflow-visible"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-border h-16">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center shrink-0">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="font-bold text-white text-lg whitespace-nowrap"
            >
              LearnOS
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-hidden">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            item={item}
            collapsed={collapsed}
            isActive={activeItem === item.href}
            onClick={() => setActiveItem(item.href)}
          />
        ))}
      </nav>

      {/* User avatar at bottom */}
      <div className="px-3 py-4 border-t border-border overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center shrink-0 text-white text-sm font-semibold">
            S
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="text-sm font-medium text-white whitespace-nowrap">Semanth</p>
                <p className="text-xs text-muted whitespace-nowrap">Pro Member</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse Toggle — fixed, always fully visible */}
      <button
        onClick={onToggle}
        className="absolute -right-4 top-[72px] w-8 h-8 rounded-full bg-[#1e1e2e] border-2 border-indigo-500 flex items-center justify-center hover:bg-indigo-500/30 transition-colors z-50 shadow-lg shadow-indigo-500/20"
      >
        <motion.div animate={{ rotate: collapsed ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronLeft className="w-4 h-4 text-indigo-400" />
        </motion.div>
      </button>
    </motion.nav>
  );
}
