import {
  DateInput,
  Edit,
  required,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);

export const UserEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput
          source="fullname"
          validate={required("Le nom est obligatoire")}
        />
        <TextInput
          source="username"
          validate={required("Username est obligatoire")}
        />
        {/* <TextInput source="Role" /> */}
        <SelectInput
          validate={required("Le Role est obligatoire")}
          source="Role"
          choices={[
            { id: "administration rh", name: "Administration RH" },
            { id: "assistante rh", name: "Assistante RH" },
            //   { id: "photography", name: "Photography" },
          ]}
        />
        {/* <TextInput source="password" /> */}
        <SelectInput
          validate={required("Le status est obligatoire")}
          source="isActivated"
          choices={[
            { id: "true", name: "activer" },
            { id: "false", name: "desactiver" },
            //   { id: "photography", name: "Photography" },
          ]}
        />
        <DateInput source="created" disabled />
      </SimpleForm>
    </Edit>
  );
};
