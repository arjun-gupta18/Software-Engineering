import React from "react";

function StatCard({ title, value, unit }) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>

      <p className="stat-value">
        {value} {unit}
      </p>
    </div>
  );
}

export default StatCard;