import * as express from "express";

import { createUserRouter } from "./userRouter";
import { createActorRouter } from "./actorRouter";
import { createEmployeeRouter } from "./employeeRouter";
import { createActionTemplateRouter } from "./actionTemplateRouter";
import { createSchemeRouter } from "./schemeRouter";
import { createBundleRouter } from "./bundleRouter";

const createRouters = (app: express.Express) => {
  app.use("/v1/users", createUserRouter());
  app.use("/v1/employees", createEmployeeRouter());
  app.use("/v1/actors", createActorRouter());
  app.use("/v1/action-templates", createActionTemplateRouter());
  app.use("/v1/schemes", createSchemeRouter());
  app.use("/v1/bundles", createBundleRouter());
};

export default createRouters;
