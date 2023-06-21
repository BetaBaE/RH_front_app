import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";
import { makeStyles } from "@material-ui/styles";
import MemberFilter from "./MemberFilter";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "30px",
  },
}));

const memberRowStyle = (record, index) => {
  let today = new Date();
  let dateFin = new Date(record.DateFin);
  let datefinRenouvellement = new Date(record.datefinRenouvellement);
  let nbDay = (dateFin - today) / (1000 * 24 * 60 * 60);
  let nbfr = (datefinRenouvellement - today) / (1000 * 24 * 60 * 60);
  console.log(nbDay);

  if (nbDay < -10) {
    return {
      backgroundColor: "#fff",
    };
  } else if (nbDay < -1) {
    return {
      backgroundColor: "#fff380",
    };
  } else if (nbDay < 30)
    return {
      backgroundColor: "#ffcbd0",
    };
  else if (datefinRenouvellement !== "") {
    if (nbfr < -10) {
      return {
        backgroundColor: "#fff",
      };
    } else if (nbfr < -1) {
      return {
        backgroundColor: "#fff380",
      };
    } else if (nbfr < 30)
      return {
        backgroundColor: "#ffcbd0",
      };
  } else {
    return {
      backgroundColor: "#fff",
    };
  }
};

export const MemberList = (props) => {
  const classes = useStyles(props);
  return (
    <List filters={<MemberFilter />} className={classes.root}>
      <Datagrid
        bulkActionButtons={false}
        rowStyle={memberRowStyle}
        rowClick="edit"
        {...props}
        // sort={{ field: "id", order: "DESC" }}
      >
        <TextField source="Matricule" />
        <TextField label="CIN" source="id" />
        <TextField source="NomComplet" />
        <ReferenceField source="Qualification" reference="Qualification">
          <TextField source="libelle" />
        </ReferenceField>
        <TextField source="TypeContrat" />
        <DateField source="DateEmbauche" />
        <DateField source="DateFin" />
        <TextField source="Discription" label="Description" />
        <TextField source="SituationActif" />
        <DateField source="Renouvellement" />
        <DateField source="datefinRenouvellement" />
      </Datagrid>
    </List>
  );
};
