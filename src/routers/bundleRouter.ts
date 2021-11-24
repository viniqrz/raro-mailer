import { Router } from "express";
import Container from "typedi";
import { BundleController } from "../controllers/BundleController";
import { ensureAuth } from "../middlewares/ensureAuth";

const router = Router();

const getController = (): BundleController => {
  return Container.get<BundleController>("BundleController");
};

export const createBundleRouter = () => {
  const controller = getController();

  router.get("", ensureAuth, controller.getAll);
  router.post("", ensureAuth, controller.create);
  router.get("/:id", ensureAuth, controller.getById);
  router.patch("/:id", ensureAuth, controller.update);
  router.delete("/:id", ensureAuth, controller.delete);

  return router;
};
