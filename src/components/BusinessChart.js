import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BusinessChart = ({ data }) => {
  // Count businesses by type
  const typeCount = {};
  data.forEach((item) => {
    typeCount[item.type] = (typeCount[item.type] || 0) + 1;
  });

  // Convert to array and sort by count (descending), then take top 8
  const chartData = Object.entries(typeCount)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // Prepare Chart.js data and options
  const chartJsData = {
    labels: chartData.map((d) => d.type),
    datasets: [
      {
        label: "Number of Businesses",
        data: chartData.map((d) => d.count),
        backgroundColor: "#8884d8",
        borderRadius: 10,
        barThickness: 40,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Top 8 Business Types in Pune" },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 60,
          minRotation: 60,
        },
      },
    },
  };

  return (
    <div className="chart-container" style={{ height: "350px", padding: "1rem" }}>
      <Bar data={chartJsData} options={chartOptions} />
    </div>
  );
};

export default BusinessChart;