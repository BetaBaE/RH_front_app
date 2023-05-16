import {
    Create,
    DateInput,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput
  } from "react-admin";

  export const AssurancesCreate = () => {
    return (
      <Create>
        <SimpleForm>
          <TextInput
            source="typeAssurance"
            sx={{
              width: "30rem",
            }}
          />
          <ReferenceInput source="qualification" reference="qualification">
          <SelectInput
            optionText="libelle"
            sx={{
              width: "30rem",
            }}
          />

        </ReferenceInput>
          <DateInput
            source="dateEmbauche"
            sx={{
              width: "30rem",
            }}
          />
        </SimpleForm>
      </Create>
    );
  };