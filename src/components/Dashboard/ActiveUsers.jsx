/*eslint-disable*/
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { BiChevronDown } from "react-icons/bi";
import activeUsersLinks from "./ActiveUserLinks";
import ProgressBar from "../ProgressBar";

const ActiveUsers = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`${
        isDarkMode ? "bg-darkGray" : "bg-white"
      } flex flex-col h-full rounded-md p-4 shadow-md`}
    >
      <div className="flex flex-row justify-between w-full">
        <p className={`font-Urbanist font-medium text-lg`}>Active Users</p>
        <p
          className={`flex flex-row font-Urbanist font-light items-center sm:text-md text-sm`}
        >
          for
          <span className="ml-2 font-medium">August 2019</span>
          <BiChevronDown />
        </p>
      </div>

      <div className="">
        {activeUsersLinks.map((link) => (
          <div className="flex flex-col space-y-1 mt-6" key={link.id}>
            <div className="flex flex-row gap-4 font-Urbanist">
              <img
                src={link.image}
                alt={link.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p>{link.name}</p>
                <p
                  className={`${
                    isDarkMode ? "text-white" : "text-black"
                  } font-light text-sm`}
                >
                  {link.location}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <ProgressBar percent={link.completion} color={link.color} />
            </div>

            <div className="flex flex-row justify-between font-Urbanist pt-1">
              <p className="text-sm">Professional Level {link.level}</p>
              <p className="text-sm font-semibold">{link.points} Points</p>
            </div>

            <div
              className={`${
                isDarkMode ? "bg-slate-800" : "bg-slate-200"
              } h-px w-full my-2`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveUsers;
