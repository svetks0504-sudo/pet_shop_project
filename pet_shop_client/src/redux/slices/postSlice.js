import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3333";

export const sendOrder = createAsyncThunk(
  "post/sendOrder",
  async (data, { rejectWithValue }) => {
    try {
       console.log("THUNK CALLED:", data);
      const response = await axios.post(`${BASE_URL}/order/send`, data);
      return response.data;
    } catch (error) {
      const message = error.message || error;
      return rejectWithValue({ message });
    }
  },
);

export const sendSale = createAsyncThunk(
  "post/sendSale",
  async (data, { rejectWithValue }) => {
    try {
      console.log("THUNK CALLED:", data);
      const response = await axios.post(`${BASE_URL}/sale/send`, data);
      return response.data;
    } catch (error) {
      const message = error.message || error;
      return rejectWithValue({ message });
    }
  },
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    success: false,
    error: null,
    message: "",
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    const setPending = (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    };
    const setFulfilled = (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.message = "Request sent successfully";
    };
    const setRejected = (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload?.message || "Request failed";
      state.message = action.payload?.message || "Request failed. Please try again.";
    };

    builder
      .addCase(sendOrder.pending, setPending)
      .addCase(sendOrder.fulfilled, setFulfilled)
      .addCase(sendOrder.rejected, setRejected)

      .addCase(sendSale.pending, setPending)
      .addCase(sendSale.fulfilled, setFulfilled)
      .addCase(sendSale.rejected, setRejected);
  },
});

export const { resetState } = postSlice.actions;
export default postSlice.reducer;
