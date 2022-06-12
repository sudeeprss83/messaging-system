const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    content: { type: String },
    index: { type: Number },
    isMedia: { type: Boolean, default: false },
    mediaUrl: { type: String },
    mediaType: { type: String, enum: ["audio", "video"] },
    chatId: { type: Schema.Types.ObjectId, ref: "Chat" },
  },
  { timestamps: true }
);
const user = mongoose.model("Message", messageSchema);
module.exports = user;
