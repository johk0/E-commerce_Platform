import { configureStore } from "@reduxjs/toolkit";
import getProducts from "./slices/getProducts";

export const store = configureStore({
	reducer: { getProducts },
});
