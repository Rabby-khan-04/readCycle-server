import catchAsync from "../../utils/catchAsync";
import { BookServices } from "./book.service";

const createBook = catchAsync(async () => {
  BookServices.createBookIntoDB();
});

export const BookController = {
  createBook,
};
