import React from "react";

function WorkoutCard({ exercise }) {
  return (
    <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Today</p>
          <h3 className="mt-3 text-2xl font-bold text-white">{exercise.name}</h3>
        </div>
        <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
          {exercise.difficulty}
        </span>
      </div>

      <div className="mt-5 space-y-3 text-sm text-slate-300">
        <p>Muscle group: <span className="font-medium text-white">{exercise.muscle_group}</span></p>
        <p>Focus: <span className="font-medium text-white">Strength + endurance</span></p>
      </div>

      <div className="mt-6 flex gap-3">
        <div className="flex-1 rounded-2xl border border-slate-700 bg-slate-950/70 p-3 text-center">
          <p className="text-slate-400">Sets</p>
          <p className="mt-1 text-xl font-bold text-white">{exercise.sets}</p>
        </div>
        <div className="flex-1 rounded-2xl border border-slate-700 bg-slate-950/70 p-3 text-center">
          <p className="text-slate-400">Reps</p>
          <p className="mt-1 text-xl font-bold text-white">{exercise.reps}</p>
        </div>
      </div>

      <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">
        Complete session
      </button>
    </div>
  );
}

export default WorkoutCard;