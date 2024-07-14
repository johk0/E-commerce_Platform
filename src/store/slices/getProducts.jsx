import { API } from "@/services/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const response = await fetch(API.products);
		const data = await response.json();

		return data.products;
	}
);

// Create product slice
const productSlice = createSlice({
	name: "products",
	initialState: {
		items: [{ title: "test", id: 30000 }],
		status: "idle", // for tracking request status
		error: null, // for error tracking
	},
	reducers: {
		// addProduct: (state, action) => {
		//   state.items.push(action.payload);
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
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

// export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
