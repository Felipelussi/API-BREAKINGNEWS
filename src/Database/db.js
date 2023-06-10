import mongoose from "mongoose";

const conectDatabase = () => {
  console.log("Connecting to the database");

  mongoose
    .connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

 export default conectDatabase;
