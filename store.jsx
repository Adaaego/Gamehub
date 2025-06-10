import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './src/slice/gameSlice';
import detailsReducer from './src/slice/detailsSlice';


export const store = configureStore({
  reducer: {
       games : gamesReducer,
       details : detailsReducer,
  },
})