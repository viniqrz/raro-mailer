import * as dotenv from "dotenv";
import { verify } from "jsonwebtoken";
dotenv.config();

export function verifyToken(token: string) {
  return verify(token, process.env.JWT_SECRET);
}
