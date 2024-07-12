import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: false,
};

export const loginState = createSlice({
	name: "loginState",
	initialState,
	reducers: {
		changeLoginState: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { changeLoginState } = loginState.actions;

export default loginState.reducer;
