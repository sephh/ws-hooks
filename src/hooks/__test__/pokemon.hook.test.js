import axios from "axios";
import {renderHook, act} from '@testing-library/react-hooks'
import {usePokemon} from '../pokemon.hook';

jest.mock('axios');

describe('usePokemon', () => {
    const mockCardsResponse = (cards = []) => {
        axios.get.mockResolvedValue({
            data: {
                cards
            }
        });
    };

    test('should have default state', () => {
        const {result} = renderHook(() => usePokemon())

        expect(result.current.loading).toBe(false);
        expect(result.current.pokemons).toEqual([]);
    })

    test('should fetch', async () => {
        const cards = ['pikachu', 'bulbasaur'];

        mockCardsResponse(cards)

        const {result, waitFor} = renderHook(() => usePokemon())

        act(() => {
            result.current.fetch({});
        })

        expect(result.current.loading).toBe(true);

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
            expect(result.current.pokemons).toEqual(cards);
        })
    })
});