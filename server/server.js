const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "STHIRA API is running"
    });
});

const progressRoutes = require("./routes/progressRoutes");

app.use("/api/progress", progressRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`STHIRA server running on port ${PORT}`);
});


const pool = require("./database");

pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected:", result.rows);
  }
});