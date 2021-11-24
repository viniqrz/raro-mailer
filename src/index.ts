import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();

import createApp from "./config/app";
import createDatabaseConnection from "./config/database/connect";
import createDependencyInjector from "./config/dependencies/createInjector";
import createServer from "./infra/server/server";
import { startRoutine } from "./runners";

export const start = async () => {
  try {
    await createDatabaseConnection();
    createDependencyInjector();
    const app = createApp();

    createServer(app);
    startRoutine();
  } catch (error) {
    console.error("Fatal error: ", error);
  }
};

start();
