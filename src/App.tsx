import React from 'react';
import PokemonProvider from "./providers/PokemonProvider";
import Pokemons from "./views/Pokemons";

function App() {
  return (
    <PokemonProvider>
      <Pokemons/>
    </PokemonProvider>
  );
}

export default App;
