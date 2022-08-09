import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type AyalaWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  test?: TestWhereUniqueInput;
};
