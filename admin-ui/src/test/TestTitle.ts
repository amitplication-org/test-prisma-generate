import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "aaaaaaaaaa";

export const TestTitle = (record: TTest): string => {
  return record.aaaaaaaaaa || record.id;
};
