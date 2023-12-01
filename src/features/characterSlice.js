import { createSlice } from '@reduxjs/toolkit';

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