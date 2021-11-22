import { Router } from "express";
import Container from "typedi";
import { EmployeeController } from "../controllers/EmployeeController";
import { ensureAuth } from "../middlewares/ensureAuth";

const router = Router();

const getController = (): EmployeeController => {
  return Container.get<EmployeeController>("EmployeeController");
};

export const createEmployeeRouter = () => {
  const controller = getController();

  router.get("", ensureAuth, controller.getAll);
  router.post("", ensureAuth, controller.create);
  router.get("/:id", ensureAuth, controller.getById);
  router.patch("/:id", ensureAuth, controller.update);
  router.delete("/:id", ensureAuth, controller.delete);

  return router;
};
