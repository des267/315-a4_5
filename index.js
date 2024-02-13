/**
 * index.js
 *
 * Author: Desmond Stular
 */

import express from "express";
import bodyParser from "body-parser";
import home from "./routes/home.route.js";
import monsters from "./routes/monsters.route.js";
import { connectDB } from "./services/database.service.js";

// create express server
const app = express();
const port = 3000;

// Connect to services
connectDB();

// Setup json parser
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Use home route
app.use("/", home);

// Use monster routes
app.use("/monsters", monsters);

// Configure the listening port for the server
app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});