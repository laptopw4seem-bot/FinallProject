import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import themes from "./themes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <ColorModeScript initialColorMode={themes.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
