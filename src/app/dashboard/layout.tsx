"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { MobileNav } from "@/components/sidebar/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Desktop Sidebar */}
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <MobileNav />
    </div>
  );
}
