import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    pageNumber: 1,
    totalPages: 1,
}

const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers: {
        setCharacters(state, action) {
            state.characters = action.payload.results;
            state.totalPages = action.payload.info.pages;
        },

        setPage(state, action) {
            state.pageNumber = action.payload;
        }
    }
})

export const { setCharacters, setPage } = characterSlice.actions;
export default characterSlice.reducer;