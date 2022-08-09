import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestCreateInput = {
  grade?: GradeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
