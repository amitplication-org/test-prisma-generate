import { AyalaWhereUniqueInput } from "../ayala/AyalaWhereUniqueInput";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type GradeCreateInput = {
  ayalas?: AyalaWhereUniqueInput | null;
  test?: TestWhereUniqueInput | null;
  value: number;
};
