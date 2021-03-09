import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { RtlProvider } from "./rtl-support";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <RtlProvider>
        <App />
      </RtlProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
