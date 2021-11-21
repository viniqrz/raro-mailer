import { Router } from "express";
import Container from "typedi";
import { UserController } from "../controllers/UserController";
import { ensureAuth } from "../middlewares/ensureAuth";

const router = Router();

const getController = (): UserController => {
  return Container.get<UserController>("UserController");
};

export const createUserRouter = () => {
  const controller = getController();

  router.get("", ensureAuth, controller.getAll);
  router.post("", controller.signup);
  router.get("/:id", ensureAuth, controller.getById);
  router.patch("/:id", ensureAuth, controller.update);
  router.delete("/:id", ensureAuth, controller.delete);

  router.post("authenticate", controller.authenticate);

  return router;
};
