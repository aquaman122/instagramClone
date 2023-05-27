'use client'
import React, { useState } from 'react'
import Auth from '../conponent/Auth/page';
import Feed from '../conponent/Feed/page';
import MainPage from './main/page'

type Props = {}

export default function HomePage({}: Props) {

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <>
      {isAuthenticated ? <Feed /> : <Auth />}
    </>
  )
}