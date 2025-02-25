import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  console.log(searchQuery);
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        className="bg-white px-2 py-1 w-[648px] hidden"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
