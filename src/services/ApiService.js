import axios from "axios";
import { baseUrl } from "../constants/Constants";

export const getCharacters = async (pageNumber) => {
    try {
        const response = await axios.get(`${baseUrl}/?page=${pageNumber}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}