import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestCreateInput = {
  grades: GradeWhereUniqueInput;
  user: UserWhereUniqueInput;
};
