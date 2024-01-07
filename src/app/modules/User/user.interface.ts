export interface IName {
  firstName: string;
  lastName: string;
}

export interface IPasswordHistory {
  password: string;
  createdAt: Date;
}

export interface IUser {
  name: IName;
  userName: string;
  role?: "user" | "admin" | "super-admin";
  coverImg: string;
  email: string;
  password: string;
  status: "active" | "blocked";
  isDeleted?: boolean;
  joinedAt?: Date;
  passwordHistory?: IPasswordHistory[];
}
