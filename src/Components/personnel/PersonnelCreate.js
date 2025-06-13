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
import { makeStyles } from "@material-ui/styles";
// import { useAuth } from "react-admin";

const useStyles = makeStyles(() => ({
  inputSize: {
    width: "40%",
  },
}));
export const PersonnelCreate = () => {
  const classes = useStyles();

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
          className={classes.inputSize}
          sx={{
            width: "30rem",
          }}
        />
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
          source="Nom"
          autoComplete="off"
          className={classes.inputSize}
          sx={{
            width: "30rem",
          }}
          validate={[required()]}
        />
        <TextInput
          source="Prenom"
          autoComplete="off"
          className={classes.inputSize}
          sx={{
            width: "30rem",
          }}
          validate={[required()]}
        />
        <DateInput
          source="dateNaissance"
          className={classes.inputSize}
          validate={[required()]}
          autoComplete="off"
          sx={{
            width: "30rem",
          }}
        />
        <AutocompleteInput
          source="Qualification"
          className={classes.inputSize}
          choices={qualification_choices}
        />

        <TextInput
          source="Observation"
          autoComplete="off"
          className={classes.inputSize}
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
          className={classes.inputSize}
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
