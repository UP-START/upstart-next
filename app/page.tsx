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
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Student Community</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Programs
          </Link>
          <Link href="/events" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Join
          </Link>
          <Link href="/login" prefetch={false}>
            <Button size={'sm'}>Login</Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <HeaderSection />
        <FeaturesSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}