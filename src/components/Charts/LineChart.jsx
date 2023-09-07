import ReactApexChart from "react-apexcharts";
import { useTheme } from "../../context/ThemeContext";

const colors = ["#588CF3", "#29CB97", "#B558F6", "#FEC400"];
const series = [
  {
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    data: [11, 32, 45, 32, 34, 52, 41],
  },
  {
    data: [10, 20, 30, 40, 50, 60, 70],
  },
  {
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

const labels = [
  "Jan 2023",
  "Feb 2023",
  "Mar 2023",
  "Apr 2023",
  "May 2023",
  "Jun 2023",
  "Jul 2023",
  "Aug 2023",
  "Sep 2023",
  "Oct 2023",
  "Nov 2023",
  "Dec 2023",
];

const lineColor = "#588CF3";

const LineChart = () => {
  const { isDarkMode } = useTheme();

  const state = {
    series: series,
    options: {
      colors: colors,
      chart: {
        type: "area",
        height: 300,
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: { enabled: false },
      grid: {
        show: true,
        borderColor: "#c4ceee",
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },

      markers: {
        size: 0,
        colors: lineColor,
        strokeColors: isDarkMode ? "white" : "black",
        strokeWidth: 2,
      },

      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: [lineColor],
        width: 3,
        dashArray: 0,
      },

      title: { show: false },
      subtitle: { show: false },
      labels: labels,
      xaxis: {
        labels: {
          style: {
            colors: isDarkMode ? "white" : "black",
            fontSize: "12px",
            fontFamily: "Urbanist",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        opposite: false,
        labels: {
          style: {
            colors: isDarkMode ? "white" : "black",
            fontSize: "14px",
            fontFamily: "Urbanist",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
    },
  };

  return (
    <div
      className={`rounded-lg shadow-md p-4
    ${isDarkMode ? "bg-darkGray" : "bg-white"}
    `}
    >
      <div className="flex flex-row mb-8">
        <p className={`text-md${isDarkMode ? "text-white" : "text-black"}`}>
          Total Points
        </p>
      </div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={250}
      />
    </div>
  );
};

export default LineChart;
