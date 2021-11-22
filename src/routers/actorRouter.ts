import { Router } from "express";
import Container from "typedi";
import { ActorController } from "../controllers/ActorController";
import { ensureAuth } from "../middlewares/ensureAuth";

const router = Router();

const getController = (): ActorController => {
  return Container.get<ActorController>("ActorController");
};

export const createActorRouter = () => {
  const controller = getController();

  router.get("", ensureAuth, controller.getAll);
  router.post("", ensureAuth, controller.create);
  router.get("/:id", ensureAuth, controller.getById);
  router.patch("/:id", ensureAuth, controller.update);
  router.delete("/:id", ensureAuth, controller.delete);

  return router;
};
