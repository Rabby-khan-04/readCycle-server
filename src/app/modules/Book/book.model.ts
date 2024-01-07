import { Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: [true, "Book title is required"],
    unique: true,
  },
  cover: { type: String, required: [true, "Book cover image is required"] },
  subtitle: { type: String },
  ISBN: { type: String, required: [true, "ISBN is required"] },
  publisher: { type: String, required: [true, "Publisher is required"] },
  format: { type: String, required: [true, "Book format is required"] },
  authorsAndContributors: {
    type: String,
    required: [true, "Authors and contributors is required"],
  },
  slug: { type: String, required: [true, "Slug is required"] },
  status: { type: String, default: "active" },
  isDeleted: { type: Boolean, default: false },
  year: { type: Number, required: [true, "Year is required"] },
  nunberOfPages: {
    type: Number,
    required: [true, "Number of pages is required"],
  },
  description: { type: String, required: [true, "Description is required"] },
});
