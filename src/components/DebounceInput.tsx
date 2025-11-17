import React, { FunctionComponent, useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

type Props = {};
const DebounceInput: FunctionComponent<Props> = (props) => {
  const [query, setQuery] = useState("");

  const fetchData = (v: string) => {
    if (!v) return;
    fetch(`/api/search?query=${v}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    if (!query) return;

    const timerId = setTimeout(() => {
      fetchData(query);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  return <Input onChange={(v) => setQuery(v.target.value)} />;
};

export default DebounceInput;
