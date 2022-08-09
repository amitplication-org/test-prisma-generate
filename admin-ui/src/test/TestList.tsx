import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AYALA_TITLE_FIELD } from "../ayala/AyalaTitle";
import { GRADE_TITLE_FIELD } from "../grade/GradeTitle";
import { ONEVAL_TITLE_FIELD } from "../oneval/OnevalTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="aaaaaaaaaa" source="aaaaaaaaaa" />
        <ReferenceField label="Ayala" source="ayala.id" reference="Ayala">
          <TextField source={AYALA_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Grade" source="grade.id" reference="Grade">
          <TextField source={GRADE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Oneval" source="oneval.id" reference="Oneval">
          <TextField source={ONEVAL_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
