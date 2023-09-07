/*eslint-disable*/
import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import links from "./links";
import { AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";

const Sidebar = () => {
  const { isDarkMode } = useTheme();
  const [selectedLink, setSelectedLink] = useState(1);

  const handleLinkClick = (link) => {
    setSelectedLink(link.id);
  };

  return (
    <div
      className={`h-full fixed w-[80px] flex flex-col justify-between py-6
    ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}
  `}
    >
      <div className="flex items-center justify-center h-16 w-full">
        <img
          src="https://avatars.githubusercontent.com/u/72141807?v=4"
          alt="profile"
          className="h-8 w-8 rounded-full"
        />
      </div>

      <div className="flex flex-col space-y-4 items-center">
        {links.map((link) => (
          <div
            key={link.id}
            className={`flex items-center justify-center h-14 w-14 rounded-md group cursor-pointer
            ${
              selectedLink === link.id
                ? "bg-blue text-white w-24 transition-all ease-linear duration-300"
                : ""
            }
              `}
            onClick={() => handleLinkClick(link)}
          >
            {
              <link.icon
                size={18}
                className="group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
            }
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center h-14 w-full">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green cursor-pointer">
          <AiOutlinePlus size={18} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
