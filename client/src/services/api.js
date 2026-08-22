const API_URL = "http://localhost:5000/api";

export async function getActivities() {
  const response = await fetch(`${API_URL}/activities`);

  if (!response.ok) {
    throw new Error("Failed to fetch activities");
  }

  return response.json();
}