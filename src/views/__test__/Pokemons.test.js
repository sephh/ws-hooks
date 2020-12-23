import {act, render, waitFor} from "@testing-library/react";
import Pokemons from "../Pokemons";
import axios from "axios";
// eslint-disable-next-line jest/no-mocks-import
import {pikachuMock, squirtleMock} from "../../__mocks__/card-builder";

jest.mock('axios')

describe('Pokemons', () => {
    const mockCardsResponse = (cards = []) => {
        axios.get.mockResolvedValue({
            data: {
                cards
            }
        });
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('default render', async () => {
        mockCardsResponse([]);

        const {queryByText, getByAltText} = render(<Pokemons/>);

        expect(getByAltText('Pokeball Loading')).toBeInTheDocument();

        await waitFor(() => {
            expect(queryByText('Pokeball Loading')).toBeFalsy();
            expect(queryByText(/não encontramos nada/i)).toBeInTheDocument();
        })
    });

    test('should render cards', async () => {
        const cards = [pikachuMock, squirtleMock];

        mockCardsResponse(cards);

        const {getByAltText} = render(<Pokemons/>);

        await waitFor(() => {
            cards.forEach(card => {
                expect(getByAltText(`${card.id}-${card.name}`)).toBeInTheDocument();
            });
        });
    });
})