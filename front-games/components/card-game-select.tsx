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
    <div className="relative w-full max-w-md overflow-hidden rounded-xl bg-black border border-gray-800 p-6 shadow-2xl transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] group">
      {/* Decorative dots/particles */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-pulse delay-75"></div>
      <div className="absolute top-1/2 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-150"></div>
      
      {/* Neon corner accents */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider group-hover:text-cyan-300 transition-colors">
            {subtitle}
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-cyan-400 group-hover:to-fuchsia-500 transition-all">
            {title}
          </h2>
        </div>

        {/* Image */}
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500 group-hover:animate-pulse transition-all duration-300 rounded-lg"></div>
          <Image 
            src={imageUrl} 
            alt={title}
            width={256}
            height={256}
            className="object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            priority
          />
        </div>

        {/* Footer */}
        <div className="w-full space-y-4">
          <p className="text-gray-500 text-sm text-center group-hover:text-gray-400 transition-colors">
            Maneja tu mazo y domina la mesa.
          </p>
          
          <Button 
            onClick={onPlay}
            className="w-full bg-black border-2 border-cyan-500 hover:border-fuchsia-500 text-cyan-400 hover:text-fuchsia-400 font-bold py-3 px-6 rounded-lg uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,70,239,0.5)]"
          >
            Jugar Ahora
          </Button>
        </div>
      </div>
    </div>
  );
};