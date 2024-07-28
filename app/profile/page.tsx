import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";
import SidebarMenu from "@/components/SidebarMenu";
import TopMenu from "@/components/TopMenu";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export default async function ProtectedPage() {
  const supabase = createClient();

 
  const profileData = {
    image: "/path/to/profile-image.jpg", // Altere para o caminho real da imagem
    name: "Gabriel Bueno",
    handle: "gbuenos",
    badges: ["CEO", "Marketing", "Tech"],
    description: "O brabo da UPSTART",
  };
  
  return (
    <div >
  <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <SidebarMenu />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <TopMenu pageTitle="Profile Page" />
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="flex items-center p-4 bg-black rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={profileData.image} alt={profileData.name} />
                  <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  <h2 className="text-xl font-bold text-white">{profileData.name}</h2>
                  <span className="ml-2 text-sm text-gray-200">@{profileData.handle}</span>
                </div>
                <div className="flex flex-wrap mt-2">
                  {profileData.badges.map((badge, index) => (
                    <Badge key={index} className="mr-2 mb-2">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-200">{profileData.description}</p>
              </div>
            </div>

            {/* Skeletons for loading placeholders */}
            <div className="grid grid-cols-3 gap-4 mt-8">
            
              <div>
                <Skeleton className="w-full h-32 mb-2" /> {/* Imagem */}
                <Skeleton className="w-full h-8 mb-2" /> {/* Título grande */}
                <Skeleton className="w-full h-6 mb-2" /> {/* Texto */}
                <Skeleton className="w-3/4 h-6 mb-2" /> {/* Texto mais curto */}
              </div>
              <div>
                <Skeleton className="w-full h-8 mb-2" /> {/* Título grande */}
                <Skeleton className="w-full h-6 mb-2" /> {/* Texto */}
                <Skeleton className="w-3/4 h-6 mb-2" /> {/* Texto mais curto */}
                <Skeleton className="w-1/2 h-6 mb-2" /> {/* Texto ainda mais curto */}
                <Skeleton className="w-1/3 h-6" /> {/* Texto bem curto */}
              </div>
              <div>
                <Skeleton className="w-full h-8 mb-2" /> {/* Título grande */}
                <Skeleton className="w-full h-6 mb-2" /> {/* Texto */}
                <Skeleton className="w-3/4 h-6 mb-2" /> {/* Texto mais curto */}
                <Skeleton className="w-full h-10 mb-2" /> {/* Botão grande */}
                <Skeleton className="w-full h-6 mb-2" /> {/* Texto */}
              </div>
            </div>
          </main>
        </div>
      </div>
      </div>
  );
}




