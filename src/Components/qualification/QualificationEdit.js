import { Edit, SimpleForm, TextInput } from "react-admin";

export const QualificationEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="libelle" />
    </SimpleForm>
  </Edit>
);
