const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    chatName: { type: String, trim: true },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    isGroup: { type: Boolean, default: false },
    lastMessage: { type: Schema.Types.ObjectId, ref: "Message", default: null },
  },
  { timestamps: true }
);
const user = mongoose.model("Chat", chatSchema);
module.exports = user;
