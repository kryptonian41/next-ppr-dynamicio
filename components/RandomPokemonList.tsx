export const getRandomPokemon = async (delay?: number) => {
  // delay the response
  await new Promise((resolve) => setTimeout(resolve, delay || 0));

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151", {
    cache: "no-store",
  });
  // Randomly select 10 pokemon
  const data = await response.json();
  const randomPokemon = data.results
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
  return randomPokemon;
};

export async function RandomPokemonList({ delay }: { delay?: number }) {
  const randomPokemon = await getRandomPokemon(delay);

  return (
    <div>
      {randomPokemon.map((pokemon: { name: string }) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
}

export const cachedGetRandomPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  // Randomly select 10 pokemon
  const data = await response.json();
  return data.results;
};

export async function PokemonList() {
  const randomPokemon = await cachedGetRandomPokemon();

  return (
    <div>
      {randomPokemon.map((pokemon: { name: string }) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
}
