import React from 'react';
import { Button } from "@/components/ui/button";

export function HeaderSection() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
          From Student to Innovator
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-[600px] mx-auto mb-8">
          Your journey starts here at UPSTART
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">Start Your Innovation Journey</Button>
      </div>
    </section>
  );
}