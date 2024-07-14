import { configureStore } from "@reduxjs/toolkit";
import getProducts from "./slices/getProducts";
import loginState from "./slices/loginState";
import userData from "./slices/userData";

export const store = configureStore({
	reducer: {
		getProducts,
		loginState,
		userData,
	},
});
