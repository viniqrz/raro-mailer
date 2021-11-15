import { compare } from "bcrypt";

export async function compareHash(password: string, hash: string) {
  return await compare(password, hash);
}
