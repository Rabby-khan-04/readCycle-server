import { Response } from "express";

interface IResponse<T> {
  success?: boolean;
  message: string;
  statusCode: number;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data: T;
}

const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  res.status(data.statusCode).json({
    success: true,
    ...data,
  });
};

export default sendResponse;
