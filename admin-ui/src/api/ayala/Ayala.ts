import { Grade } from "../grade/Grade";
import { Test } from "../test/Test";

export type Ayala = {
  createdAt: Date;
  grade?: Grade | null;
  id: string;
  name: string | null;
  test?: Test | null;
  updatedAt: Date;
};
