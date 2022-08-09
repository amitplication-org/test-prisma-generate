import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OnevalWhereUniqueInput } from "../oneval/OnevalWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestWhereInput = {
  aaaaaaaaaa?: StringNullableFilter;
  grade?: GradeWhereUniqueInput;
  id?: StringFilter;
  oneval?: OnevalWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
