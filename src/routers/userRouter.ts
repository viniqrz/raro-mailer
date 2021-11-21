import { Router } from "express";
import Container from "typedi";
import { UserController } from "../controllers/UserController";

const router = Router();

const getController = (): UserController => {
  return Container.get<UserController>("UserController");
};

export const createUserRouter = () => {
  const controller = getController();

  router.get("", controller.getAll);
  router.post("", controller.signup);
  router.get("/:id", controller.getById);
  router.patch("/:id", controller.update);
  router.delete("/:id", controller.delete);

  router.post("authenticate", controller.authenticate);

  return router;
};
