import { Ayala as TAyala } from "../api/ayala/Ayala";

export const AYALA_TITLE_FIELD = "name";

export const AyalaTitle = (record: TAyala): string => {
  return record.name || record.id;
};
