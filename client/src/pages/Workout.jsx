import React from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

function Workout() {
  const workouts = [
    { name: "Upper Body Push", time: "40 min", focus: "Chest + shoulders" },
    { name: "Lower Body Strength", time: "50 min", focus: "Legs + core" },
    { name: "HIIT Circuit", time: "25 min", focus: "Cardio + burn" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <Sidebar />
        <main className="flex-1">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Plan</p>
            <h1 className="mt-3 text-3xl font-bold text-white">Workout</h1>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {workouts.map((workout) => (
                <div key={workout.name} className="rounded-[24px] border border-slate-700 bg-slate-950/70 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Session</p>
                  <h2 className="mt-3 text-xl font-semibold text-white">{workout.name}</h2>
                  <p className="mt-3 text-cyan-300">{workout.time}</p>
                  <p className="mt-2 text-slate-300">{workout.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Workout;
