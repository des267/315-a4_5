import express from "express";

// create express server
const app = express();

app.use(express.json());

const port = 3000;

// Configure default route; indicates server is running
app.get("/", );