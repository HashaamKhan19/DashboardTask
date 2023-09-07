/*eslint-disable*/
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { BiChevronDown } from "react-icons/bi";
import BarChart from "../Charts/BarChart";

const TopCities = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? "bg-darkGray" : "bg-white"
      } flex flex-col h-full rounded-md p-4 shadow-md`}
    >
      <div className="flex flex-row justify-between w-full">
        <p className={`font-Urbanist font-medium text-lg`}>Top Cities</p>
        <p
          className={`flex flex-row font-Urbanist font-light items-center sm:text-md text-sm`}
        >
          for
          <span className="ml-2 font-medium">September 2019</span>
          <BiChevronDown />
        </p>
      </div>

      <div>
        <BarChart />
      </div>
    </div>
  );
};

export default TopCities;
