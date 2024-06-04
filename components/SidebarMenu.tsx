"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Lightbulb, Settings, User, Calendar } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

export default function SidebarMenu() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/profile", label: "Profile", icon: User },
    { href: "/community", label: "Community", icon: Users },
    { href: "/startup-ideas", label: "Startup Ideas", icon: Lightbulb },
    { href: "/events", label: "Events", icon: Calendar },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 py-4">
          {menuItems.slice(0, 4).map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={`group flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    pathname === item.href ? "bg-gray-900 text-white" : "text-muted-foreground"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
          <Tooltip key="/settings">
            <TooltipTrigger asChild>
              <Link
                href="/settings"
                className={`group flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${
                  pathname === "/settings" ? "bg-gray-900 text-white" : "text-muted-foreground"
                }`}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  );
}
