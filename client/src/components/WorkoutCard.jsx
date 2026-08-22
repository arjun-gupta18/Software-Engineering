import React from "react";

function WorkoutCard({ exercise }) {
  return (
    <div className="workout-card">

      <h3>{exercise.name}</h3>

      <p>
        Muscle Group: {exercise.muscle_group}
      </p>

      <p>
        Difficulty: {exercise.difficulty}
      </p>

      <div className="workout-details">
        <span>{exercise.sets} Sets</span>
        <span>{exercise.reps} Reps</span>
      </div>

      <button>
        Complete
      </button>

    </div>
  );
}

export default WorkoutCard;