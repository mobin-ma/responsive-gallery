import { configureStore, combineReducers } from '@reduxjs/toolkit';
import photosReducer from './featuers/photosSlice';

// Making a root reducer
const rootReducer = combineReducers({
    photos: photosReducer,
})

// store
export const store = configureStore({
  reducer: rootReducer
});
