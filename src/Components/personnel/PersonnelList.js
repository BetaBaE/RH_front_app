import { ListGuesser } from "react-admin";
import { makeStyles } from "@material-ui/styles";
import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";
// import RenouvellementFilter from "./RenouvellementFilter";
const useStyles = makeStyles(() => ({
  root: {
    marginTop: "30px",
  },
}));

export const PersonnelList = ({ ...props }) => {
  const classes = useStyles(props);
  return (
    <List
      //   filters={< />}
      className={classes.root}
      // sort={{ field: "DateInsertion", order: "ASC" }}
    >
      <Datagrid bulkActionButtons={false} rowClick="edit">
        {/* <TextField source="id" /> */}
        <TextField source="id" label="CIN" />
        <TextField source="Nom" />
        <TextField source="Prenom" />
        <TextField source="Matricule" />
        <TextField source="Qualification" />
        <TextField source="SituationActif" />
        {/* <ReferenceField source="Qualification" reference="Qualification">
          <TextField source="libelle" />
        </ReferenceField>
        <TextField sortable={false} source="Discription" />
        <DateField source="Renouvellement" />
        <DateField source="datefinRenouvellement" />
        <DateField source="DateEmbauche" />
        <DateField source="DateFin" />
        <DateField source="DateInsertion" /> */}
      </Datagrid>
    </List>
  );
};
