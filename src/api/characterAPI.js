import axios from "axios";
import { API_URL } from "../consts";

export const fetchAllCharacters = async (pageNumber) => {
    try {
        const response = await axios.get(`${API_URL}?page=${pageNumber}`);
        if (response.status === 200) {
          return response.data;
        } else {
            throw new Error('Get Request failed');
        }
    } catch (err) {
        console.error(err.message);
    }
};