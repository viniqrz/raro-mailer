import { Router } from "express";
import Container from "typedi";
import { SchemeController } from "../controllers/SchemeController";

const router = Router();

const getController = (): SchemeController => {
  return Container.get<SchemeController>("SchemeController");
};

export const createSchemeRouter = () => {
  const controller = getController();

  router.get("", controller.getAll);
  router.post("", controller.create);
  router.get("/:id", controller.getById);
  router.patch("/:id", controller.update);
  router.delete("/:id", controller.delete);

  return router;
};
