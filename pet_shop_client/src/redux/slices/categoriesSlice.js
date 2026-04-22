import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3333";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/categories/all`);
      return response.data;
    } catch (error) {
      const message = error.message || error;
      return rejectWithValue({ message });
    }
  },
);

export const fetchCategorie = createAsyncThunk(
  "categories/fetchCategorie",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/categories/${id}`);
      return response.data;
    } catch (error) {
      const message = error.message || error;
      return rejectWithValue({ message });
    }
  },
);

const setLoading = (state) => {
  state.status = "loading";
  state.error = null;
};

const setError = (state, action) => {
  state.status = "failed";
  state.error = action.payload;
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    category: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, setLoading)
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, setError)

      .addCase(fetchCategorie.pending, setLoading)
      .addCase(fetchCategorie.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.category = action.payload;
      })
      .addCase(fetchCategorie.rejected, setError);
  },
});

export default categoriesSlice.reducer;

/*3. GET /categories коли мені потрібно вивести 
4 випадкові категорії на сторінці в головній стор і всі 
на сторінці категорій 
4. GET /categories/:id коли виберу каткгорію*/
