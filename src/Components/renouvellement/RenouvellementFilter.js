import {
  SelectInput,
  Filter,
  TextInput,
  ReferenceInput,
} from "ra-ui-materialui";

const RenouvellementFilter = (props) => (
  <Filter {...props}>
    <TextInput source="NomComplet" />
    <TextInput label="CIN" source="id" />
    <TextInput source="Matricule" />
    <ReferenceInput source="Qualification" reference="Qualification">
      <SelectInput optionText="libelle" />
    </ReferenceInput>
    <TextInput
      source="Discription"
      multiline
      sx={{
        width: "30rem",
      }}
    />
  </Filter>
);
export default RenouvellementFilter;
