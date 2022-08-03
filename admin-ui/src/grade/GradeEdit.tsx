import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { TestTitle } from "../test/TestTitle";

export const GradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="test.id" reference="Test" label="Test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
