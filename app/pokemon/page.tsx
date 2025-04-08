import { RandomPokemonList } from "@/components/RandomPokemonList";
import { WeatherInfo } from "@/components/WeatherInfo";
import { Suspense } from "react";
import { Loading } from "@/components/Loading";
import { FormData } from "@/components/FormData";
import { FormData2 } from "@/components/FormData2";
import { FormDataUncached } from "@/components/FormDataUncached";
export default function Page() {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <p>Static Content</p>
      <p>DB fetch 1 with function level caching</p>
      <FormData />

      <p>DB fetch 2 with component level caching</p>
      <FormData2 formId={115} />

      <p>DB fetch 2 with dynamic rendering</p>
      <Suspense fallback={<Loading />}>
        <FormDataUncached formId={116} />
      </Suspense>

      <p>Pokemon list with delay</p>
      <Suspense fallback={<Loading />}>
        <RandomPokemonList />
      </Suspense>

      <p>Weather info</p>
      <Suspense fallback={<Loading />}>
        <WeatherInfo />
      </Suspense>
    </div>
  );
}
