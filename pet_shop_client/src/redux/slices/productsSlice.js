import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3333";


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/all`);
      return response.data;
    } catch (error) {
        const message = error.message || error;
      return rejectWithValue({ message });
    }
  },
);


export const fetchProduct = createAsyncThunk(
    "products/fetchProduct",
    async(id, {rejectWithValue}) => {
        try{
            const response = await axios.get(`${BASE_URL}/products/${id}`);
            return response.data;
        }catch(error){
            const message = error.message || error;
            return rejectWithValue({message});
        }
    }
)
 

const setLoading = (state) => {
    state.status = "loading";
    state.error = null;
}

const setError = (state, action) => {
    state.status = "failed";
    state.error = action.payload;
}

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: null,
    status:"idle",
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, setLoading)
    .addCase(fetchProducts.fulfilled, (state, action)=>{
      state.status = "succeeded";
        state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, setError)

    
    .addCase(fetchProduct.pending, setLoading)
    .addCase(fetchProduct.fulfilled, (state, action)=>{
      state.status = "succeeded";
        state.product = action.payload;
    })
    .addCase(fetchProduct.rejected, setError);
  },
});

const {products, product, error, status} = productsSlice.actions
export default productsSlice.reducer;

/*
✅ 1. GET /products → всі продукти для сторінки з усими продуктами і
відфільтрувати при мепі на сторінці сейл i пошуку / сортування

2. GET /products/:id → один продукт для сторінки 
продукт коли натискаю на продукт */

