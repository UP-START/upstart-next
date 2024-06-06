"use client"
import { useState, useMemo } from "react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Layout from "@/components/my-layout";

export default function Component() {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      title: "AI-powered personal assistant",
      description: "A virtual assistant that learns your preferences and habits to provide personalized recommendations and task automation.",
      category: "AI",
      upvotes: 142,
    },
    {
      id: 2,
      title: "Sustainable fashion marketplace",
      description: "An online platform that connects eco-conscious consumers with ethical and sustainable clothing brands.",
      category: "Ecommerce",
      upvotes: 98,
    },
    {
      id: 3,
      title: "Decentralized social network",
      description: "A social media platform built on blockchain technology, prioritizing user privacy and data ownership.",
      category: "Web3",
      upvotes: 201,
    },
    {
      id: 4,
      title: "Fitness tracking app with AR workouts",
      description: "An app that uses augmented reality to guide users through personalized, interactive workout sessions.",
      category: "Health",
      upvotes: 74,
    },
    {
      id: 5,
      title: "Peer-to-peer car sharing platform",
      description: "A service that allows car owners to rent out their vehicles to nearby drivers, promoting sustainable transportation.",
      category: "Mobility",
      upvotes: 156,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("upvotes");

  const filteredIdeas = useMemo(() => {
    let filtered = ideas;
    if (selectedCategory !== "All") {
      filtered = filtered.filter((idea) => idea.category === selectedCategory);
    }
    return filtered.sort((a, b) => {
      if (sortBy === "upvotes") {
        return b.upvotes - a.upvotes;
      }
      return 0;
    });
  }, [ideas, selectedCategory, sortBy]);

  return (
    <Layout pageTitle="Startup Ideas Forum">
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          
          <main className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Startup Ideas</h2>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      Sort by <ChevronDownIcon className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                      <DropdownMenuRadioItem value="upvotes">Most Upvotes</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <ul className="space-y-4">
              {filteredIdeas.map((idea) => (
                <li key={idea.id} className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold">{idea.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{idea.description}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-2">
                        <ThumbsUpIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-500 dark:text-gray-400">{idea.upvotes}</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        Join Team
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </div>
    </Layout>
  );
}
interface IconProps extends React.SVGProps<SVGSVGElement> {}

function ChevronDownIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ThumbsUpIcon(props:IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}
