"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchHandler = () => {
  const [activeSearch, setActiveSearch] = useState([]);
  console.log("doctor data", activeSearch);

  
  const handleSearch = async (e) => {
    console.log(e)
  };

  return (
    <form className="w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here"
          className="w-full py-4 px-6 rounded-full backdrop-filter bg-primary/10 bg-opacity-85 text-accent  border-1 border-primary/30 focus:outline-0 focus:outline-primary focus:border-primary/70 duration-300 transition-all "
          onChange={handleSearch}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-primary text-white rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchHandler;