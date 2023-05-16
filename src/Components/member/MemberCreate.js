import { useState } from "react";
import {
  Create,
  DateInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  regex,
} from "react-admin";

export const MemberCreate = () => {
  const [contract, setContract] = useState("");
  function handleSetContract(event) {
    setContract(event.target.value);
  }
  const [assure, setAssurance] = useState("");
  function handleSetAssurance(event) {
    setAssurance(event.target.value);
  }
  const validateCin = regex(
    /^[A-Z]{1,2}[0-9]{5,6}$/,
    "entrez une cin valide AA 12345"
  );

  return (
    <Create>
      <SimpleForm>
        <TextInput
          label="CIN"
          source="id"
          autocomplete="false"
          sx={{
            width: "30rem",
          }}
          validate={[validateCin, required("entrez le cin ")]}
        />
        <TextInput
          source="Matricule"
          autocomplete="false"
          sx={{
            width: "30rem",
          }}
          validate={[required()]}
        />
        <TextInput
          source="NomComplet"
          autocomplete="false"
          sx={{
            width: "30rem",
          }}
          validate={[required()]}
        />
        <ReferenceInput source="Qualification" reference="Qualification">
          <SelectInput
            optionText="libelle"
            autocomplete="false"
            sx={{
              width: "30rem",
            }}
            validate={[required()]}
          />
        </ReferenceInput>

        <SelectInput
          choices={[
            { id: "CDI", name: "CDI" },
            { id: "CDD", name: "CDD" },
          ]}
          validate={[required()]}
          onChange={(e) => {
            handleSetContract(e);
          }}
          source="TypeContrat"
          autocomplete="false"
          sx={{
            width: "30rem",
          }}
        />
        <DateInput
          source="DateEmbauche"
          validate={[required()]}
          autocomplete="false"
          sx={{
            width: "30rem",
          }}
        />
        <DateInput
          source="DateFin"
          label={
            contract === "CDI"
              ? "Date Fin Periode D'essai"
              : "DATE FIN DE CONTRAT"
          }
          autocomplete="false"
          sx={{
            width: "30rem",
          }}
        />
        <TextInput
          source="Discription"
          multiline
          autocomplete="false"
          sx={{
            width: "30rem",
          }}
        />
        <SelectInput
          choices={[
            { id: "Actif", name: "Actif" },
            { id: "Sortant", name: "Sortant" },
          ]}
          validate={[required()]}
          source="SituationActif"
          defaultValue={"Actif"}
          autocomplete="false"
          sx={{
            width: "30rem",
          }}
        />
        <SelectInput
          choices={[
            { id: "oui", name: "oui" },
            { id: "non", name: "non" },
          ]}
          validate={[required()]}
          source="assurance"
          onChange={handleSetAssurance}
          autocomplete="false"
          sx={{
            width: "30rem",
          }}
        />
        <DateInput
          source="dateAssurance"
          label="DATE ALERT ASSURANCES"
          autocomplete="false"
          sx={{
            width: "30rem",
          }}
          disabled={assure === "oui"}
        />
      </SimpleForm>
    </Create>
  );
};
