const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: String,
    name: String,
    password: String,
    mob_no: String,
    dob: String,
  }
);

const userModel = mongoose.model("Registered_User", UserSchema);

module.exports = { userModel };
