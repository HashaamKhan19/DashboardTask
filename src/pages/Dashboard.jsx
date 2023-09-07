/*eslint-disable*/
import React from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/Buttons/ThemeToggle";
import LineChart from "../components/Charts/LineChart";
import ActiveUsers from "../components/Dashboard/ActiveUsers";
import TopCities from "../components/Dashboard/TopCities";

const Dashboard = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-row justify-between px-4 py-2 mb-6">
        <p className="font-Urbanist font-semibold text-xl flex-wrap sm:text-3xl">
          My Dashboard
        </p>
        <ThemeToggle />
      </div>

      <div className="pr-6">
        <LineChart />
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-8 pr-6">
        <div className="flex-1">
          <ActiveUsers />
        </div>
        <div className="flex-1">
          <TopCities />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
