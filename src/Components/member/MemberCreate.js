import { useEffect, useState } from "react";
import {
  Create,
  DateInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  regex,
  AutocompleteInput,
} from "react-admin";
import { getQualification } from "../../Global/getAssets.mjs";

export const MemberCreate = () => {
  const [contract, setContract] = useState("");
  function handleSetContract(event) {
    setContract(event.target.value);
  }
  const [assure, setAssurance] = useState("");
  function handleSetAssurance(event) {
    setAssurance(event.target.value);
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

  const validateCin = regex(
    /^[A-Z]{1,2}[0-9]{2,6}$/,
    "entrez une cin valide AA12345"
  );
  const qualification_choices = qualification.map((item) => {
    let id = item.id;
    let name = item.libelle;
    return { id, name };
  });

  return (
    <Create>
      <SimpleForm>
        <TextInput
          label="CIN"
          source="id"
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
          validate={[validateCin, required("entrez le cin ")]}
        />
        <TextInput
          source="Matricule"
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
          validate={[required()]}
        />
        <TextInput
          source="NomComplet"
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
          validate={[required()]}
        />
        <AutocompleteInput
          source="Qualification"
          sx={{ width: "37%" }}
          choices={qualification_choices}
        />

        <SelectInput
          choices={[
            { id: "CDI", name: "CDI" },
            { id: "CDD", name: "CDD" },
            { id: "STAGE", name: "STAGE" },
          ]}
          validate={[required()]}
          onChange={(e) => {
            handleSetContract(e);
          }}
          source="TypeContrat"
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
        />
        <DateInput
          source="DateEmbauche"
          validate={[required()]}
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
        />
        <DateInput
          source="DateFin"
          label={
            contract === "CDI"
              ? "Date Fin Periode D'essai"
              : "Date Fin De Contrat"
          }
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
        />
        <TextInput
          source="Discription"
          label="Description"
          multiline
          autoComplete="off"
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
          autoComplete="off"
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
          defaultValue={"non"}
          onChange={handleSetAssurance}
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
        />
        <DateInput
          source="dateAssurance"
          label="DATE ALERT ASSURANCES"
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
          disabled={assure === "oui"}
        />
      </SimpleForm>
    </Create>
  );
};
