import { SelectInput, Filter, TextInput, AutocompleteInput } from "react-admin";
import { useEffect, useState } from "react";
import { getQualification } from "../../Global/getAssets.mjs";

const MemberFilter = (props) => {
  const [qualification, setQualification] = useState([]);
  useEffect(() => {
    getQualification()
      .then((data) => {
        setQualification(data);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      });
  }, []);
  const qualification_choices = qualification.map((item) => {
    let id = item.id;
    let name = item.libelle;
    return { id, name };
  });
  return (
    <Filter {...props}>
      <TextInput label="CIN" source="id" />
      <TextInput source="Matricule" />
      <TextInput source="NomComplet" />
      {/* <ReferenceInput source="Qualification" reference="Qualification">
        <SelectInput optionText="libelle" />
      </ReferenceInput> */}
      <AutocompleteInput
        source="Qualification"
        choices={qualification_choices}
      />
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
