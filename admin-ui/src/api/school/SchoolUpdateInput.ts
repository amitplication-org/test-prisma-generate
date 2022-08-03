import { UserUpdateManyWithoutSchoolsInput } from "./UserUpdateManyWithoutSchoolsInput";

export type SchoolUpdateInput = {
  loacation?: string | null;
  name?: string | null;
  user?: UserUpdateManyWithoutSchoolsInput;
};
