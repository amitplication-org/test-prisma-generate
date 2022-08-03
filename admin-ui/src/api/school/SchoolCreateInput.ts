import { UserCreateNestedManyWithoutSchoolsInput } from "./UserCreateNestedManyWithoutSchoolsInput";

export type SchoolCreateInput = {
  loacation?: string | null;
  name?: string | null;
  user?: UserCreateNestedManyWithoutSchoolsInput;
};
