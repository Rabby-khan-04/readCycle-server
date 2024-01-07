import bcrypt from "bcrypt";
import config from "../../config";

export const createHashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.salt_rounds),
  );

  return hashedPassword;
};
