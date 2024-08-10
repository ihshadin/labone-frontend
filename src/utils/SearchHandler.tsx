import { TSetParams } from "@/types/global.type";
import { AiOutlineSearch } from "react-icons/ai";

const SearchHandler = ({ setParams }: TSetParams) => {
  return (
    <div className="md:w-[400px] relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-6 rounded-full backdrop-filter bg-primary/10 hover:bg-primary/5 bg-opacity-85 text-accent  border-1 border-primary/30 hover:border-primary/35 focus:outline-0 focus:outline-primary focus:border-primary/70 duration-300 transition-all"
          onChange={(e) =>
            setParams([
              { name: "searchTerm", value: e.target.value },
              { name: "limit", value: 9 },
            ])
          }
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 ">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchHandler;
