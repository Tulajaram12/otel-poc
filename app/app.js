const express = require("express");
const pino = require("pino");

const logger = pino();

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {

    logger.info("Home endpoint called");

    res.send("OTEL Demo Running");
});

app.get("/users", async (req, res) => {

    logger.info("Users endpoint");

    await sleep(500);

    res.json({
        users: [
            "John",
            "Alice",
            "Bob"
        ]
    });

});

app.get("/orders", async (req, res) => {

    logger.info("Orders endpoint");

    await sleep(1000);

    res.json({
        orders: [
            1001,
            1002,
            1003
        ]
    });

});

app.get("/payment", async (req, res) => {

    logger.info("Payment endpoint");

    await sleep(2000);

    const random = Math.random();

    if (random > 0.5) {

        logger.error("Payment Failed");

        return res.status(500).json({
            message: "Payment Failed"
        });
    }

    logger.info("Payment Success");

    res.json({
        message: "Payment Successful"
    });

});

function sleep(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}

app.listen(PORT, () => {

    console.log(`Application Running on ${PORT}`);

});
