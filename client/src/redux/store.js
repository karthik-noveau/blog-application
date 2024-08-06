import { createSlice, configureStore } from "@reduxjs/toolkit";

const getUserId = () => {
  let userInfo = JSON.parse(localStorage.getItem("blog-accountDetails"));
  return userInfo;
};
const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginInfo: getUserId() || null,
  },
  reducers: {
    login(state, action) {
      state.loginInfo = { id: action.payload };
      localStorage.setItem(
        "blog-accountDetails",
        JSON.stringify({ id: action.payload })
      );
    },
    logout(state) {
      state.loginInfo = null;
      localStorage.removeItem("blog-accountDetails");
    },
  },
});

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
