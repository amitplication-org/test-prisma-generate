import { OnevalWhereInput } from "./OnevalWhereInput";
import { OnevalOrderByInput } from "./OnevalOrderByInput";

export type OnevalFindManyArgs = {
  where?: OnevalWhereInput;
  orderBy?: Array<OnevalOrderByInput>;
  skip?: number;
  take?: number;
};
