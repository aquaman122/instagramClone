import React, { createContext, useReducer } from 'react'

export const GlobaStatelContext = createContext(null);
export const GlobalDispatchContext = createContext(null);

const intialState = {
  user: {},
  isAuthenticated: false,
  isOnboarded: false,
  isLoading: false
}

export default function GlobalContextProvider({ children }) {

  const [state, dispatch] = useReducer(globalReducer, intialState);
  
  return (
    <GlobaStatelContext.Provider>
      <GlobalDispatchContext.Provider>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobaStatelContext.Provider>
  )
}
