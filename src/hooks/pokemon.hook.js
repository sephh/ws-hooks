import { useState } from 'react';
import { getCards } from '../api/pokemon.api';

export const usePokemon = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetch = async ({ query }) => {
    setLoading(true);

    try {
      const cards = await getCards({ query });
      setLoading(false);
      setPokemons(cards);

      return cards;
    } catch (e) {
      setLoading(false);
      setPokemons([]);
      console.error(e);
    }
  };

  return {
    fetch,
    loading,
    pokemons,
  };
};
