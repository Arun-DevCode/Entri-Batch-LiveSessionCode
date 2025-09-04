import React from "react";
import { useSearchParams } from "react-router";

function SearchPage() {
  const [searchQuery] = useSearchParams();
  const query = searchQuery.get("q");
  const brand = searchQuery.get("brand");
  return (
    <div className="p-16">
      <h1>Search page - Query</h1>
      <p>{query}</p>
      <p>{brand}</p>
    </div>
  );
}

export default SearchPage;
