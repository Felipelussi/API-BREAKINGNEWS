
import express from "express";
import conectDatabase from "./src/database/db.js"
import dotenv from "dotenv";

import userRoute from "./src/routes/user.route.js"
import authRoute from "./src/routes/auth.route.js"



dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

conectDatabase();

app.use(express.json());

app.use("/user", userRoute);
app.use("/auth", authRoute)

app.get("/home", (req, res) => {
  const soma = 1 + 1;

  res.json(soma);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
