import React from "react";
import { StoreProvider } from "./store";
import Home from "./screens/home";
import "./config";

export default () => {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );
};
