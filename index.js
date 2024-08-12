import express from "express"; // default
import cors from "cors"; // default
import { v4 } from "uuid"; //named import
import productRouter from "./routes/products.routes.js";

// const express = require("express");
// const { v4 } = require("uuid");
const app = express();
// var cors = require("cors");
app.use(cors());
app.use(express.json()); // will aply the middle ware for all the api
const PORT = process.env.PORT || 4000;

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/products", productRouter);
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
