import { useState } from "react";
import {
  DateInput,
  Edit,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
} from "react-admin";

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);

export const AssuranceEdit = () => {
  const [assure, setAssurance] = useState(0);
  function handleSetAssurance(event) {
    setAssurance(event.target.value);
  }
  return (
    <Edit>
      <SimpleForm toolbar={<EditToolbar/>}>
        <TextInput
          disabled
          source="cin"
          sx={{
            width: "30rem",
          }}
        />

        <SelectInput
          source="assure"
          choices={[
            { id: "oui", name: "oui" },
            { id: "non", name: "non" },
          ]}
          validate={[required()]}
          onChange={handleSetAssurance}
        />
        <DateInput source="dateAssurance" disabled={assure === "oui"} />
        {/* <ReferenceInput source="qualification" reference="assurances">
          <SelectInput
            optionText="libelle"
            sx={{
              width: "30rem",
            }}
          />
        </ReferenceInput> */}

        {/* <DateInput
            source="dateEmbauche"
            sx={{
              width: "30rem",
            }}
          /> */}
      </SimpleForm>
    </Edit>
  );
};
