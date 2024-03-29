/**
 * database.service.js
 *
 * Author: Desmond Stular
 */

import mongoose from "mongoose";

mongoose.set('strictQuery', true);

export const connectDB = async () => {
	//const url = 'mongodb://localhost:27017/lab4';
	try {
		const connection = await mongoose.connect(process.env.DATABASE_URL, {dbName: "lab45"});
		console.log("Database connected");
	} catch (e) {
		console.log("Could not connect");
	}
};