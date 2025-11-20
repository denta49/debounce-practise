"use client";
import React, { FC, FunctionComponent, memo, useMemo, useState } from "react";

// eslint-disable-next-line react/display-name
const Row: FC<{ value: number }> = memo(({ value }) => {
  return <li>Element #{value}</li>;
});

const OptimizedList: FunctionComponent = () => {
  const ITEMS_PER_PAGE = 50;

  const items: number[] = useMemo(() => {
    return Array.from({ length: 1000 }, (_, index) => index + 1);
  }, []);

  const [page, setPage] = useState<number>(1);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Paginated list (1000 items, {ITEMS_PER_PAGE} per page)</h2>

      <div style={{ marginBottom: "0.5rem" }}>
        <button onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        <span style={{ margin: "0 0.5rem" }}>
          Page {page} / {totalPages}
        </span>
        <button onClick={handleNext} disabled={page === totalPages}>
          Next
        </button>
      </div>

      <ul>
        {currentItems.map((value) => (
          <Row key={value} value={value} />
        ))}
      </ul>
    </div>
  );
};

export default OptimizedList;
