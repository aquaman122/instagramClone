'use client'
import React, { createContext, useReducer } from 'react'
import { globalReducer } from '../reducers/GlobalReducer';

const intialState = {
  user: {},
  isAuthenticated: false,
  isOnboarded: false,
  isLoading: false
}

export const GlobalStateContext = createContext(intialState);
export const GlobalDispatchContext = createContext(null);


export default function GlobalContextProvider({ children }) {

  const [state, dispatch] = useReducer(globalReducer, intialState);
  
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
