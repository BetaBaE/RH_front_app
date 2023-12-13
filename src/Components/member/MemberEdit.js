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
import { makeStyles } from "@material-ui/styles";

const EditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);
const useStyles = makeStyles(() => ({
  inputSize: {
    width: "40%",
  },
}));

export const MemberEdit = (props) => {
  const classes = useStyles();
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
        <TextInput source="id" className={classes.inputSize} disabled />
        <TextInput source="Matricule" className={classes.inputSize} disabled />
        <TextInput
          source="NomComplet"
          className={classes.inputSize}
          validate={required()}
        />
        <AutocompleteInput
          source="Qualification"
          choices={qualification_choices}
          className={classes.inputSize}
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
          className={classes.inputSize}
        />
        <DateInput
          source="DateEmbauche"
          className={classes.inputSize}
          validate={required()}
        />
        <DateInput
          source="DateFin"
          label={
            contract === "CDI"
              ? "Date Fin Periode D'essai"
              : "Date Fin De Contrat"
          }
          className={classes.inputSize}
          disabled={!contract}
        />
        <TextInput
          source="Discription"
          label="Description"
          multiline
          className={classes.inputSize}
        />
        <SelectInput
          choices={[
            { id: "Actif", name: "Actif" },
            { id: "Sortant", name: "Sortant" },
          ]}
          validate={required()}
          source="SituationActif"
          defaultValue={"Actif"}
          className={classes.inputSize}
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
      
        />
        <DateInput
          source="DateFin"
          label="DATE ALERT ASSURANCES"
      
          disabled={assure === "oui"}
        />*/}
        <DateInput
          source="Renouvellement"
          onChange={(e) => {
            handleSetRenouvellement(e);
          }}
          className={classes.inputSize}
        />
        <DateInput
          source="datefinRenouvellement"
          label="date fin renouvellement"
          className={classes.inputSize}
          disabled={renouvellement === ""}
        />
      </SimpleForm>
    </Edit>
  );
};
