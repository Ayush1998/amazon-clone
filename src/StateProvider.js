// data layer

import React, { createContext, useContext, useReducer } from "react";

// track basket

export const stateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);
