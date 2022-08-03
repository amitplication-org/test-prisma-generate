import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type GradeCreateInput = {
  test?: TestWhereUniqueInput | null;
  value?: number | null;
};
