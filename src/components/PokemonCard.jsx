import React from "react";

export default function PokemonCard({ pokemonData }) {
  if (!pokemonData) {
    return <h1>Cargando pokemon...</h1>;
  }
  return (
    <div className="bg-white rounded-lg p-4">
      <img
        src={pokemonData.sprites.front_default}
        alt="pokemonimage"
        className="w-full h-48 object-cover"
      />
      <div>
        <h2 className="text-xl font-semibold capitalize">nombre</h2>
        <p>ID: {pokemonData.id}</p>
      </div>
    </div>
  );
}
