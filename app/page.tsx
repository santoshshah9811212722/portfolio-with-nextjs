"use client";

import { useEffect, useState } from "react";
import SplashScreen from "./splashscreen/page";
import Home from "./home/page";


export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <SplashScreen /> : <Home />}
    </>
  );
}