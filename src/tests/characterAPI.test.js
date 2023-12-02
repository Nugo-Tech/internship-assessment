import axios from "axios";
import { fetchAllCharacters } from "../api/characterAPI";
import { API_URL } from "../consts";

describe('API test', () => {
    it('fetches all characters with correct URL', async () => {
        const pageNumber = 2;
        const expectedURL = `${API_URL}?page=${pageNumber}`;
        const axiosGetSpy = jest.spyOn(axios, 'get');
        const response = await fetchAllCharacters(pageNumber);

        expect(axiosGetSpy).toHaveBeenCalledWith(expectedURL);
        expect(response.results.length).toBeGreaterThan(0);
    });
});
