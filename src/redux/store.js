import { configureStore } from "@reduxjs/toolkit";
import missionReducer from "./mission/missionSlice";
import rocketsReducer from "./rockets/rocketsSlice";

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    mission: missionReducer,
  },
});

export default store;
