"use client";
import React, { FunctionComponent, useEffect, useRef } from "react";

export const ThrottleScrollToTop: FunctionComponent = () => {
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const handleOnScroll = () => {
      if (timer.current !== null) return;

      timer.current = window.setTimeout(() => {
        timer.current = null;
        console.log("scrolled");
      }, 1000);
    };
    window.addEventListener("scroll", handleOnScroll);

    return () => {
      window.removeEventListener("scroll", handleOnScroll);
      if (timer.current !== null) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return <></>;
};
