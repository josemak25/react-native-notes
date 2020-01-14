import React from "react";
import { StoreProvider } from "./store";
import Home from "./screens/home";

export default () => {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  );
};
