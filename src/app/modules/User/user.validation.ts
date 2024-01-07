import { z } from "zod";
import { USER_ROLE } from "./user.constant";

const nameSchema = z.object({
  firstName: z.string({
    required_error: "First name is required",
    invalid_type_error: "First name must be string",
  }),
  lastName: z.string({
    required_error: "First name is required",
    invalid_type_error: "First name must be string",
  }),
});

const createUserValidationSchema = z.object({
  body: z.object({
    name: nameSchema,
    userName: z
      .string({
        required_error: "User name is require",
        invalid_type_error: "User name must be string",
      })
      .trim(),
    role: z
      .string({
        invalid_type_error: "Role must be string",
      })
      .optional()
      .default(USER_ROLE.user),
    coverImg: z
      .string({
        required_error: "Cover image is required",
        invalid_type_error: "Cover image url must be string",
      })
      .url({ message: "Invalid url" }),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be string",
      })
      .email({ message: "Invalid email" }),
    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be string",
      })
      .min(8, { message: "Password must be 8 or more characters long" })
      .refine(
        (password) =>
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/.test(password),
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.",
        },
      ),
    status: z
      .string({ invalid_type_error: "Status must be string" })
      .optional()
      .default("active"),
  }),
});

export const UserValidations = {
  createUserValidationSchema,
};
