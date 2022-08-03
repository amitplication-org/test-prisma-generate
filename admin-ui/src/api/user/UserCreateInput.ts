import { SchoolCreateNestedManyWithoutUsersInput } from "./SchoolCreateNestedManyWithoutUsersInput";
import { TestCreateNestedManyWithoutUsersInput } from "./TestCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  schools?: SchoolCreateNestedManyWithoutUsersInput;
  tests?: TestCreateNestedManyWithoutUsersInput;
  username: string;
};
