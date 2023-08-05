import { combineReducers } from "redux";

import feedbackReducer from "./feedbackSlice";
import surveyReducer from "./surveySlice";


const rootReducer = combineReducers({
 // [reduxAuthApi.reducerPath]: reduxAuthApi.reducer,
  feedbackSlice: feedbackReducer,
  surveySlice: surveyReducer,
});

export default rootReducer;
