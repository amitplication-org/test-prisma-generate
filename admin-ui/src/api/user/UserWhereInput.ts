import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  schools?: SchoolListRelationFilter;
  tests?: TestWhereUniqueInput;
  username?: StringFilter;
};
