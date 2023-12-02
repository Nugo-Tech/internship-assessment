import { configureStore } from '@reduxjs/toolkit';
import getDataSliceReducer from './reducers/getDataSlice';

// create a store to hold the all state tree of the application
const store = configureStore({
  reducer: {
    getData: getDataSliceReducer,
  },
});

export default store;
