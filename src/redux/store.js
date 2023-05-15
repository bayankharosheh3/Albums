import { configureStore } from "@reduxjs/toolkit";
import searchHistoryReducer from "./searchHistorySlice";
import albumsReducer from './albumsSlice'

const store = configureStore({
  reducer: {
    searchHistory: searchHistoryReducer,
    albums : albumsReducer
  },
});

export default store;
