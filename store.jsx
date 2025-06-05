import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './src/slice/gameSlice';


export const store = configureStore({
  reducer: {
       games : gamesReducer,
  },
})