import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isSearchVisible: false,
    },
    reducers: {
        toggleSearch: (state) => {
            state.isSearchVisible = !state.isSearchVisible;
        },
    }
});

export const { toggleSearch } = gptSlice.actions;
export default gptSlice.reducer;
