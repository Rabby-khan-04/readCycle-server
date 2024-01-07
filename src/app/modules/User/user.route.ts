import express, { Router } from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { UserValidations } from "./user.validation";

const router: Router = express.Router();

router.post(
  "/create-user",
  validateRequest(UserValidations.createUserValidationSchema),
  UserController.createUser,
);

export const UserRouter = router;
