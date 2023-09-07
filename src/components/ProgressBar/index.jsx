/*eslint-disable*/
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const ProgressBar = ({ percent, color }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-full h-2 rounded ${
        isDarkMode ? "bg-lightBlack" : "bg-slate-200"
      }`}
    >
      <div
        className={`h-full rounded bg-${color}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
