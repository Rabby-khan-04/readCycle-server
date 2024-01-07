import express, { Router } from "express";
import { BookRoutes } from "../modules/Book/book.route";

const router: Router = express.Router();

const moduleRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;