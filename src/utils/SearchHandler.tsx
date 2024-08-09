import { TSetParams } from "@/types/global.type";
import { AiOutlineSearch } from "react-icons/ai";

const SearchHandler = ({ setParams }: TSetParams) => {
  return (
    <form className="md:w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Type Here"
          className="w-full py-3 px-6 rounded-full backdrop-filter bg-primary/10 bg-opacity-85 text-accent  border-1 border-primary/30 focus:outline-0 focus:outline-primary focus:border-primary/70 duration-300 transition-all "
          onChange={(e) =>
            setParams([{ name: "searchTerm", value: e.target.value }])
          }
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-primary text-white rounded-full">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchHandler;
