import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import ProgressChart from "../components/PorgressChart";

function Progress() {
    const [weight, setWeight] = useState("");
    const [progressData, setProgressData] = useState([]);

    const userId = 1; // temporary; later get this from logged-in user

    useEffect(() => {
        fetch(`http://localhost:5000/api/progress/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                const formattedData = data.map((item) => ({
                    date: item.recorded_date,
                    weight: Number(item.weight)
                }));

                setProgressData(formattedData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch(
            "http://localhost:5000/api/progress",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: userId,
                    weight: weight
                })
            }
        );

        const data = await response.json();

        if (response.ok) {
            alert("Weight recorded successfully!");
            setWeight("");

            // Refresh chart
            const updatedResponse = await fetch(
                `http://localhost:5000/api/progress/${userId}`
            );

            const updatedData = await updatedResponse.json();

            setProgressData(
                updatedData.map((item) => ({
                    date: item.recorded_date,
                    weight: Number(item.weight)
                }))
            );
        } else {
            alert(data.message);
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">

            <Navbar />

            <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">

                <Sidebar />

                <main className="flex-1">

                    <div className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-6">

                        <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
                            Milestones
                        </p>

                        <h1 className="mt-3 text-3xl font-bold text-white">
                            Progress
                        </h1>

                        <form onSubmit={handleSubmit} className="mt-6 flex gap-3">

                            <input
                                type="number"
                                step="0.1"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="Enter today's weight"
                                className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white"
                                required
                            />

                            <button
                                type="submit"
                                className="rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 font-semibold text-slate-950"
                            >
                                Record Weight
                            </button>

                        </form>

                        <div className="mt-8">
                            <ProgressChart data={progressData} />
                        </div>

                    </div>

                </main>

            </div>

        </div>
    );
}

export default Progress;