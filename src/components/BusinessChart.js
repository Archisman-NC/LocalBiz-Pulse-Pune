import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

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

  return (
    <div className="chart-container" style={{ padding: '1rem' }}>
      <h2 style={{ textAlign: 'center' }}>Top 8 Business Types in Pune</h2>
      {/* <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="type" angle={-30} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" barSize={40} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer> */}
    </div>
  );
};

export default BusinessChart;
