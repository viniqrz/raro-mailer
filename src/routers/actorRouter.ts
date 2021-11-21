import { Router } from "express";
import Container from "typedi";
import { ActorController } from "../controllers/ActorController";

const router = Router();

const getController = (): ActorController => {
  return Container.get<ActorController>("ActorController");
};

export const createActorRouter = () => {
  const controller = getController();

  router.get("", controller.getAll);
  router.post("", controller.create);
  router.get("/:id", controller.getById);
  router.patch("/:id", controller.update);
  router.delete("/:id", controller.delete);

  return router;
};
