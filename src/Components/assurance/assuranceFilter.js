import { SelectInput, Filter, TextInput, ReferenceInput } from "react-admin";

const AssuranceFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="CIN" source="cin" />
      <ReferenceInput source="Qualification" reference="Qualification">
        <SelectInput optionText="libelle" />
      </ReferenceInput>
      <SelectInput
        choices={[
          { id: "oui", name: "oui" },
          { id: "non", name: "non" },
        ]}
        source="assure"
      />
      <TextInput source="NomComplet" />
    </Filter>
  );
};

export default AssuranceFilter;
