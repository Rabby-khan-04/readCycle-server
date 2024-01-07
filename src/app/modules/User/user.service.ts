import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payLoad: IUser) => {
  const result = await User.create(payLoad);

  return result;
};

export const UserServices = {
  createUserIntoDB,
};
