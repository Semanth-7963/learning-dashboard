"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  BarChart2,
  Settings,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Courses", icon: BookOpen, href: "/dashboard/courses" },
  { label: "Trophies", icon: Trophy, href: "/dashboard/achievements" },
  { label: "Stats", icon: BarChart2, href: "/dashboard/analytics" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-t border-border">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-active-bg"
                  className="absolute inset-0 rounded-lg bg-accent/15"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon
                className={`w-5 h-5 relative z-10 ${
                  isActive ? "text-accent" : "text-muted"
                }`}
              />
              <span
                className={`text-[10px] relative z-10 ${
                  isActive ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
