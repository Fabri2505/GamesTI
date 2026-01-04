"use client";
import { CardSelectGame } from "@/components/card-game-select";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header titulo="Games-TI"></Header>
      <section className="pt-12 pb-12 px-6 mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter text-balance">
          Sé el barbón de <span className="text-blue-500 italic">la semana</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
          Elige tu campo de batalla. Cartas de alta estrategia o la emoción pura del Bingo.
        </p>
      </section>
      <section className="flex gap-4 justify-center">
        <CardSelectGame 
          title="Golpeado"
          subtitle="ESTRATEGIA"
          imageUrl="/Golpeado-Logo.png"
          onPlay={() => console.log('Iniciar juego')}
        />
        <CardSelectGame 
          title="Bingo"
          subtitle="Azar y Suerte"
          imageUrl="/Bingo-Logo.png"
          onPlay={() => console.log('Iniciar juego')}
        />
      </section>
    </div>
  );
}
