import express, { Application, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import router from "./app/routes";
import routeNotFound from "./app/middleware/routeNotFound";
import globalErrorHandler from "./app/middleware/globalErrorHandler";

const app: Application = express();

// parsers
app.use(cors());
app.use(express.json());

// server routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Hello World",
  });
});

// api not found handler
app.use(routeNotFound);

// Global error handler
app.use(globalErrorHandler);

export default app;
