import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import * as persist from "redux-persist"; 
import { config, rootReducer } from "./rootReducer";


const persistedReducer = persist.persistReducer(config, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>  
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          persist.FLUSH,
          persist.REHYDRATE,
          persist.PAUSE,
          persist.PERSIST,
          persist.PURGE,
          persist.REGISTER,
        ],
      },
    }).concat([
      // rtkQuery.postApi.middleware, 
    ]),
  });

const store = makeStore()


const persistor = persist.persistStore(store);
export default store;

type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

type TypeRootState = ReturnType<typeof store.getState>;

export type { AppDispatch, TypeRootState };

export { persistor, useAppDispatch }