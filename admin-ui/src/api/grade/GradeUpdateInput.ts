import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type GradeUpdateInput = {
  test?: TestWhereUniqueInput | null;
  value?: number | null;
};
