import { Router } from "express";
import Container from "typedi";
import { BundleController } from "../controllers/BundleController";

const router = Router();

const getController = (): BundleController => {
  return Container.get<BundleController>("BundleController");
};

export const createBundleRouter = () => {
  const controller = getController();

  router.get("", controller.getAll);
  router.post("", controller.create);
  router.get("/:id", controller.getById);
  router.patch("/:id", controller.update);
  router.delete("/:id", controller.delete);

  return router;
};
