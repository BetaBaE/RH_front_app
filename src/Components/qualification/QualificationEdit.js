import { Edit, SaveButton, SimpleForm, TextInput, Toolbar } from "react-admin";

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);
export const QualificationEdit = (props) => (
  <Edit Toolbar={<EditToolbar />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="libelle" />
    </SimpleForm>
  </Edit>
);
