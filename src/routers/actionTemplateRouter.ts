import { Router } from "express";
import Container from "typedi";
import { ActionTemplateController } from "../controllers/ActionTemplateController";

const router = Router();

const getController = (): ActionTemplateController => {
  return Container.get<ActionTemplateController>("ActionTemplateController");
};

export const createActionTemplateRouter = () => {
  const controller = getController();

  router.get("", controller.getAll);
  router.post("", controller.create);
  router.get("/:id", controller.getById);
  router.patch("/:id", controller.update);
  router.delete("/:id", controller.delete);

  return router;
};
