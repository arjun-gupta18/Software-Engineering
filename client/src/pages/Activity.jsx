import React from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

function Activity() {
  const stats = [
    { label: "Daily movement", value: "8.4 km" },
    { label: "Active minutes", value: "62 min" },
    { label: "Heart rate avg", value: "128 bpm" },
    { label: "Recovery score", value: "87/100" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <Sidebar />
        <main className="flex-1">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-violet-300">Movement</p>
            <h1 className="mt-3 text-3xl font-bold text-white">Activity</h1>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[24px] border border-slate-700 bg-slate-950/70 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                  <p className="mt-3 text-3xl font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Activity;
