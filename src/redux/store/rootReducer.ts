import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import authReducer from "../features/auth/authSlice";
import { weatherAPI } from "../api/weatherAPISlice";

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
  [weatherAPI.reducerPath]: weatherAPI.reducer,
});

export default rootReducer;
