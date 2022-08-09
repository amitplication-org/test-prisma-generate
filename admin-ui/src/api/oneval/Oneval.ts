import { Test } from "../test/Test";

export type Oneval = {
  createdAt: Date;
  id: string;
  test?: Test | null;
  updatedAt: Date;
  value: string | null;
};
