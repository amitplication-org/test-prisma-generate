import { User } from "../user/User";

export type School = {
  createdAt: Date;
  id: string;
  loacation: string | null;
  name: string | null;
  updatedAt: Date;
  user?: Array<User>;
};
