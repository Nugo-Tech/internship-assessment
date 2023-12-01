import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character/';

const generatePaginationArray = (totalPages, currentPage) => {
    const maxPagesToShow = 1;
    const ellipsis = '..';
  
    let paginationArray = [];
  
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === 2 ||
        i === totalPages - 1 ||
        i === totalPages ||
        (i >= currentPage - maxPagesToShow && i <= currentPage + maxPagesToShow)
      ) {
        paginationArray.push(i);
      } else if (
        i === currentPage - maxPagesToShow - 1 ||
        i === currentPage + maxPagesToShow + 1
      ) {
        paginationArray.push(ellipsis);
      }
    }
    return paginationArray;
  }

export const fetchAllCharacters = createAsyncThunk(
    'characters/fetchAll',
    async (pageNumber) => {
        try {
            const {data, status} = await axios.get(`${API_URL}?page=${pageNumber}`);
            if(status === 200){
                return data;
            }
        } catch(err) {
            console.error(err);
        }
    }
);

const initialState = {
    characterData: [],
    totalPages: 1,
    currentPage: 1,
    pagesArray: [1],
};

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCharacters.fulfilled, (state, { payload, meta }) => {
                state.characterData = payload.results;
                state.totalPages = payload.info.pages;
                const pagesArray = generatePaginationArray(payload.info.pages, meta.arg);
                state.pagesArray = pagesArray;
                state.currentPage = meta.arg;
            });
    },
});

export default characterSlice.reducer;