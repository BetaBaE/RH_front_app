import {
  SelectInput,
  Filter,
  TextInput,
  ReferenceInput,
} from "ra-ui-materialui";

const MemberFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="CIN" source="id" />
      <TextInput source="Matricule" />
      <TextInput source="NomComplet" />
      <ReferenceInput source="Qualification" reference="Qualification">
        <SelectInput optionText="libelle" />
      </ReferenceInput>
      <SelectInput
        choices={[
          { id: "CDI", name: "CDI" },
          { id: "CDD", name: "CDD" },
          { id: "STAGE", name: "STAGE" },
        ]}
        source="TypeContrat"
      />
      {/* <DateInput source="DateEmbauche" /> */}
      <SelectInput
        choices={[
          { id: "Actif", name: "Actif" },
          { id: "Sortant", name: "Sortant" },
        ]}
        source="SituationActif"
      />
      <TextInput
        source="Discription"
        multiline
        sx={{
          width: "30rem",
        }}
      />
    </Filter>
  );
};
export default MemberFilter;
