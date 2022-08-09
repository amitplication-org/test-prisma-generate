import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AyalaWhereUniqueInput } from "../ayala/AyalaWhereUniqueInput";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OnevalWhereUniqueInput } from "../oneval/OnevalWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestWhereInput = {
  aaaaaaaaaa?: StringNullableFilter;
  ayala?: AyalaWhereUniqueInput;
  grade?: GradeWhereUniqueInput;
  id?: StringFilter;
  oneval?: OnevalWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
