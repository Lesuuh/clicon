import { useState } from "react";
import { CiSearch } from "react-icons/ci";


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  console.log(searchQuery);
  return (
    <div className="relative">
      <input
        type="text"
        name="search"
        id="search"
        className="bg-white px-2 py-1 w-[648px] hidden md:flex"
        placeholder="Search for anything..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <CiSearch className="absolute top-1/2 right-1 transform -translate-y-1/2"  size={20}/>
    </div>
  );
};

export default SearchBar;
