import express from "express";

const router = express.Router();

router.get("/monster", function (request, repsonse) {
	res.status(200).json({test: "hello"});
});