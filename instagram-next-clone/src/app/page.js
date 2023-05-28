import { useState } from 'react';
import Auth from "@/component/Auth/page";
import Feed from "@/component/Feed/page";

export default function Home() {

  const [isAuthentic, setIsAuthentic] = useState(false);

  return (
    <>
      {isAuthentic ? <Feed /> : <Auth />}
    </>
  )
}
