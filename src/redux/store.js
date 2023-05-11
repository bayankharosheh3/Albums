import { configureStore } from "@reduxjs/toolkit";
import searchHistoryReducer from "./searchHistorySlice";

const store = configureStore({
  reducer: {
    searchHistory: searchHistoryReducer,
  },
});

export default store;
