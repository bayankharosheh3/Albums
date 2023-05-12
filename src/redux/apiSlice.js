import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: null,
    loading: false,
    error: null,
    page: 1,
    hasMoreItems: true, // Add a new field to indicate whether there are more items
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.loading = false;
      state.data = [...action.payload];
    },
    fetchDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetData(state) {
      state.data = null;
      state.loading = false;
      state.error = null;
      state.page = 1;
      state.hasMoreItems = true; // Reset hasMoreItems to true
    },
    incrementPage(state) {
      state.page += 1;
    },
    setHasMoreItems(state, action) {
      state.hasMoreItems = action.payload;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  resetData,
  incrementPage,
  setHasMoreItems,
} = apiSlice.actions;

let resetTimer = null;

export const fetchApiData = (url) => async (dispatch, getState) => {
  const { api } = getState();
  const { page } = api;

  // if (api.data !== null) {
  //   // Data already exists in Redux, no need to fetch again
  //   return;
  // }


  dispatch(fetchDataStart());

  try {
    const response = await axios.get(`${url}_page=${page}&_limit=20`);
    console.log(response.data);

    if (response.data.length === 0) {
      dispatch(setHasMoreItems(false)); // Set hasMoreItems to false if there are no more items
    } else {
      dispatch(fetchDataSuccess(response.data));
      dispatch(incrementPage());
    }

    // Reset the data after 5 minutes
    resetTimer = setTimeout(() => {
      dispatch(resetData());
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

export default apiSlice.reducer;

window.addEventListener('unload', () => {
  clearTimeout(resetTimer);
});
