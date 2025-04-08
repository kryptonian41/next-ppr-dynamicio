import { RandomPokemonList } from "@/components/RandomPokemonList";
import { WeatherInfo } from "@/components/WeatherInfo";
import { Suspense } from "react";

const Loading = () => {
  return <div>Loading...</div>;
};

export default function Page() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <p>Static Content</p>

      <p>Pokemon list with delay</p>
      <Suspense fallback={<Loading />}>
        <RandomPokemonList delay={2000} />
      </Suspense>

      <p>Weather info</p>
      <Suspense fallback={<Loading />}>
        <WeatherInfo />
      </Suspense>
    </div>
  );
}
