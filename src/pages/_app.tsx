import { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import type { AppProps } from "next/app";
import store, { persistor } from "@/app/store/store";

import "../app/styles/globals.scss";


 const App: FC<AppProps> = ({ Component, pageProps }) => {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App
