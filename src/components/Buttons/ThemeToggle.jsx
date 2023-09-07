/*eslint-disable*/
import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="cursor-pointer mr-4" onClick={toggleTheme}>
      {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
    </div>
  );
};

export default ThemeToggle;
