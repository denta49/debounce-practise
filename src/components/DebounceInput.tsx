"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

const DebounceInput: FunctionComponent = () => {
  const [query, setQuery] = useState<string>("");

  const fetchData = (v: string) => {
    if (!query) return;
    console.log("fetched");
  };

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      fetchData(query);
    }, 300);
    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  return <Input onChange={(v) => setQuery(v.target.value)} />;
};

export default DebounceInput;
