import React from 'react';
import { WobbleCard } from "@/components/ui/wobble-card";
import { Button } from "@/components/ui/button";

export function CommunitySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">UPSTART: Where Students Become Innovators</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover how students like you are turning their ideas into impactful innovations. 
            Our community is a launchpad for groundbreaking projects that are addressing real-world challenges.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3].map((project) => (
            <WobbleCard key={project} className="h-full">
              <div className="p-4">
                <img
                  src={`/api/placeholder/300/200`}
                  alt={`Student Innovation ${project}`}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-semibold text-lg mb-2 text-white">Student-Led Innovation {project}</h3>
                <p className="text-sm text-gray-200 mb-4">See how this UPSTART member transformed their idea into a solution that's making a real-world impact.</p>
                <Button variant="outline" size="sm">Read Their Story</Button>
              </div>
            </WobbleCard>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <Button variant="default" size="lg">Join UPSTART Today</Button>
          <Button variant="outline" size="lg">Explore All Projects</Button>
        </div>
      </div>
    </section>
  );
}