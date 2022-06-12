const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, trim: true },
    email: { type: String, unique: true, trim: true },
    profileImage: { type: String, default: null },
  },
  { timestamps: true }
);
const user = mongoose.model("User", userSchema);
module.exports = user;
