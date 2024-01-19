
/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSearch } from "react-icons/fa";


const Search = ({setSearchText}) => {

  const [validWord, setValidWord] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = e.target.search.value;
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${params}`;

    if (!params){
      setValidWord("Please input a valid word");
      return
    }else{
      // fetch data and return data here
      const response = await fetch(URL).then(res => res.json())
      setValidWord('')
      setSearchText(response);
      e.target.search.value = ''
    }

  };
  
  return (
    <form className="relative" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="search"
        id="search"
        className="inline-block w-full rounded-xl px-4 py-3 focus:outline-none border-purple-600 relative text-inherit bg-inherit border-2 outline-2 outline-purple-600"
      />
      <button type="submit">
        <FaSearch className="absolute text-purple-600 text-2xl top-4 bottom-0 right-4" />
      </button>

      <p className="text-red-600 my-2 text-sm text-center">{validWord}</p>
    </form>
  );
};

export default Search;
