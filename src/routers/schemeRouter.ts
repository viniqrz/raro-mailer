import { Router } from "express";
import Container from "typedi";
import { SchemeController } from "../controllers/SchemeController";
import { ensureAuth } from "../middlewares/ensureAuth";

const router = Router();

const getController = (): SchemeController => {
  return Container.get<SchemeController>("SchemeController");
};

export const createSchemeRouter = () => {
  const controller = getController();

  router.get("", ensureAuth, controller.getAll);
  router.post("", ensureAuth, controller.create);
  router.get("/:id", ensureAuth, controller.getById);
  router.patch("/:id", ensureAuth, controller.update);
  router.delete("/:id", ensureAuth, controller.delete);

  return router;
};
