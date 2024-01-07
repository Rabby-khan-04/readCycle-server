import express, { Application, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import router from "./app/routes";

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

app.use("/api/v1", router);

export default app;
