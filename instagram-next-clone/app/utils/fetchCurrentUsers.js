import React from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseApp';

export default function fetchCurrentUsers() {
  const fetchUser = async () => {
    const currentUserRef = doc(db, 'users', email);
    const currentUserSnap = await getDoc(currentUserRef);

    if (currentUserSnap.exists()) {
      dispatch({
        type: 'SET_USER',
        payload:{
          user: currentUserSnap.data()
        }
      })

      dispatch({
        type:'SET_IS_ONBOARDED',
        payload:{
          isOnboarded:true
        }
      })
    } else {
      console.log('user is not onboarded!')
    }
  }
  return { fetchUser }
}
