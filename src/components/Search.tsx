import { useSearchParams } from "react-router";
import SearchIcon from "./icons/SearchIcon";
import { Button } from "./ui/button";
import { useState } from "react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ q: query });
  };
  return (
    <form onSubmit={handleSubmit} className="w-full md:w-[50%] relative">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for anything..."
        className="w-full max-w-full px-4 py-2 border rounded-xs text-[.8rem]"
      />

      <Button
        className="w-0 bg-transparent hover:bg-transparent cursor-pointer text-black absolute top-1/2 right-4 transform -translate-y-1/2"
        variant="default"
      >
        <SearchIcon className="w-4" />
      </Button>
    </form>
  );
};

export default Search;
