import express, { Application, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Hello World",
  });
});

export default app;
