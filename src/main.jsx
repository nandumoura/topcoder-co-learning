import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

// components
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
