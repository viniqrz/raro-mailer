import { Router } from "express";
import Container from "typedi";
import { ActionTemplateController } from "../controllers/ActionTemplateController";
import { ensureAuth } from "../middlewares/ensureAuth";

const router = Router();

const getController = (): ActionTemplateController => {
  return Container.get<ActionTemplateController>("ActionTemplateController");
};

export const createActionTemplateRouter = () => {
  const controller = getController();

  router.get("", ensureAuth, controller.getAll);
  router.post("", ensureAuth, controller.create);
  router.get("/:id", ensureAuth, controller.getById);
  router.patch("/:id", ensureAuth, controller.update);
  router.delete("/:id", ensureAuth, controller.delete);

  return router;
};
