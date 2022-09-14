const { Schema, model } = require("mongoose");

const userSchema = new Schema ({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true,
        miniLength: [6, "Password too short"]
    },

})

module.exports = model("User", userSchema);