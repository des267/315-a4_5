/**
 * monster.model.js
 *
 * Model object used by Mongoose
 */

import mongoose from "mongoose";

const MonsterSchema = new mongoose.Schema(
    {
        "id": {type: Number, required: true},
        "name": {type: String, required: true},
        "username": String,
        "email": String,
        "address": {
            "street": String,
            "suite": String,
            "city": String,
            "zipcode": String,
            "geo": {
                "lat": Number,
                "lng": Number
            }
        },
        "phone": String,
        "website": String,
        "company": {
            "name": String,
            "catchPhrase": String,
            "bs": String
        },
        "image_url": String
    },
    {timestamps: true, strictQuery: true}
);

const Monster = mongoose.model("Monster", MonsterSchema);
export default Monster;