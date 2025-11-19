"use client";
import React, { FunctionComponent, useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

const DebounceInput: FunctionComponent = () => {
  const [query, setQuery] = useState<string>("");

  const getData = (query: string) => {
    if (!query) {
      return;
    }
    console.log("data fetch");
  };

  useEffect(() => {
    if (!query) return;
    const timerId = setTimeout(() => {
      getData(query);
    }, 300);
    return () => clearTimeout(timerId);
  }, [query]);

  return <Input onChange={(v) => setQuery(v.target.value)} />;
};

export default DebounceInput;
