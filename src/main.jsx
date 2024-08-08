import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App/>
  </ChakraProvider>
);
