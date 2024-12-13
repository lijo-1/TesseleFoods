"use client";
import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";

const SearchBar = () => {
  const words = ["Masala", "Soaps", "Malt", "Spices", "Tea"]; // Words to animate
  const [currentWord, setCurrentWord] = useState(words[0]); // Initial word
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length); // Cycle through words
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);

  useEffect(() => {
    setCurrentWord(words[index]); // Update the current word
  }, [index, words]);

  return (
    <div className="bg-white rounded-[12px] border-[#E2E2E7] border mt-[32px] flex justify-between items-center col-start-1 col-end-5">
      <div className="flex items-center text-[#02060C] opacity-60  border-gray-300 w-full ">
        <input
          type="text"
          placeholder={`Search for "${currentWord}"`}
          className="p-[13px] leading-[18px] tracking-[-0.35px] font-proximaregular text-[16px] rounded-[12px] w-full focus:outline-none border-none"
        />
      </div>

      <GoSearch fill="black" className="mr-[10px]" size={20} />
    </div>
  );
};

export default SearchBar;
