"use client";

import { Trophy } from "lucide-react";
import { Button } from "./ui/button";

export default function Header(promps : {titulo:string}){
  return (
    <header className=" text-white p-2 border-b border-gray-700 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{promps.titulo}</h1>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Trophy className="w-10 h-10" />
        </Button>
      </div>    
    </header>
  );
}