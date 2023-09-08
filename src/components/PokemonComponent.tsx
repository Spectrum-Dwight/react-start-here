import { useState, useEffect } from "react";

type PokemonData = {
  name: string;
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
};

function PokemonComponent() {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/149");
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchPokemonData();
  }, []);

    if (!pokemonData) {
      return null;
    }

  return (
    <div>
      <h1>Pokemon Data</h1>
      {
        <div>
          <p>Name: {pokemonData.name.toUpperCase()}</p>
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
          <p>Abilities:</p>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}

export default PokemonComponent;
