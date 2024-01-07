interface IName {
  firstName: string;
  lastName: string;
}

export interface IUser {
  name: IName;
  userName?: string;
  role: "user" | "admin" | "super-admin";
  coverImg: string;
  email: string;
  password: string;
  status: "active" | "blocked";
  isDeleted: boolean;
  joinedAt: Date;
}
