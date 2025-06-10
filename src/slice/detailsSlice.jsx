import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { gameDetailsURL, gameScreenshotURL} from "../api";

//fetch game details
const fetchDetails = createAsyncThunk('details/fetchDetails', async (id) =>{
    const gameDetailsData = await axios.get(gameDetailsURL());
    const screenshotData = await axios.get(gameScreenshotURL());

    return{
        details: gameDetailsData.data,
        screenshots: screenshotData.data
    }

});

const detailsSlice = createSlice({
    name: 'details',
    initialState:{
        details: {platforms : []},
        screenshot: { results: [] },
        isLoading: false,
        error: null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchDetails.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchDetails.fulfilled, (state, action) => {
            state.details = action.payload.details;
            state.screenshot = action.payload.screenshots;
            state.isLoading = false;
        })
        .addCase(fetchDetails.rejected, (state,action) => {
            state.isLoading =false;
            state.error = action.error.message
        })
    }
});

export default detailsSlice.reducer;