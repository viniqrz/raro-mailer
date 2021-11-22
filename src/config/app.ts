import * as express from "express";
import { errorHandler } from "../middlewares/errorHandler";
import createRouters from "../routers";
import createMiddlewares from "./middlewares";

const createApp = (): express.Express => {
  const app = express();
  createMiddlewares(app);
  createRouters(app);

  app.use(errorHandler);

  return app;
};

export default createApp;
