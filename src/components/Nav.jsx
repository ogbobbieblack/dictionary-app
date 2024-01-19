/* eslint-disable react/prop-types */

import { FiMoon, FiBook } from "react-icons/fi";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const Nav = ({darkMode, setDarkMode}) => {
  return (
    <nav className="flex items-center justify-between text-3xl py-12">
      <a href="/" className="">
        <FiBook />
      </a>

      <select
        name="font"
        id="font"
        className="text-sm bg-inherit text-inherit p-2 ml-auto mr-4 md:mr-12 capitalize"
      >
        <option value="font-serif">serif</option>
        <option value="font-mono">mono</option>
        <option value="font-sans-serif">sans-serif</option>
      </select>


      <div className="flex items-center justify-center gap-4 text-purple-500">
        <button onClick={() => setDarkMode(!darkMode)}>
          {!darkMode ? <BsToggleOff /> : <BsToggleOn />}
        </button>

        <FiMoon />
      </div>
    </nav>
  );
};

export default Nav;
