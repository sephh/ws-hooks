import React, { createContext } from 'react';
import { usePokemon } from '../hooks/pokemon.hook';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const context = usePokemon();

  return (
    <PokemonContext.Provider value={context}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
