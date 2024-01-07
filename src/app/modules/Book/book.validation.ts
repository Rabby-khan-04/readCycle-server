import { z } from "zod";

// Book creation validation schema
const createBookValidationSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Book title is required",
        invalid_type_error: "Book title must be string",
      })
      .trim(),
    cover: z
      .string({
        required_error: "Cover image is required",
        invalid_type_error: "Cover image url must be string",
      })
      .url({ message: "Invalid image url" }),
    subtitle: z
      .string({ invalid_type_error: "Subtitle must be string" })
      .optional(),
    ISBN: z.string({
      required_error: "ISBN is required",
      invalid_type_error: "ISBN must be string",
    }),
    publisher: z.string({
      required_error: "Publisher is required",
      invalid_type_error: "Publisher name must be string",
    }),
    format: z.string({
      required_error: "Book format is required",
      invalid_type_error: "Book format must be string",
    }),
    authorsAndContributors: z.string({
      required_error: "Authors and contributore is required",
      invalid_type_error: "Authors and contributore must be string",
    }),
    slug: z.string({
      required_error: "Slug is required",
      invalid_type_error: "Slug must be string",
    }),
    status: z
      .string({
        invalid_type_error: "Status must be string",
      })
      .optional()
      .default("active"),
    isDeleted: z
      .boolean({
        invalid_type_error: "Status must be boolean",
      })
      .optional()
      .default(false),
    year: z.number({
      required_error: "Book publish year is required",
      invalid_type_error: "Book publish year must be number",
    }),
    nunberOfPages: z.number({
      required_error: "Number of pages is required",
      invalid_type_error: "Number of pages must be number",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be number",
    }),
  }),
});

export const BookValidations = {
  createBookValidationSchema,
};
