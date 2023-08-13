import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  nanoid,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Survey } from "@/types";


interface SurveyType {
  currentSurvey: Survey;
  surveyId: number;
}

// Initial states
const initialState: SurveyType = {
  currentSurvey: {
    title: "",
    dateOfCreation: "",
    category: "",
    targetAudience: "",
    distributionMethod: 'Email',
    expirationDate: "",
    privacy: "",
    questions: [],
  },
  surveyId: 0,
};

export const surveySlice = createSlice({
  name: "surveySlice",
  initialState,
  reducers: {
    setCurrentSurvey: (state, action) => {
      console.log("DATA: ", action.payload);

      state.currentSurvey = action.payload;
    },
    setSurveyId: (state, action) => {
      state.surveyId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentSurvey, setSurveyId } = surveySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSurvey = (state: RootState) => state.surveySlice;

export default surveySlice.reducer;
