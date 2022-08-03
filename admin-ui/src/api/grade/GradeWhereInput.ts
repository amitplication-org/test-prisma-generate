import { StringFilter } from "../../util/StringFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type GradeWhereInput = {
  id?: StringFilter;
  test?: TestWhereUniqueInput;
  value?: IntFilter;
};
