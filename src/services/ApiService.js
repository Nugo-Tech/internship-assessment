import axios from "axios";
import { baseUrl } from "../constants/Constants";

//function to fetch characters from api when page number is given
export const getCharacters = async (pageNumber) => {
    try {
        const response = await axios.get(`${baseUrl}/?page=${pageNumber}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}