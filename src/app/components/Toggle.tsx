"use client";
import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

const Toggle = () => {
  //   const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [darkMode, setDarkMode] = useState(false);
  // const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-lightzinc dark:bg-Gray1 h-16 flex justify-between py-2">
      <div
        className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1 dark:border dark:border-white"
        onClick={() => setDarkMode(!darkMode)}
      >
        <FaMoon className="text-white" size={18} />
        <div
          className="absolute bg-white dark:bg-gray-900 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
          style={darkMode ? { left: "2px" } : { right: "2px" }}
        ></div>
        <BsSun className="ml-auto text-yellow-400" size={20} />
      </div>
    </div>
  );
};

export default Toggle;
