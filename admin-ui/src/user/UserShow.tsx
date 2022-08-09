import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AYALA_TITLE_FIELD } from "../ayala/AyalaTitle";
import { GRADE_TITLE_FIELD } from "../grade/GradeTitle";
import { ONEVAL_TITLE_FIELD } from "../oneval/OnevalTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Test" target="UserId" label="Tests">
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
            <ReferenceField
              label="Oneval"
              source="oneval.id"
              reference="Oneval"
            >
              <TextField source={ONEVAL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
