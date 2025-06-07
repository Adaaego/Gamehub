import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

//fetch game data 
export const fetchGames = createAsyncThunk('games/fetchGames', async () =>{
    const popularGameData = await axios.get(popularGamesUrl());
    const upcomingGamesData = await axios.get(upcomingGamesUrl());
    const neeGamesData = await axios.get(newGamesUrl())

    return{
        popular : popularGameData.data.results,
        upcoming: upcomingGamesData.data.results,
        newGames : neeGamesData.data.results
    }
})

const gameSlice = createSlice({
    name : 'games',
    initialState :{
        popular : [],
        upcoming :[],
        newGames : [],
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
            state.upcoming = action.payload.upcoming;
            state.newGames =action.payload.new;
        })
        .addCase(fetchGames.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      }
    });

    export default gameSlice.reducer;