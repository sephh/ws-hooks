import React from 'react';
import Pokemons from "./views/Pokemons";
import PokemonProvider from "./providers/PokemonProvider";
import PokemonList from "./views/PokemonList";

function App() {
    return (
        <PokemonProvider>
            <Pokemons/>
            <PokemonList/>
        </PokemonProvider>
    );
}

export default App;
