import { RandomPokemonList } from "@/components/RandomPokemonList";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <p>Pokemon list</p>
      <RandomPokemonList />
      <Suspense fallback={<div>Loading...</div>}>
        <RandomPokemonList delay={2000} />
      </Suspense>
    </div>
  );
}
