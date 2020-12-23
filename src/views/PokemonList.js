import React, {useContext} from 'react';
import {PokemonContext} from "../providers/PokemonProvider";

const PokemonList = () => {
    const {pokemons} = useContext(PokemonContext);
    return (
        <ul>
            {pokemons.map(card => (<li key={card.id}>
                {card.name}
            </li>))}
        </ul>
    );
};

export default PokemonList;