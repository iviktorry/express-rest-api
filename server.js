import express from "express";
import { apiRouter } from "./routes/apiRoutes.js";

const PORT = 7000;
const app = express();

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
