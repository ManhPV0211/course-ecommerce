"use strick";

import express from "express";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import Database from "./database/connectMongodb.js";
import initAppRoutes from "./routes/initAppRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

Database.getConnectionMongoDB();

initAppRoutes(app);

app.use((req, res, next) => {
    const error = new Error("Router is Not Found...");
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    return res.status(statusCode).json({
        code: `mpv-${statusCode}`,
        mesg: err.message || "Internal Server Error..."
    });
});

export default app;
