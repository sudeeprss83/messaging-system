// importing required modules
const express = require("express");
const router = express.Router();
const Message = require("../models/message");

router.post("/", async (req, res) => {
  try {
    const { sender, content, index, isMedia, mediaUrl, mediaType, chatId } =
      req.body;
    const message = await Message.create({
      sender,
      content,
      index,
      isMedia,
      mediaUrl,
      mediaType,
      chatId,
    });
    return res
      .status(200)
      .json({ message: "message sent", message: message });
  } catch (error) {
    console.log("Error", error);
  }
});

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    return res
      .status(200)
      .json({ message: "all messages", messages: messages });
  } catch (error) {
    console.log("Error", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    return res
      .status(200)
      .json({ message: "messages details", message: message });
  } catch (error) {
    console.log("Error", error);
  }
});

module.exports = router;
