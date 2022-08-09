import { AyalaWhereInput } from "./AyalaWhereInput";
import { AyalaOrderByInput } from "./AyalaOrderByInput";

export type AyalaFindManyArgs = {
  where?: AyalaWhereInput;
  orderBy?: Array<AyalaOrderByInput>;
  skip?: number;
  take?: number;
};
