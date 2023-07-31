"use strick";

import dotenv from "dotenv";
dotenv.config();
import app from "./src/ver.1/app.js";

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

process.on("SIGINT", () => {
    server.close(() => console.log("Server is closed..."))
});