import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { AyalaTitle } from "../ayala/AyalaTitle";
import { TestTitle } from "../test/TestTitle";

export const GradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="ayala.id" reference="Ayala" label="Ayalas">
          <SelectInput optionText={AyalaTitle} />
        </ReferenceInput>
        <ReferenceInput source="test.id" reference="Test" label="Test">
          <SelectInput optionText={TestTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
