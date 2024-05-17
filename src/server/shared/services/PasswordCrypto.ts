import { compare, genSalt, hash } from "bcryptjs";

const hashPassword = async (password: string): Promise<string> => {
  const saltGenerated = await genSalt(10);
  return await hash(password, saltGenerated);
};

const verifyPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await compare(password, hash);
};

export const PasswordCrypto = {
  hashPassword,
  verifyPassword,
};
