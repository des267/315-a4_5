import express from "express";
import bodyParser from "body-parser";

// create express server
const app = express();

// Setup json parser
app.use(bodyParser.json());

const port = 3000;

// Configure default route; indicates server is running
app.get("/", function (request, response) {
	response.send("Server is online");
});


// Configure the listening port for the server
app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});