const express = require("express");
const pool = require("../database");

const router = express.Router();

// Add today's weight
router.post("/", async (req, res) => {
    try {
        const { user_id, weight } = req.body;

        if (!user_id || !weight) {
            return res.status(400).json({
                message: "User ID and weight are required"
            });
        }

        const result = await pool.query(
            `INSERT INTO progress_records (user_id, weight)
             VALUES ($1, $2)
             RETURNING *`,
            [user_id, weight]
        );

        res.status(201).json({
            message: "Weight recorded successfully",
            progress: result.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});


// Get user's progress
router.get("/:userId", async (req, res) => {
    try {
        const { userId } = req.params;

        const result = await pool.query(
            `SELECT progress_id, weight, recorded_date
             FROM progress_records
             WHERE user_id = $1
             ORDER BY recorded_date ASC`,
            [userId]
        );

        res.json(result.rows);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;