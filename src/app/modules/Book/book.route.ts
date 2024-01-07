import express, { Router } from "express";
import { BookController } from "./book.controller";
import validateRequest from "../../middleware/validateRequest";
import { BookValidations } from "./book.validation";

const router: Router = express.Router();

router.use(
  "/create-book",
  validateRequest(BookValidations.createBookValidationSchema),
  BookController.createBook,
);

export const BookRoutes = router;
