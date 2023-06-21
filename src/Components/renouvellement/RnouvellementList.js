import { makeStyles } from "@material-ui/styles";
import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";
import RenouvellementFilter from "./RenouvellementFilter";
const useStyles = makeStyles(() => ({
  root: {
    marginTop: "30px",
  },
}));

export const RenouvellementList = ({ ...props }) => {
  const classes = useStyles(props);
  return (
    <List
      filters={<RenouvellementFilter />}
      className={classes.root}
      // sort={{ field: "DateInsertion", order: "ASC" }}
    >
      <Datagrid bulkActionButtons={false}>
        {/* <TextField source="id" /> */}
        <TextField source="cin" />
        <TextField source="Matricule" />
        <ReferenceField source="Qualification" reference="Qualification">
          <TextField source="libelle" />
        </ReferenceField>
        <TextField sortable={false} source="Discription" />
        <DateField source="Renouvellement" />
        <DateField source="datefinRenouvellement" />
        <DateField source="DateEmbauche" />
        <DateField source="DateFin" />
        <DateField source="DateInsertion" />
      </Datagrid>
    </List>
  );
};
