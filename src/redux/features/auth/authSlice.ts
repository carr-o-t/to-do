import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export interface AuthState {
  isAuthenticated: boolean;
  user: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = "";
    },
  },
});

export const useAuth = () => {
  return useSelector((state: RootState) => state.auth);
};

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
