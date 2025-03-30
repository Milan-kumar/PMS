import express from "express";

const app = express();

//router imports
import healthCheckRouter from "./routes/helathcheck.routes.js"

app.use("/api/v1/healthchcek", healthCheckRouter)

export default app;
