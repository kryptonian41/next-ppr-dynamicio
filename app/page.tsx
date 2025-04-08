import { RandomPokemonList } from "@/components/RandomPokemonList";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <RandomPokemonList />

      <Suspense fallback={<div>Loading...</div>}>
        <RandomPokemonList />
      </Suspense>
    </main>
  );
}
