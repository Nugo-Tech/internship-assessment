import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const fetchAllCharacters = createAsyncThunk(
    'characters/fetchAll',
    async() => {
        try {
            const {data, status} = await axios.get(API_URL);
            if(status === 200){
                return data.results;
            }
        } catch(err) {
            console.error(err);
        }
    }
);

const initialState = {
    characterData: [],
};

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCharacters.fulfilled, (state, { payload }) => {
                state.characterData = payload;
            });
    },
});

export default characterSlice.reducer;