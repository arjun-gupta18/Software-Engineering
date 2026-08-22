import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function ProgressChart({ data }) {
  return (
    <div className="progress-chart">

      <h2>Weight Progress</h2>

      <ResponsiveContainer width="100%" height={300}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="weight"
            strokeWidth={2}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ProgressChart;