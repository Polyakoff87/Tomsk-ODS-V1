import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4} from 'uuid';

const initialState = [];

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReview(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addReview } = reviewSlice.actions;
export const dataReview = (state) => state.review;
export default reviewSlice.reducer;
