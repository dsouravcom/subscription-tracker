const express = require("express");
require('dotenv').config();
const cors = require("cors");
const mongoose = require("mongoose");
const coockieParser = require('cookie-parser');

const router = require("./routes/routes.js");

const app = express();
const port = 8000;

app.use(cors({credentials: true, origin: "http://localhost:3000"}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(coockieParser());

// connection to database
try {
  mongoose.connect(process.env.DATABASE_URL);
  console.log("Database connected successfully");
} catch {
  console.log("Error in connecting to database");
}

app.use("/api/", router);
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
