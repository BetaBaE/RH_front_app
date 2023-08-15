import { useState } from "react";
import {
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
        <ReferenceInput source="Qualification" reference="Qualification">
          <SelectInput
            optionText="libelle"
            sx={{
              width: "30rem",
            }}
            validate={required()}
          />
        </ReferenceInput>
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
