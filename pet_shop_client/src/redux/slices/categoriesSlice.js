import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const BASE_URL = "http://localhost:3333";

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async (_, {rejectWithValue}) => {
        try{
        const response = await axios.get(`${BASE_URL}/categories/all`);
        return response.data;    
        }catch (error){
            const message = error || error.message;
            return rejectWithValue({message});
        }
    }
)

export const fetchCategorie = createAsyncThunk(
    "categories/fetchCategorie",
    async (id, { rejectWithValue }) => {
        try{
            const response = await axios.get(`${BASE_URL}/categories/${id}`);
            return response.data;
        }catch(error){
            const message = error || error.message;
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

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        categorie: null,
        staus: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.pending, setLoading)
        .addCase(fetchCategories.fulfilled, (state, action)=>{
            state.staus = "succeeded";
            state.categories = action.payload
        })
        .addCase(fetchCategories.rejected, setError)

        .addCase(fetchCategorie.pending, setLoading )
        .addCase(fetchCategorie.fulfilled, (state, action)=>{
            state.staus = "succeeded";
            state.categorie = action.payload;
        })
        .addCase(fetchCategorie.rejected, setError)

    }
})

const {categories, categorie, status, error} = categoriesSlice.actions
export default categoriesSlice.reducer;

/*3. GET /categories коли мені потрібно вивести 
4 випадкові категорії на сторінці в головній стор і всі 
на сторінці категорій 
4. GET /categories/:id коли виберу каткгорію*/