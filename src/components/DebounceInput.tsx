"use client";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

import { Input } from "@/components/ui/input";

const DebounceInput: FunctionComponent = () => {
  const [query, setQuery] = useState<string>("");

  const fetchData = useCallback(
    (v: string) => {
      if (!v) return;
      console.log("fetched");
    },
    [query],
  );

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      fetchData(query);
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [query, fetchData]);

  return <Input onChange={(v) => setQuery(v.target.value)} />;
};

export default DebounceInput;
