import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestWhereInput = {
  grades?: GradeWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
