import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    value: {
      name: "",
      email: "",
      image: "",
      id: "",
    },
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return null;
    },
    logIn: (state, action) => {
      return {
        user: {
          value: {
            name: action.payload.name,
            email: action.payload.email,
            image: action.payload.image,
            id: action.payload.id,
          },
        },
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
