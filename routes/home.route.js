import express from "express";
const router = express.Router();

router.get("/", function(req, res) {
	res.send("Server is online");
})

export default router;