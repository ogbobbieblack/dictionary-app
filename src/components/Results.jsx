/* eslint-disable react/prop-types */
import { FaPlay } from "react-icons/fa";

const Results = ({searchText}) => {
 

  const play = (url) => {
    new Audio(url).play()
  }
  return (
    <div className="py-12 px-4 md:px-12">
      {!searchText ? (
        ""
      ) : (
        <div>
          <section className="flex items-center justify-between">
            <h1 className="flex flex-col ">
              <span className="inline-block text-4xl font-semibold">
                {searchText[searchText.length - 1].word}
              </span>
              <span className="inline-block text-md font-semibold">
                {searchText[searchText.length - 1].phonetic}
              </span>
            </h1>

            <button
              type="play"
              onClick={() => play(searchText[searchText.length - 1].phonetics[0].audio)}
              className=" justify-center bg-purple-600 text-3xl p-4 text-white flex items-center rounded-full"
            >
              <FaPlay />
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default Results;
