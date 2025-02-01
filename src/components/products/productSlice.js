import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async ({ rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products`);

      if (!res.ok) throw new Error("Failed to fetch products");

      const products = await res.json();
      return products.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (categoryName, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `${API_BASE_URL}/products/category/${categoryName}`,
      );

      if (!res.ok) throw new Error("Failed to fetch products");

      const products = await res.json();
      return products.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId, { rejectWithValue }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products/${productId}`);

      if (!res.ok) throw new Error("Failed to fetch product data");

      const product = await res.json();
      return product.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

const initialState = {
  products: [],
  currentProduct: null,
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all products
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "error";
      })

      // Fetch by category
      .addCase(fetchProductsByCategory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = "error";
      })

      // Fetch by product ID
      .addCase(fetchProductById.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default productsSlice.reducer;
