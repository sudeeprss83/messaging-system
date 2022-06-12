const mongoose = require("mongoose");

class Database {
  constructor() {
    this.connect();
  }
  connect = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/messaging-system");
      console.log("database connection established");
    } catch (error) {
      console.log("error", error);
    }
  };
}

module.exports = new Database();
