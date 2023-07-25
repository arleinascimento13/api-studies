import "express-async-errors";
import express, { NextFunction, Response, request, response } from "express";
import { routes } from "./routes/index";
import { AppError } from "./erros/app.error";

const app = express();

app.use(express.json());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        err: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      err: 500,
      message: `Internal Server Error! - ${err.message}`,
    });
  }
);
// midaware de erro

app.listen(3333, () => console.log("Server is running in port 3333 🚀"));
