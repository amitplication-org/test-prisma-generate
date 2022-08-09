import { Ayala } from "../ayala/Ayala";
import { Test } from "../test/Test";

export type Grade = {
  ayalas?: Ayala | null;
  createdAt: Date;
  id: string;
  test?: Test | null;
  updatedAt: Date;
  value: number;
};
