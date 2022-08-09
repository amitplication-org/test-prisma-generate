import { Grade } from "../grade/Grade";
import { Oneval } from "../oneval/Oneval";
import { User } from "../user/User";

export type Test = {
  createdAt: Date;
  grade?: Grade | null;
  id: string;
  oneval?: Oneval | null;
  updatedAt: Date;
  user?: User | null;
};
