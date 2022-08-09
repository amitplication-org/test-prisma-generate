import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type AyalaUpdateInput = {
  grade?: GradeWhereUniqueInput | null;
  name?: string | null;
  test?: TestWhereUniqueInput | null;
};
