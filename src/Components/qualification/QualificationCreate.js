import { Create, SimpleForm, TextInput } from "react-admin";

export const QualificationCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="libelle" />
    </SimpleForm>
  </Create>
);
