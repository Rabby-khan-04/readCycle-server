/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import catchAsync from "../utils/catchAsync";

const validateRequest = (schema: ZodSchema) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync({
      body: req.body,
    });

    if (result.success) {
      next();
    } else {
      next(result.error);
    }
  });
};

export default validateRequest;
