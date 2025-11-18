import React, { FunctionComponent, useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

const DebounceInput: FunctionComponent = () => {
  const [query, setQuery] = useState<string>("");

  const fetchData = (query: string) => {
    if (!query) return;
    fetch(`/api/search?query=${encodeURIComponent(query)}`)
      .then((res) => {
        res.json();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return <Input onChange={(v) => setQuery(v.target.value)} />;
};
