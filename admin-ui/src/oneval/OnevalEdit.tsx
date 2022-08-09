import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { TestTitle } from "../test/TestTitle";

export const OnevalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="test.id" reference="Test" label="Test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
        <TextInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
