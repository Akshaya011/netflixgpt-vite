import React from "react";
import lang from "../Utils/languageConstant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
    const langkey = useSelector(store=> store.config.lang);
  return (
    <div className="pt-48 justify-center flex">
      <form className="bg-black w-1/2 p-2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langkey].gptsearchplaceholder}
          className="col-span-9 p-2 rounded-lg"
        />
        <button className="bg-red-700 col-span-3 py-2 px-4 rounded-lg mx-2 text-white text-lg">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
