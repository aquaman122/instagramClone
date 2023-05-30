'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Auth from "./component/auth/Auth";

export default function Home() {
  const router = useRouter();

  const [isAuthentic, setIsAuthentic] = useState(false);

  return (
    <>
      {isAuthentic ? router.push('/mainpage') : <Auth />}
    </>
  )
}
