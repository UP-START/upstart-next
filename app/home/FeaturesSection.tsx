import React from 'react';
import { WobbleCard } from "@/components/ui/wobble-card";
import { Users, PenTool, Lightbulb, Target, Zap } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6 mb-2" />,
    title: "Join the Community",
    description: "Become an active member of our vibrant community. Engage in events, channels, and forums to connect with like-minded innovators and mentors."
  },
  {
    icon: <PenTool className="h-6 w-6 mb-2" />,
    title: "Post Your Startup Ideas",
    description: "Share your startup ideas on our forum to receive valuable feedback from the community and find ideal teammates to bring your vision to life."
  },
  {
    icon: <Lightbulb className="h-6 w-6 mb-2" />,
    title: "Idea Incubation",
    description: "Nurture your ideas from concept to reality. Our mentors and resources are here to guide you through every stage of the innovation process."
  },
  {
    icon: <Target className="h-6 w-6 mb-2" />,
    title: "Skill Development",
    description: "Enhance your innovative capabilities through targeted workshops, hands-on projects, and industry-led seminars tailored for aspiring innovators."
  },
  {
    icon: <Zap className="h-6 w-6 mb-2" />,
    title: "Innovate for Impact",
    description: "Channel your creativity towards solving real-world challenges. We'll help you develop innovations that make a positive difference in the world."
  }
];

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Empowering Your Innovative Potential</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We believe every individual has the potential to make a positive impact in the world. 
              At UPSTART, we empower you to explore your true potential and turn your ideas into reality.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {features.map((feature, index) => (
            <WobbleCard key={index} className="h-full">
              <div className="flex flex-col items-center text-center p-4">
                {feature.icon}
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-200">{feature.description}</p>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  );
}