import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payLoad: IUser) => {
  const user = await User.create(payLoad);

  const result = await User.findById(user._id);
  return result;
};

// User Services
export const UserServices = {
  createUserIntoDB,
};
