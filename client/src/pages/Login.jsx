import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-[28px] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Welcome back</p>
        <h1 className="mt-4 text-3xl font-bold text-white">Login</h1>
        <div className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Email" />
          <input type="password" className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500" placeholder="Password" />
        </div>
        <Link to="/dashboard" className="mt-6 block w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-center font-semibold text-slate-950">Continue</Link>
        <p className="mt-5 text-center text-sm text-slate-300">
          New here? <Link to="/register" className="text-cyan-300">Create an account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
