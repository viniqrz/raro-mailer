import * as express from "express";

import { createUserRouter } from "./userRouter";
import { createActorRouter } from "./actorRouter";
import { createEmployeeRouter } from "./employeeRouter";
import { createActionTemplateRouter } from "./actionTemplateRouter";
import { createSchemeRouter } from "./schemeRouter";
import { createBundleRouter } from "./bundleRouter";

const createRouters = (app: express.Express) => {
  app.use("/users", createUserRouter());
  app.use("/employees", createEmployeeRouter());
  app.use("/actors", createActorRouter());
  app.use("/action-templates", createActionTemplateRouter());
  app.use("/schemes", createSchemeRouter());
  app.use("/bundles", createBundleRouter());
};

export default createRouters;
