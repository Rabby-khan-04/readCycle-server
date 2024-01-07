import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await BookServices.createBookIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Book is created successfully",
    data: result,
  });
});

export const BookController = {
  createBook,
};
