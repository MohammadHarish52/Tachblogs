import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());
app.use(
  bodyParser.json({
    extended: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server is running  on port number: ", PORT);
});

const USER = process.env.USER;

const PASSWORD = process.env.PASSWORD;

Connection(USER, PASSWORD);
