/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.spacexdata.com/v3/missions";

export const getMissions = createAsyncThunk(
  "missions/getMissions",
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
  missions: [],
};

const missionsSlice = createSlice({
  name: "missions",
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const { id } = action.payload;
      const newState = state.missions.map((mission) => {
        if (`${mission.mission_id}` !== id) return mission;
        return { ...mission, active: true };
      });

      state.missions = newState;
    },
    leaveMission: (state, action) => {
      const { id } = action.payload;
      const newState = state.missions.map((mission) => {
        if (`${mission.mission_id}` !== id) return mission;
        return { ...mission, active: false };
      });

      state.missions = newState;
    },
  },
  extraReducers: (builder) => {
    // get missions
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        const res = action.payload;

        state.missions = res;
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
        state.missions = [];
      });
  },
});

export const missionsActions = missionsSlice.actions;
export default missionsSlice.reducer;
