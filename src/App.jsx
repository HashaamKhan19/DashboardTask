import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Components/Layout/Sidebar";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex h-full
    ${isDarkMode ? "bg-lightBlack text-white" : "bg-gray text-black"}
    `}
    >
      <div className="w-[80px] mr-6">
        <Sidebar />
      </div>
      <div className="flex-1 my-6">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
