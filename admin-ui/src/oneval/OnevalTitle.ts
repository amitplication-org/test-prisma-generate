import { Oneval as TOneval } from "../api/oneval/Oneval";

export const ONEVAL_TITLE_FIELD = "value";

export const OnevalTitle = (record: TOneval): string => {
  return record.value || record.id;
};
