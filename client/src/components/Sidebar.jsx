import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>STHIRA</h2>

      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/workout">Workout</Link>
        </li>

        <li>
          <Link to="/diet">Diet</Link>
        </li>

        <li>
          <Link to="/activity">Activity</Link>
        </li>

        <li>
          <Link to="/progress">Progress</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;