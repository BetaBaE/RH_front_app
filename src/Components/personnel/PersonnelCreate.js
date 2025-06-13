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
import { Grid } from "@mui/material";
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
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid md={6}>
            <TextInput
              label="CIN"
              source="id"
              autoComplete="off"
              sx={{
                width: { xs: "100%", md: "30rem" }, // full width on mobile, fixed on desktop
              }}
              validate={[validateCin, required("entrez le cin ")]}
            />
          </Grid>
          <Grid md={6}>
            <TextInput
              source="Matricule"
              autoComplete="off"
              sx={{
                width: { xs: "100%", md: "30rem" }, // full width on mobile, fixed on desktop
              }}
              validate={[required()]}
            />
          </Grid>
          <Grid md={6}>
            <TextInput
              source="Nom"
              autoComplete="off"
              sx={{
                width: { xs: "100%", md: "30rem" }, // full width on mobile, fixed on desktop
              }}
              validate={[required()]}
            />
          </Grid>
          <Grid md={6}>
            <TextInput
              source="Prenom"
              autoComplete="off"
              sx={{
                width: { xs: "100%", md: "30rem" }, // full width on mobile, fixed on desktop
              }}
              validate={[required()]}
            />
          </Grid>
          <Grid md={6}>
            <DateInput
              source="dateNaissance"
              validate={[required()]}
              autoComplete="off"
              sx={{
                width: { xs: "100%", md: "30rem" }, // full width on mobile, fixed on desktop
              }}
            />
          </Grid>
          <Grid md={6}>
            <AutocompleteInput
              source="Qualification"
              choices={qualification_choices}
              sx={{
                width: { xs: "100%", md: "30rem" }, // full width on mobile, fixed on desktop
              }}
            />
          </Grid>
          <Grid md={6}>
            <TextInput
              source="Observation"
              autoComplete="off"
              sx={{
                width: { xs: "100%", md: "30rem" }, // full width on mobile, fixed on desktop
              }}
            />
          </Grid>
          <Grid md={6}>
            <SelectInput
              choices={[
                { id: "Actif", name: "Actif" },
                { id: "Sortant", name: "Sortant" },
              ]}
              validate={[required()]}
              defaultValue={"Actif"}
              sx={{
                width: { xs: "100%", md: "30rem" }, // full width on mobile, fixed on desktop
              }}
              source="SituationActif"
              autoComplete="off"
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};
