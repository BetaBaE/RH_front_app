import { useEffect, useState } from "react";
import {
  AutocompleteInput,
  DateInput,
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { getQualification } from "../../Global/getAssets.mjs";

export const PersonnelEdit = () => {
  const [qualification, setQualification] = useState([]);
  useEffect(() => {
    getQualification()
      .then((data) => {
        setQualification(data);
      })
      .catch((error) => {
        console.error("Error in fetching qualification data:", error);
      });
  }, []);
  const qualification_choices = qualification.map((item) => {
    let id = item.id;
    let name = item.libelle;
    return { id, name };
  });
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="Matricule" />
        <TextInput source="Nom" />
        <TextInput source="Prenom" />
        <DateInput source="dateNaissance" />
        <TextInput source="SituationFamilialle" />
        <AutocompleteInput
          source="Qualification"
          choices={qualification_choices}
        />
        <TextInput source="Observation" />
        <TextInput source="SituationActif" />
      </SimpleForm>
    </Edit>
  );
};
