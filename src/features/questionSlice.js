import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfQuestion: 0,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    updateQuestion: (state, action) => {
      state.numberOfQuestion = action.payload;
    },
  },
});

export const { updateQuestion } = questionSlice.actions;

export const selectQuestion = (state) => state.question.numberOfQuestion;

export default questionSlice.reducer;
