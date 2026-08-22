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

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`STHIRA server running on port ${PORT}`);
});