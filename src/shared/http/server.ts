import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import routes from "./routes";
import { AppError } from "@shared/errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
