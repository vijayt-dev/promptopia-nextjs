"use client";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store";
import Loading from "@app/loading";
[];
const Gate = ({ children }) => (
  <PersistGate loading={<Loading />} persistor={persistor}>
    {children}
  </PersistGate>
);

export default Gate;
