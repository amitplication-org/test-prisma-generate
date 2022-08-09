import { SchoolUpdateManyWithoutUsersInput } from "./SchoolUpdateManyWithoutUsersInput";
import { TestUpdateManyWithoutUsersInput } from "./TestUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  schools?: SchoolUpdateManyWithoutUsersInput;
  tests?: TestUpdateManyWithoutUsersInput;
  username?: string;
};
