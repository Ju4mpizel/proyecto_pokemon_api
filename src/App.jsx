import { useEffect, useState, useSyncExternalStore } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

  const fetchPokemons = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`);
      const data = await response.json();
      console.log(data);
      setPokemonData(data);
    } catch (error) {
      console.error("ERROR CON EL FETCH DE POKEMON");
    }
  };

  useEffect(() => {
    fetchPokemons(1);
  }, []);
  return (
    <>
      <h1 className="text-4xl font-semibold text-center my-6">POKE API DEMO</h1>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <PokemonCard pokemonData={pokemonData} />
        </div>
      </div>
    </>
  );
}

export default App;
