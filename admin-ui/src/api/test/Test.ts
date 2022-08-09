import { Grade } from "../grade/Grade";
import { User } from "../user/User";

export type Test = {
  createdAt: Date;
  grade?: Grade | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
