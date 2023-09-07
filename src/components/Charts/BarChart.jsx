import ReactApexChart from "react-apexcharts";
import { useTheme } from "../../context/ThemeContext";

const colors = ["#588CF3", "#29CB97", "#B558F6", "#FEC400"];

const labels = [""];

const lineColor = "#588CF3";

const data = [
  {
    name: "Copenhagen, Denmark",
    percentage: 5,
    color: "green",
  },
  {
    name: "New York, USA",
    percentage: 38,
    color: "blue",
  },
  {
    name: "London, UK",
    percentage: 73,
    color: "yellow",
  },
  {
    name: "Berlin, Germany",
    percentage: 17,
    color: "purple",
  },
];

const BarChart = () => {
  const { isDarkMode } = useTheme();

  const state = {
    series: [
      {
        data: [
          {
            x: "",
            y: 10,
            fillColor: "#B558F6",
            strokeColor: "#B828F6",
          },
          {
            x: "",
            y: 18,
            fillColor: "#29CB97",
            strokeColor: "#22EB97",
          },
          {
            x: "",
            y: 13,
            fillColor: "#588CF3",
            strokeColor: "#525CF3",
          },
          {
            x: "",
            y: 2,
            fillColor: "#FEC400",
            strokeColor: "#FAE400",
          },
        ],
      },
    ],
    options: {
      colors: colors,
      chart: {
        type: "bar",
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
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
        width: 2,
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
      className={`rounded-lg p-4
    ${isDarkMode ? "bg-darkGray" : "bg-white"}
    `}
    >
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={200}
      />

      <div className="flex flex-col p-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-row gap-4">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center bg-${item.color}`}
            >
              <div className="w-4 h-4 rounded-full bg-white" />
            </div>

            <div className="flex flex-row font-Urbanist justify-between w-full">
              <span className="text-md font-medium">{item.name}</span>
              <span className="text-md font-semibold">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
