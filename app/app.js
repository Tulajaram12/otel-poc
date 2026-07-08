const express = require("express");

const app = express();

const PORT = 3000;

// Home
app.get("/", (req, res) => {
    res.send("🚀 OpenTelemetry Demo Application");
});

// Users API
app.get("/users", async (req, res) => {

    await sleep(1000);

    res.json({
        status: "success",
        users: [
            {
                id: 1,
                name: "John"
            },
            {
                id: 2,
                name: "Alice"
            },
            {
                id: 3,
                name: "Bob"
            }
        ]
    });

});

// Orders API
app.get("/orders", async (req, res) => {

    await sleep(2000);

    res.json({
        status: "success",
        orders: [
            {
                id: 101,
                amount: 500
            },
            {
                id: 102,
                amount: 850
            }
        ]
    });

});

// Error API
app.get("/error", async (req, res) => {

    await sleep(500);

    throw new Error("Something went wrong!");

});

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

// Global Error Handler
app.use((err, req, res, next) => {

    console.error(err.message);

    res.status(500).json({
        status: "error",
        message: err.message
    });

});

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
