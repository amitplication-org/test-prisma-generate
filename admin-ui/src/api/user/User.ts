import { School } from "../school/School";
import { Test } from "../test/Test";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  schools?: Array<School>;
  tests?: Array<Test>;
  updatedAt: Date;
  username: string;
};
