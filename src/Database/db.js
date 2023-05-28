const mongoose = require("mongoose");

const conectDatabase = () => {
  console.log("Connecting to the database");

  mongoose
    .connect(
      "mongodb+srv://felipelussi01:souomapa201@cluster0.harxvjh.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = conectDatabase;
