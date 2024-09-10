import { useState } from "react";
import "./App.css";

function App() {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [store, setStore] = useState([]);
  const [output, setOutput] = useState([]);
  const [letterCount, setLetterCount] = useState({
    letter: "",
    count: 0,
  });

  const handleAlphabet = (alpha) => {
    setStore([...store, alpha]);
    if (letterCount.letter === alpha) {
      setLetterCount({
        letter: alpha,
        count: letterCount.count + 1,
      });
    } else {
      setLetterCount({
        letter: alpha,
        count: 1,
      });
    }

    if (letterCount.letter === alpha && letterCount.count === 2) {
      output.pop();
      output.pop();
      setOutput([...output, "_"]);
      setLetterCount({
        letter: "",
        count: 0,
      });
    } else {
      setOutput([...output, alpha]);
    }
  };

  const handleClear = () => {
    setStore([]);
    setOutput([]);
    setLetterCount({
      letter: "",
      count: 0,
    });
  }

  return (
    <div className="w-[800px] mx-auto">
      <h1 className="text-[24px] font-semibold underline">
        Alphabet Tile Interaction
      </h1>

      <div className="flex gap-[20px] my-[20px]">
        <div className="w-4/5 mx-auto ">
          <div className="flex h-[200px] border  rounded-lg shadow-lg p-5 mb-[20px]">
            {output.map((alpha, i) => {
              return (
                <div key={i} className="">
                  {alpha}
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-[20px]  w-[600px]  mx-auto">
        {alphabets.map((alpha, i) => {
          return (
            <div
              key={i}
              className="bg-red-300 px-[16px] py-[10px] text-white font-bold rounded-md shadow-lg hover:bg-red-400 cursor-pointer"
              onClick={() => handleAlphabet(alpha)}
            >
              {alpha}
            </div>
          );
        })}
      </div>
        </div>
        <div className="w-1/5">
          <button onClick={()=> handleClear()} className="rounded-md bg-red-600 text-white py-2 px-6">All Clear</button>
        </div>
      </div>

     
    </div>
  );
}

export default App;
