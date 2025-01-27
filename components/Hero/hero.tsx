"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TechIcon {
  src: string;
  alt: string;
  className: string;
  initialPosition: { x: number; y: number };
}

const techIcons: TechIcon[] = [
  {
    src: "/nodejs.png",
    alt: "Node.js",
    className: "w-14 h-14 text-green-500",
    initialPosition: { x: 10, y: 20 },
  },
  {
    src: "/types.png",
    alt: "TypeScript",
    className: "w-16 h-16 text-blue-500",
    initialPosition: { x: 80, y: 60 },
  },
  {
    src: "/js.png",
    alt: "JavaScript",
    className: "w-14 h-14 text-yellow-400",
    initialPosition: { x: 85, y: 75 },
  },
  {
    src: "/react.png",
    alt: "React",
    className: "w-12 h-12 text-cyan-400",
    initialPosition: { x: 18, y: 45 },
  },
  {
    src: "/nextjs.png",
    alt: "Next.js",
    className: "w-12 h-12 text-emerald-500",
    initialPosition: { x: 83, y: 27 },
  },
  {
    src: "/html5.png",
    alt: "HTML5",
    className: "w-10 h-10 text-orange-500",
    initialPosition: { x: 20, y: 65 },
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative container overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        {techIcons.map((icon, index) => (
          <div
            key={icon.alt}
            className={`absolute animate-float ${icon.className}`}
            style={{
              left: `${icon.initialPosition.x}%`,
              top: `${icon.initialPosition.y}%`,
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <Image
              src={icon.src || "/placeholder.svg"}
              alt={icon.alt}
              width={50}
              height={50}
              className="w-full h-full hidden sm:block object-contain"
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 pt-20 pb-32">
        {/* Top Navigation */}
        <div className="flex justify-center mb-20">
          <div className="bg-white border font-medium backdrop-blur-sm text-base rounded-full p-1 flex items-center gap-2">
            <button className="px-4 py-2 rounded-full hidden sm:block bg-gray-100 text-gray-700 text-sm">
              Kenapa Harus Zdev?
            </button>
            <a
              href="#"
              className="px-4 py-2 text-gray-700 group text-sm flex items-center gap-2"
            >
              Lihat penawaran eksklusif kami
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 duration-200" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span>Buat Website Keren Bisnis Anda</span>
            <br />
            <span>
              Bersama <span className="text-primary">ZDev</span>
            </span>
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
            Cocok untuk Startup, UMKM, Bisnis Kecil, Website SaaS, Portofolio
            Profesional, Website Marketing, Landing Page, Blog, hingga Bisnis
            Crypto!
          </p>
          <Button
            size="lg"
            className="bg-primary rounded-xl text-base text-white px-8"
          >
            Buat Websitemu!
          </Button>
        </div>
      </div>
    </div>
  );
}
