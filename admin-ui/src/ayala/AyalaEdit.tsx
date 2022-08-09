import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { GradeTitle } from "../grade/GradeTitle";
import { TestTitle } from "../test/TestTitle";

export const AyalaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="grade.id" reference="Grade" label="Grade">
          <SelectInput optionText={GradeTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceInput source="test.id" reference="Test" label="Test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
