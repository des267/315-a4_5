import express from "express";
import bodyParser from "body-parser";
import router from "./routes/monsters.route.js";
import monsters from "./routes/monsters.route.js";
import { connectDB } from "./database/database.js";

// create express server
const app = express();
const port = 3000;

// Connect to database
connectDB();

// Setup json parser
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Use monster routes
app.use("/monsters", monsters);

// Configure the listening port for the server
app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});