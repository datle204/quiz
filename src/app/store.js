import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../features/scoreSlice";
import questionReducer from "../features/questionSlice";
export const store = configureStore({
  reducer: {
    score: scoreReducer,
    question: questionReducer,
  },
});
