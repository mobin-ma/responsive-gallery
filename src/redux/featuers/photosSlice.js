import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Create a new Redux slice to store the photos data
const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setPhotos: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Create main function to request photos from API address
export const fetchPhotos = () => {
  return async (dispatch) => {
    try {
      dispatch(photosSlice.actions.setLoading()); // Before making the request, we set the loading status.
      
      const url = 'https://api.unsplash.com/photos?client_id=AoU3rrW5uEwQ-s_h5coetcuXq4AmjBaL-fZz4LkLWt4';
      const response = await axios.get(url);
      dispatch(photosSlice.actions.setPhotos(response.data)); // We store the photo data in Redux
    } catch (error) {
      dispatch(photosSlice.actions.setError(error.message)); // If an error occurs, we store the error in Redux
    }
  };
};


export default photosSlice.reducer;