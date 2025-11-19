import React, { FunctionComponent, useEffect, useRef, useState } from "react";

export const ThrottleScrollToTop: FunctionComponent = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const timerId = useRef<number | null>(null);

  useEffect(() => {
    const handleThrottle = () => {
      if (timerId.current !== null) {
        return;
      }
      timerId.current = window.setTimeout(() => {
        if (window.scrollY > 300) {
          setShowButton(true);
        }
      }, 300);
    };
    window.addEventListener("scroll", handleThrottle);

    return () => {
      window.removeEventListener("scroll", handleThrottle);
      if (timerId.current !== null) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

  return <></>;
};
