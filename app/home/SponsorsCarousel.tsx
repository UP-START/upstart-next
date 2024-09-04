"use client"
import React from 'react';
import Image from 'next/image';

const sponsors = [
  { name: 'eia', logo: '/images/eia.png' },
  { name: 'uporto', logo: '/images/uporto.jpg' },
  { name: 'eia', logo: '/images/eia.png' },
  { name: 'uporto', logo: '/images/uporto.jpg' },
  { name: 'eia', logo: '/images/eia.png' },
  { name: 'uporto', logo: '/images/uporto.jpg' },
  { name: 'eia', logo: '/images/eia.png' },
  { name: 'uporto', logo: '/images/uporto.jpg' },
  // Add more sponsors as needed
];

export function SponsorsCarousel() {
  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative">
          <div className="flex sponsors-track items-center justify-center">
            {[...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className="flex-none w-48 mx-8 flex justify-center items-center">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={150}
                  height={75}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .sponsors-track {
          animation: slide 30s linear infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sponsors-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}