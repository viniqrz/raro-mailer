import { hash } from "bcrypt";

export async function createHash(password: string) {
  return await hash(password, 8);
}
