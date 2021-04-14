import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

// Cấu hình Slice (Ở đây có 1 slice là user)
export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    updateScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

// Export actions
export const { updateScore } = scoreSlice.actions;

// Lấy ra state username, user avatar của user slice;
export const selectScore = (state) => state.score.score;

// Export reducer
export default scoreSlice.reducer;
