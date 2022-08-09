import { AyalaWhereUniqueInput } from "../ayala/AyalaWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TestWhereUniqueInput } from "../test/TestWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type GradeWhereInput = {
  ayalas?: AyalaWhereUniqueInput;
  id?: StringFilter;
  test?: TestWhereUniqueInput;
  value?: IntFilter;
};
