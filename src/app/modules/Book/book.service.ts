import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBookIntoDB = async (payLoad: IBook) => {
  const result = await Book.create(payLoad);

  return result;
};

export const BookServices = {
  createBookIntoDB,
};
