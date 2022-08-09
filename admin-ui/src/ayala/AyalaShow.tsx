import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { GRADE_TITLE_FIELD } from "../grade/GradeTitle";
import { TEST_TITLE_FIELD } from "../test/TestTitle";

export const AyalaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Grade" source="grade.id" reference="Grade">
          <TextField source={GRADE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField label="Test" source="test.id" reference="Test">
          <TextField source={TEST_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
