import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestUpdateInput = {
  grade?: GradeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
