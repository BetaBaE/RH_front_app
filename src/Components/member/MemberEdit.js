import { useEffect, useState } from "react";
import {
  AutocompleteInput,
  DateInput,
  Edit,
  ReferenceInput,
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
  // const [assure, setAssurance] = useState("");
  // function handleSetAssurance(event) {
  //   setAssurance(event.target.value);
  // }
  return (
    <Edit>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput
          source="id"
          sx={{
            width: "30rem",
          }}
          disabled
        />
        <TextInput
          source="Matricule"
          sx={{
            width: "30rem",
          }}
          disabled
        />
        <TextInput
          source="NomComplet"
          sx={{
            width: "30rem",
          }}
          validate={required()}
        />
        <AutocompleteInput
          source="Qualification"
          choices={qualification_choices}
          sx={{ width: "37%" }}
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
          sx={{
            width: "30rem",
          }}
        />
        <DateInput
          source="DateEmbauche"
          sx={{
            width: "30rem",
          }}
          validate={required()}
        />
        <DateInput
          source="DateFin"
          label={
            contract === "CDI"
              ? "Date Fin Periode D'essai"
              : "Date Fin De Contrat"
          }
          sx={{
            width: "30rem",
          }}
          disabled={!contract}
        />
        <TextInput
          source="Discription"
          label="Description"
          multiline
          sx={{
            width: "30rem",
          }}
        />
        <SelectInput
          choices={[
            { id: "Actif", name: "Actif" },
            { id: "Sortant", name: "Sortant" },
          ]}
          validate={required()}
          source="SituationActif"
          defaultValue={"Actif"}
          sx={{
            width: "30rem",
          }}
        />
        {/* <SelectInput
          choices={[
            { id: "oui", name: "oui" },
            { id: "non", name: "non" },
          ]}
          validate={[required()]}
          source="assurance"
          defaultValue={"non"}
          onChange={handleSetAssurance}
          sx={{
            width: "30rem",
          }}
        />
        <DateInput
          source="DateFin"
          label="DATE ALERT ASSURANCES"
          sx={{
            width: "30rem",
          }}
          disabled={assure === "oui"}
        />*/}
        <DateInput
          source="Renouvellement"
          sx={{
            width: "30rem",
          }}
          onChange={(e) => {
            handleSetRenouvellement(e);
          }}
        />
        <DateInput
          source="datefinRenouvellement"
          label="date fin renouvellement"
          sx={{
            width: "30rem",
          }}
          disabled={renouvellement === ""}
        />
      </SimpleForm>
    </Edit>
  );
};
