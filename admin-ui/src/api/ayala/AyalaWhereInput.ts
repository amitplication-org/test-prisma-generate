import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type AyalaWhereInput = {
  grade?: GradeWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  test?: TestWhereUniqueInput;
};
