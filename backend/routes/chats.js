// importing required modules
const express = require("express");
const router = express.Router();
const Chat = require("../models/chat");

router.post("/", async (req, res) => {
  try {
    const { chatName, users, isGroup, lastMessage } = req.body;
    const chat = await Chat.create({
      chatName,
      users,
      isGroup,
      lastMessage,
    });
    return res.status(200).json({ message: "chat created", chat: chat });
  } catch (error) {
    console.log("Error", error);
  }
});

router.get("/", async (req, res) => {
  try {
    const chats = await Chat.find().populate("users").sort({ createdAt: -1 });
    return res.status(200).json({ message: "all chats", chats: chats });
  } catch (error) {
    console.log("Error", error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    return res.status(200).json({ chat: "chat details", chat: chat });
  } catch (error) {
    console.log("Error", error);
  }
});

module.exports = router;
