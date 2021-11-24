import * as cron from "node-cron";
import { sendPendingEmails } from "./jobs/sendPendingEmails";

export function startRoutine() {
  cron.schedule("10 * * * * *", sendPendingEmails);
}
