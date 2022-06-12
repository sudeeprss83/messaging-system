// importing required modules
const express = require("express");
const router = express.Router();
const User = require("../models/user");

// router.post("/", async (req, res) => {
//   try {
//     const { username, email, profileImage } = req.body;
//     const user = await User.create({ username, email, profileImage });
//     return res.status(200).json({ message: "user registered", user: user });
//   } catch (error) {
//     console.log("Error", error);
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     return res.status(200).json({ message: "all users", users: users });
//   } catch (error) {
//     console.log("Error", error);
//   }
// });

router.get('/test', (req,res)=>{
  res.render('chat')
})

// router.get("/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     return res.status(200).json({ message: "users details", user: user });
//   } catch (error) {
//     console.log("Error", error);
//   }
// });



module.exports = router;
