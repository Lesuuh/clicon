import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchSubmit = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  return (
    <form>
      <div className="relative hidden md:flex">
        <input
          type="text"
          name="search"
          id="search"
          className="bg-white px-[20px]  h-[48px] md:w-[500px] lg:w[648px] rounded-[2px] shadow-sm"
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
