const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    profile_photo_url: { type: String, required: true},
    roles: { type: String, required: true},
})

module.exports = model("users", userSchema);