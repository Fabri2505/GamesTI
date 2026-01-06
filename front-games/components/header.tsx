"use client";

import { Trophy } from "lucide-react";
import { Button } from "./ui/button";

export default function Header(promps : {titulo:string}){
  return (
    <header className=" py-2 px-9 border-b border-gray-700 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{promps.titulo}</h1>
      <nav className="flex gap-4 justify-center">
        <a href="/menu" className="text-gray-300 hover:text-white">
          Dashboard pagos
        </a>
        <a href="/about" className="text-gray-300 hover:text-white">
          Historial
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Trophy className="w-10 h-10" />
        </Button>
      </div>    
    </header>
  );
}