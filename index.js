/* const express = require("express");
const userRoute = require("./src/routes/user.route");
const conectDatabase = require("./src/Database/db"); */

import express from "express";
import conectDatabase from "./src/database/db.js"
import userRoute from "./src/routes/user.route.js"
import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

conectDatabase();

app.use(express.json());

app.use("/user", userRoute);

app.get("/home", (req, res) => {
  const soma = 1 + 1;

  res.json(soma);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
