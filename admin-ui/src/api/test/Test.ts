import { Grade } from "../grade/Grade";
import { User } from "../user/User";

export type Test = {
  createdAt: Date;
  grades?: Grade;
  id: string;
  updatedAt: Date;
  user?: User;
};
