import { configureStore } from "@reduxjs/toolkit";
import searchHistoryReducer from "./searchHistorySlice";
import apiReducer from './apiSlice'

const store = configureStore({
  reducer: {
    searchHistory: searchHistoryReducer,
    api : apiReducer
  },
});

export default store;
