import express from "express";
import { startups } from "./data/data.js";

const homePageText = {
  message: "Welcome to Startups Planet REST API!",
  endpoints: {
    all_destinations: "/api",
  },
};

const PORT = 7000;
const app = express();

app.get("/", (req, res) => {
  res.json(homePageText);
});

app.get("/api", (req, res) => {
  res.json(startups);
});

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
