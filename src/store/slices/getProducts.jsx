// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsFromHygraph } from "@/services/api";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const products = await fetchProductsFromHygraph();
		return products;
	}
);

const productSlice = createSlice({
	name: "products",
	initialState: {
		items: [{ title: "test", id: 30000 }],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default productSlice.reducer;
