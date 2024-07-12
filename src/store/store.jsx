import { configureStore } from "@reduxjs/toolkit";
import getProducts from "./slices/getProducts";
import loginState from "./slices/loginState";

export const store = configureStore({
	reducer: {
		getProducts,
		loginState,
	},
});
