import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { popularGamesUrl } from "../api";

//fetch game data 
export const fetchGames = createAsyncThunk('games/fetchGames', async () =>{
    const popularGameData = await axios.get(popularGamesUrl());

    return{
        popular : popularGameData.data.results,
    }
})

const gameSlice = createSlice({
    name : 'games',
    initialState :{
        popular : [],
        status: 'idle',
    error: null,
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchGames.pending, (state) => {
            state.status ='loading';
        })
        .addCase(fetchGames.fulfilled, (state,action) => {
            state.status ='succeeded';
            state.popular = action.payload.popular;
        })
        .addCase(fetchGames.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      }
    });

    export default gameSlice.reducer;