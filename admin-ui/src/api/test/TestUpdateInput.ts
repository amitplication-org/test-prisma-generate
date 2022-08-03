import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestUpdateInput = {
  grades?: GradeWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
