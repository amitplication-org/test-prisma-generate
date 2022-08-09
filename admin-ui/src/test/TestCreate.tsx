import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AyalaTitle } from "../ayala/AyalaTitle";
import { GradeTitle } from "../grade/GradeTitle";
import { OnevalTitle } from "../oneval/OnevalTitle";
import { UserTitle } from "../user/UserTitle";

export const TestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="aaaaaaaaaa" source="aaaaaaaaaa" />
        <ReferenceInput source="ayala.id" reference="Ayala" label="Ayala">
          <SelectInput optionText={AyalaTitle} />
        </ReferenceInput>
        <ReferenceInput source="grade.id" reference="Grade" label="Grade">
          <SelectInput optionText={GradeTitle} />
        </ReferenceInput>
        <ReferenceInput source="oneval.id" reference="Oneval" label="Oneval">
          <SelectInput optionText={OnevalTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
