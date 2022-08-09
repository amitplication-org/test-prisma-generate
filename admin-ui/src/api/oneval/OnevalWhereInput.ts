import { StringFilter } from "../../util/StringFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OnevalWhereInput = {
  id?: StringFilter;
  test?: TestWhereUniqueInput;
  value?: StringNullableFilter;
};
