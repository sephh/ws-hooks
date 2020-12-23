import axios from "axios";

export const getCards = ({page = 1, query = '', pageSize = 4}) => {
    return axios.get(`${process.env.REACT_APP_API_URL}/cards?page=${page}&name=${query}&pageSize=${pageSize}`).then(
        (res) => res.data.cards
    );
};
