"use client";
import React, { FunctionComponent, useEffect, useRef } from "react";

const ThrottleScrollToTop: FunctionComponent = () => {
  const timerIdRef = useRef<null | number>(null);

  const onScrollHandler = () => {
    if (timerIdRef.current !== null) return;
    timerIdRef.current = window.setTimeout(() => {
      timerIdRef.current = null;
      console.log("Scroll event at", new Date().toISOString());
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, []);

  return <></>;
};
export default ThrottleScrollToTop;
