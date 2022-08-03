import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SchoolWhereInput = {
  id?: StringFilter;
  loacation?: StringNullableFilter;
  name?: StringNullableFilter;
  user?: UserListRelationFilter;
};
