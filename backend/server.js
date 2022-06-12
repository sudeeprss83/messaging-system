require("dotenv").config();
const express = require("express");
const app = express();

// connecting to mongodb database
require("./configs/mongodb-connection");

// importing routes
const usersRoute = require("./routes/users");
const chatsRoute = require("./routes/chats");
const messagesRoute = require("./routes/messages");

app.use(express.json());

app.set("view engine", "hbs");

// routes
app.use("/users", usersRoute);
app.use("/chats", chatsRoute);
app.use("/messages", messagesRoute);

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
