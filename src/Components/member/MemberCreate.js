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
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  inputSize: {
    width: "40%",
  },
}));
export const MemberCreate = () => {
  const classes = useStyles();

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
          className={classes.inputSize}
          sx={{
            width: "30rem",
          }}
          validate={[validateCin, required("entrez le cin ")]}
        />
        <TextInput
          source="Matricule"
          autoComplete="off"
          className={classes.inputSize}
          sx={{
            width: "30rem",
          }}
          validate={[required()]}
        />
        <TextInput
          source="NomComplet"
          autoComplete="off"
          className={classes.inputSize}
          sx={{
            width: "30rem",
          }}
          validate={[required()]}
        />
        <AutocompleteInput
          source="Qualification"
          className={classes.inputSize}
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
          className={classes.inputSize}
          source="TypeContrat"
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
        />
        <DateInput
          source="DateEmbauche"
          className={classes.inputSize}
          validate={[required()]}
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
        />
        <DateInput
          source="DateFin"
          className={classes.inputSize}
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
          className={classes.inputSize}
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
          className={classes.inputSize}
          sx={{
            width: "30rem",
          }}
        />
        <SelectInput
          choices={[
            { id: "oui", name: "oui" },
            { id: "non", name: "non" },
          ]}
          className={classes.inputSize}
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
          className={classes.inputSize}
          disabled={assure === "oui"}
        />
      </SimpleForm>
    </Create>
  );
};
