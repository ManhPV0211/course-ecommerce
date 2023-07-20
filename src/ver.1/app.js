"use strick";

import express from "express";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import Database from "./database/connectMongodb.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

Database.getConnectionMongoDB();

app.use((req, res, next) => {
    const error = new Error("Not Found...");
    error.status = 400;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            status: error.status || 500,
            mesg: error.message || "Interval Error Server"
        }
    })
})

export default app;
