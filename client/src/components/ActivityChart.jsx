import React from "react";

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">

      <h3>Today's Activity</h3>

      <p>
        Steps: {activity.steps}
      </p>

      <p>
        Water: {activity.water} L
      </p>

      <p>
        Sleep: {activity.sleep} hours
      </p>

      <p>
        Workout: {activity.workout_minutes} minutes
      </p>

    </div>
  );
}

export default ActivityCard;    