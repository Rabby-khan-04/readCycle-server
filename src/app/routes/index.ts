import express, { Router } from "express";
import { BookRoutes } from "../modules/Book/book.route";
import { UserRoutes } from "../modules/User/user.route";

const router: Router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
