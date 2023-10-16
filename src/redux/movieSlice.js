import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        playingMovies: null,
    },
    reducers: {
        addPlayingMovies: (state, action) => {
            state.playingMovies = action.payload;
        }
    }
})

export const {addPlayingMovies} = movieSlice.actions;

export default movieSlice.reducer ;