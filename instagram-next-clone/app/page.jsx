'use client'
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Auth from "./component/auth/Auth";
import { GlobalStateContext } from "./state/context/GlobalContextProvider";

export default function Home() {
  const router = useRouter();

  const { isAuthenticated, isOnboarded } = useContext(GlobalStateContext);

  return (
    <>
      {isAuthenticated && isOnboarded ? router.push('/mainpage') : <Auth />}
    </>
  )
}
