import { useReducer } from "react";
import reducer, { initialState } from "./reducer"

export const useAppReducer = () => useReducer(reducer, initialState);