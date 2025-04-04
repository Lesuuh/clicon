import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchSubmit = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <form className="w-full max-w-[500px]">
      <div className="relative w-full hidden md:flex">
        <input
          type="text"
          name="search"
          id="search"
          className="w-full bg-white max-w-full px-4 py-2 border rounded-xs text-[.8rem]"
          // className="bg-white px-[20px] py-1 md:w-[500px] lg:w[648px] rounded-[2px] shadow-sm"
          placeholder="Search for anything..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <CiSearch
          onClick={handleSearchSubmit}
          className="absolute top-1/2 right-[20px] transform -translate-y-1/2 text-black font-bold cursor-pointer"
          size={20}
        />
      </div>
    </form>
  );
};

export default SearchBar;
