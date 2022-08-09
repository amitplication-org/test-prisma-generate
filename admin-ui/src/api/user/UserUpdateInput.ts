import { SchoolUpdateManyWithoutUsersInput } from "./SchoolUpdateManyWithoutUsersInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  schools?: SchoolUpdateManyWithoutUsersInput;
  tests?: TestWhereUniqueInput | null;
  username?: string;
};
