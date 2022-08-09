import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SchoolListRelationFilter } from "../school/SchoolListRelationFilter";
import { TestListRelationFilter } from "../test/TestListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  schools?: SchoolListRelationFilter;
  tests?: TestListRelationFilter;
  username?: StringFilter;
};
