import { Router } from "express";
import Container from "typedi";
import { EmployeeController } from "../controllers/EmployeeController";

const router = Router();

const getController = (): EmployeeController => {
  return Container.get<EmployeeController>("EmployeeController");
};

export const createEmployeeRouter = () => {
  const controller = getController();

  router.get("", controller.getAll);
  router.post("", controller.create);
  router.get("/:id", controller.getById);
  router.patch("/:id", controller.update);
  router.delete("/:id", controller.delete);

  return router;
};
