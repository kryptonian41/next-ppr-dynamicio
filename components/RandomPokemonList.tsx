export const getRandomPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  // Randomly select 10 pokemon
  const data = await response.json();
  const randomPokemon = data.results
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
  return randomPokemon;
};

export const RandomPokemonList = async () => {
  const randomPokemon = await getRandomPokemon();
  return (
    <div>
      {randomPokemon.map((pokemon: { name: string }) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};
