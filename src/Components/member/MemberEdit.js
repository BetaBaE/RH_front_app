import { useEffect, useState } from "react";
import {
  AutocompleteInput,
  DateInput,
  Edit,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
} from "react-admin";
import { getQualification } from "../../Global/getAssets.mjs";

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);

export const MemberEdit = (props) => {
  const [contract, setContract] = useState("CDI");
  function handleSetContract(event) {
    setContract(event.target.value);
  }
  const [renouvellement, setRenouvellement] = useState("");
  function handleSetRenouvellement(event) {
    setRenouvellement(event.target.value);
  }

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

  console.log(qualification);

  return (
    <Edit>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source="id" disabled />
        <TextInput source="Matricule" disabled />
        <TextInput source="NomComplet" validate={required()} />
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
          validate={required()}
          onChange={(e) => {
            handleSetContract(e);
          }}
          source="TypeContrat"
        />
        <DateInput source="DateEmbauche" validate={required()} />
        <DateInput
          source="DateFin"
          label={
            contract === "CDI"
              ? "Date Fin Periode D'essai"
              : "Date Fin De Contrat"
          }
          disabled={!contract}
        />
        <TextInput source="Discription" label="Description" multiline />
        <SelectInput
          choices={[
            { id: "Actif", name: "Actif" },
            { id: "Sortant", name: "Sortant" },
          ]}
          validate={required()}
          source="SituationActif"
          defaultValue={"Actif"}
        />
        <DateInput
          source="Renouvellement"
          onChange={(e) => {
            handleSetRenouvellement(e);
          }}
        />
        <DateInput
          source="datefinRenouvellement"
          label="date fin renouvellement"
          disabled={renouvellement === ""}
        />
      </SimpleForm>
    </Edit>
  );
};
