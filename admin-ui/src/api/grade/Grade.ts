import { Test } from "../test/Test";

export type Grade = {
  createdAt: Date;
  id: string;
  test?: Test | null;
  updatedAt: Date;
  value: number | null;
};
