"use client";

import React from 'react';
import { FloatingNav } from "../components/ui/floating-navbar";
import { HeaderSection } from "./home/HeaderSection";
import { FeaturesSection } from "./home/FeaturesSection";
import { CommunitySection } from "./home/CommunitySection";
import { Footer } from "./home/Footer";

import { FiHome, FiUsers, FiMessageCircle } from 'react-icons/fi'; // Correct imports

export default function UPSTARTLandingPage() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FiHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Programs",
      link: "/programs",
      icon: <FiUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <FiMessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh] relative">
      <FloatingNav navItems={navItems} />
      <main className="flex-1">
        <HeaderSection />
        <FeaturesSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}