"use client";

import Image from "next/image";
import { Button } from "./ui/button";

interface GameCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  onPlay: () => void;
}

export const CardSelectGame = ({ title, subtitle, imageUrl, onPlay }: GameCardProps) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-xl bg-black border-2 border-gray-800 transition-all duration-300 hover:border-cyan-500">
      
      {/* Image Container */}
      <div className="relative w-full h-56 overflow-hidden bg-gray-900">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            {subtitle}
          </p>
          <h3 className="text-white text-2xl font-bold uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-500 transition-all">
            {title}
          </h3>
        </div>

        <Button 
          onClick={onPlay}
          className="w-full bg-black border-2 border-cyan-500 hover:border-fuchsia-500 text-cyan-400 hover:text-fuchsia-400 font-bold py-2.5 rounded-lg uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]"
        >
          Jugar Ahora
        </Button>
      </div>
    </div>
  );
};