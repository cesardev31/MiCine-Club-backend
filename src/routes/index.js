import { Router } from "express";
import usersRoutes from "./user.routes.js";
import loginUser from "./login.routes.js";

export const routerApi = (app) => {
  const router = Router();
  app.use("/api/v1", router);

  router.use("/users", usersRoutes);
  router.use("/login", loginUser);
};
