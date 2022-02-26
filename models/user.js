const mongoose = require("mongoose");

const conn = require("../middleware/connection");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true,
    }
);

module.exports = conn.dropgodb.model("User", userSchema);