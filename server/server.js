import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
dotenv.config();

import notFoundMiddleware from "./middlewares/notFound.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";
import authenticateUser from "./middlewares/auth.js";
//db
import { connectDB } from "./db/connect.js";

//routes
import authRouter from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

app.use("/auth", authRouter);

app.use("/jobs", authenticateUser, jobRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    app.listen(process.env.PORT, () => {
      console.log(`tatakaye ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
