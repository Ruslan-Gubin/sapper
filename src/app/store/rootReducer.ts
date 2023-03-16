import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { getPersistConfig } from "redux-deep-persist";
import { sapperReducer } from "@/features";


const rootReducer = combineReducers({
  sapper: sapperReducer,
  // questions: redusers.questionsReducer,
  // [rtkQuery.productsApi.reducerPath]: rtkQuery.productsApi.reducer,
});

const config = getPersistConfig({
  key: "nextjs",
  version: 1,
  storage,
  blacklist: [
    // "auth.password",
    // rtkQuery.productsApi.reducerPath,
  ],
  rootReducer,
});

export { config, rootReducer };
