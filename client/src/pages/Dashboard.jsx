import React from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import WorkoutCard from "../components/WorkoutCard";
import ActivityCard from "../components/ActivityChart";
import ProgressChart from "../components/PorgressChart";

function Dashboard() {

  const exercise = {
    name: "Bench Press",
    muscle_group: "Chest",
    difficulty: "Beginner",
    sets: 3,
    reps: 10
  };

  const activity = {
    steps: 7500,
    water: 2.2,
    sleep: 7.5,
    workout_minutes: 45
  };

  const progressData = [
    { date: "Week 1", weight: 72 },
    { date: "Week 2", weight: 71.5 },
    { date: "Week 3", weight: 71 },
    { date: "Week 4", weight: 70.4 },
    { date: "Week 5", weight: 70 }
  ];

  return (
    <>
      <Navbar />

      <div className="layout">

        <Sidebar />

        <main className="dashboard">

          <h1>Dashboard</h1>
          <p>Track your fitness journey with STHIRA.</p>

          <div className="stats">

            <StatCard
              title="Steps"
              value="7,500"
              unit="steps"
            />

            <StatCard
              title="Workout"
              value="45"
              unit="min"
            />

            <StatCard
              title="Water"
              value="2.2"
              unit="L"
            />

            <StatCard
              title="Sleep"
              value="7.5"
              unit="hrs"
            />

          </div>

          <ProgressChart data={progressData} />

          <section>
            <h2>Today's Workout</h2>
            <WorkoutCard exercise={exercise} />
          </section>

          <section>
            <ActivityCard activity={activity} />
          </section>

        </main>

      </div>
    </>
  );
}

export default Dashboard;