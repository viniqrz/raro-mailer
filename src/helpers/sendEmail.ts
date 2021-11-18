import * as sgMail from "@sendgrid/mail";
import * as dotenv from "dotenv";

import { EmailData } from "../@types/dto/EmailDto";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// SENDGRID TEM UM AGENDAMENTO DE 72H NO MÁXIMO

export async function sendEmail(emailData: EmailData, dateUnix: number) {
  try {
    const msg = {
      to: emailData.to,
      from: process.env.TEST_EMAIL,
      subject: emailData.subject,
      html: emailData.body,
      sendAt: dateUnix, // max 72h in unix timestamp
    };

    await sgMail.send(msg);

    console.log("Email sent!");
  } catch (err) {
    throw new Error(`Couldn't send email: ${err.message}`);
  }
}
