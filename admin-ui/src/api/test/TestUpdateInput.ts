import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { OnevalWhereUniqueInput } from "../oneval/OnevalWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestUpdateInput = {
  aaaaaaaaaa?: string | null;
  grade?: GradeWhereUniqueInput | null;
  oneval?: OnevalWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
