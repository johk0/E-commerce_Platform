import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: {},
};

export const userData = createSlice({
	name: "userData",
	initialState,
	reducers: {
		changeuserData: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { changeuserData } = userData.actions;

export default userData.reducer;
