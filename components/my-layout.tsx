// components/Layout.js
"use client"
import React from "react";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import SidebarMenu from "@/components/SidebarMenu";
import TopMenu from "@/components/TopMenu";

export default function Layout({ pageTitle, children }){
  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <SidebarMenu />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <TopMenu pageTitle={pageTitle} />
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {children}
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
};

