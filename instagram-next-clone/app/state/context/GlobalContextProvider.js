'use client'
import React, { createContext, useEffect, useReducer } from 'react'
import { globalReducer } from '../reducers/GlobalReducer';
import { auth } from '@/app/firebase/firebaseApp';
import { onAuthStateChanged } from 'firebase/auth';

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: 'SET_IS_AUTHENTICATED',
          payload:{
            isAuthenticated:true
          }
        });
      }
    });

    return () => unsubscribe();
  },[]);
  
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}
