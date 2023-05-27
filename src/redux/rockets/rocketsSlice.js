/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.spacexdata.com/v3/rockets";

export const getRockets = createAsyncThunk(
  "rockets/getRockets",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${API_URL}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || "Something went wrong!"
      );
    }
  }
);

const initialState = {
  isLoading: false,
  rockets: [],
};

const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const { id } = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (`${rocket.id}` !== id) return rocket;
        return { ...rocket, reserved: true };
      });

      state.rockets = newState;
    },
    cancelRocketReservation: (state, action) => {
      const { id } = action.payload;
      const newState = state.rockets.map((rocket) => {
        if (`${rocket.id}` !== id) return rocket;
        return { ...rocket, reserved: false };
      });

      state.rockets = newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        const res = action.payload;

        state.rockets = res;
      })
      .addCase(getRockets.rejected, (state) => {
        state.isLoading = false;
        state.rockets = [];
      });
  },
});

export const rocketsActions = rocketsSlice.actions;
export default rocketsSlice.reducer;
