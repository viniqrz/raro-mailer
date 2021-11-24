import * as cron from "node-cron";
import { sendPendingEmails } from "./jobs/sendPendingEmails";

export function startRoutine() {
  // INTERVAL IS SHORT FOR PRESENTATION MATTERS
  cron.schedule("10,20,30,40,50 * * * * *", sendPendingEmails);
}
