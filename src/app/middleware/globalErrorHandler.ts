/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import IErrorResponse from "../interface/errorResponse";
import httpStatus from "http-status";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errorObj: IErrorResponse = {
    statusCode: err.statusCode || httpStatus.BAD_REQUEST,
    message: err.message || "Something went wrong!!",
    errorMessage: err.message || "Something went wrong!!",
    errorDetails: err,
    stack: err.stack || null,
  };

  res.status(errorObj.statusCode).json({
    ...errorObj,
  });
};

export default globalErrorHandler;
