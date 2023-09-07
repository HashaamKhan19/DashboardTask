/*eslint-disable*/
import React from "react";
import LineChart from "../Charts/LineChart";
import ActiveUsers from "./ActiveUsers";
import TopCities from "./TopCities";
import ThemeToggle from "../Buttons/ThemeToggle";

const Dashboard = () => {
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
