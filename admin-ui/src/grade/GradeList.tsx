import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AYALA_TITLE_FIELD } from "../ayala/AyalaTitle";
import { TEST_TITLE_FIELD } from "../test/TestTitle";

export const GradeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Grades"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Ayalas" source="ayala.id" reference="Ayala">
          <TextField source={AYALA_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Test" source="test.id" reference="Test">
          <TextField source={TEST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
      </Datagrid>
    </List>
  );
};
