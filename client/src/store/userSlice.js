import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    userSet: (userState, action) => {
      userState.user = action.payload;
    },
  },
});

export const { userSet } = userSlice.actions;
export default userSlice.reducer;
