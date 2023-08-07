import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CurrentFeedback } from "@/types";

interface FeedbackType {
  currentFeeedback: CurrentFeedback;
}

// Initial states
const initialState: FeedbackType = {
  currentFeeedback: {
    respondentId: 0,
    title: "",
    dateOfCreation: "",
    distributionMethod: "Email",
    privacy: "",
    questions: [],
    answers: [],
  },
};

export const feedbackSlice = createSlice({
  name: "feedbackSlice",
  initialState,
  reducers: {
    setCurrentFeedback: (state, action: PayloadAction<any>) => {
      state.currentFeeedback = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentFeedback } = feedbackSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFeedback = (state: RootState) => state.feedbackSlice;

export default feedbackSlice.reducer;
