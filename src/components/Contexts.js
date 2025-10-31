import { createContext } from "react";

const AppStateContext = createContext(null);
const DispatchContext = createContext(null);

export {AppStateContext, DispatchContext};