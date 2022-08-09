import { Test } from "../test/Test";

export type Ayala = {
  createdAt: Date;
  id: string;
  name: string | null;
  test?: Test | null;
  updatedAt: Date;
};
