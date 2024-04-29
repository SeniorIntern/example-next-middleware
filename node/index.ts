import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { serverConfig } from "./config";
import infoRouter from "./routers/info";
import v1Routes from "./routers/v1Routes";

const app = express();

// middlewares
app.use(cors());
// need cookieParser middleware before we can do anything with cookies
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/status", infoRouter);
app.use("/api/v1", v1Routes);

const { port, uri } = serverConfig;

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => console.log(`Server started on port ${port}...`));
  })
  .catch((err) => {
    console.log(err);
  });
