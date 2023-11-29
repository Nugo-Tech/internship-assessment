import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    pageNumber: 1,
}

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        setCharacters(state, action) {
            state.characters = action.payload;
        }
    }
})

export const { setCharacters } = characterSlice.actions;
export default characterSlice.reducer;