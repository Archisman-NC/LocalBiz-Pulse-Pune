import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  { area: "Koregaon", restaurants: 12, salons: 8 },
  { area: "Baner", restaurants: 18, salons: 10 },
  { area: "Hadapsar", restaurants: 10, salons: 6 },
  { area: "Viman Nagar", restaurants: 14, salons: 9 },
];

const BusinessChart = () => {
  return (
    <div className="chart-container">
      <h2>Business Distribution by Area</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="area" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="restaurants" fill="#8884d8" />
          <Bar dataKey="salons" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BusinessChart;

