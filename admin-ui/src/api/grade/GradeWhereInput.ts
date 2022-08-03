import { StringFilter } from "../../util/StringFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type GradeWhereInput = {
  id?: StringFilter;
  test?: TestWhereUniqueInput;
  value?: IntNullableFilter;
};
