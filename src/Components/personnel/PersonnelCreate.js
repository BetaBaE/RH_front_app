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
  useGetIdentity,
} from "react-admin";
import { getQualification } from "../../Global/getAssets.mjs";
// import { useAuth } from "react-admin";

export const PersonnelCreate = () => {
  //   const [contract, setContract] = useState("");
  //   function handleSetContract(event) {
  //     setContract(event.target.value);
  //   }
  //   const [assure, setAssurance] = useState("");
  //   function handleSetAssurance(event) {
  //     setAssurance(event.target.value);
  //   }
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

  const validateCin = regex(
    /^[A-Z]{1,2}[0-9]{2,6}$/,
    "entrez une cin valide AA12345"
  );
  const qualification_choices = qualification.map((item) => {
    let id = item.id;
    let name = item.libelle;
    return { id, name };
  });
  const { identity, isLoading: identityLoading } = useGetIdentity();

  return (
    <Create>
      <SimpleForm>
        <TextInput
          source="Redacteur"
          disabled
          autoComplete="off"
          defaultValue={identity?.fullName ? identity.fullName : "admin"}
          sx={{
            width: "30rem",
          }}
        />
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
          source="Nom"
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
          validate={[required()]}
        />
        <TextInput
          source="Prenom"
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
          validate={[required()]}
        />
        <DateInput
          source="dateNaissance"
          validate={[required()]}
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
        />
        <AutocompleteInput
          source="Qualification"
          choices={qualification_choices}
        />

        <TextInput
          source="Observation"
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
          defaultValue={"Actif"}
          source="SituationActif"
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
        />
      </SimpleForm>
    </Create>
  );
};
