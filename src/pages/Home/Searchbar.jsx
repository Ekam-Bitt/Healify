// components/Home/SearchBar.jsx
import React from "react";
import SearchIcon from "../../assets/search icon.svg";

const SearchBar = () => {
  return (
    <div className="px-10">
      <form>
        <input
          type="text"
          placeholder="Condition/Doctor/Procedure | City/State/Pin-Code | Insurance Carrier & Plan"
          className="w-[1240px] h-[60px] relative text-xl text-center font-semibold border rounded-[12px_0px_0px_12px] border-solid border-black bg-white"
        />
        <button
          type="submit"
          className="w-[73px] h-[60px] px-4 py-2 absolute border justify-between rounded-[0px_12px_12px_0px] border-solid border-black bg-[#ffe6e2]"
        >
          <img src={SearchIcon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
