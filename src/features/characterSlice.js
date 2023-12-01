import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

const fetchAllCharacters = async() => {
    try {
        const {data, status} = await axios.get(API_URL);
        if(status === 200){
            return data.results;
        }
    } catch(err) {
        console.error(err);
    }
}
fetchAllCharacters();

const initialState = {
    characterData: [],
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {

    }
});

export default characterSlice.reducer;