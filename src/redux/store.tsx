import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slice/RootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["feedbackSlice", "surveySlice"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(reduxAuthApi.middleware)
});

let persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
