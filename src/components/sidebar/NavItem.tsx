"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
  item: {
    label: string;
    icon: LucideIcon;
    href: string;
  };
  collapsed: boolean;
  isActive: boolean;
  onClick: () => void;
}

export function NavItem({ item, collapsed, isActive, onClick }: NavItemProps) {
  const Icon = item.icon;
  const pathname = usePathname();
  const active = pathname === item.href;

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group"
    >
      {active && (
        <motion.div
          layoutId="sidebar-active-bg"
          className="absolute inset-0 rounded-lg bg-accent/15 border border-accent/20"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      {!active && (
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-surface-3" />
      )}

      <Icon
        className={`w-5 h-5 shrink-0 relative z-10 transition-colors ${
          active ? "text-accent" : "text-muted group-hover:text-muted-foreground"
        }`}
      />

      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.15 }}
            className={`text-sm font-medium whitespace-nowrap relative z-10 transition-colors ${
              active ? "text-white" : "text-muted group-hover:text-muted-foreground"
            }`}
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
}
