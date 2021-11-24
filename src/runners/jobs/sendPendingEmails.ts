import { Container } from "typedi";
import { ActionService } from "../../services/ActionService";
import { BundleService } from "../../services/BundleService";
import { Actor } from "../../models/ActorEntity";
import { Employee } from "../../models/EmployeeEntity";
import { sendEmail } from "../../helpers/sendEmail";

import * as dayjs from "dayjs";
import * as dayOfYear from "dayjs/plugin/dayOfYear";

dayjs.extend(dayOfYear);

export async function sendPendingEmails() {
  console.log("Checking for pending emails...");

  const actionService = Container.get<ActionService>("ActionService");
  const bundleService = Container.get<BundleService>("BundleService");

  const actions = await actionService.getAll();

  actions.forEach(async (a) => {
    const { id, actor, subject, body, active } = a;

    const dayAction = dayjs(a.date).dayOfYear();
    const dayNow = dayjs().dayOfYear();

    if (dayAction === dayNow && active) {
      console.log("Sending...");

      let to: Actor | Employee = actor;

      if (!actor) to = (await bundleService.getById(a.bundle.id)).employee;

      await sendEmail({ subject, body }, to);

      await actionService.update(id, { active: false });

      console.log("Done!");
    }
  });

  return actions;
}
