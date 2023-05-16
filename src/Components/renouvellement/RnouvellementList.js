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
      sort={{ field: "DateInsertion", order: "ASC" }}
      className={classes.root}
    >
      <Datagrid bulkActionButtons={false} {...props}>
        <TextField source="id" label="CIN" />
        <TextField source="Matricule" />
        <ReferenceField source="Qualification" reference="Qualification">
          <TextField source="libelle" />
        </ReferenceField>
        <TextField sortable={false} source="Discription" />
        <DateField source="Renouvellement" />
        <DateField source="DateInsertion" />
        <DateField source="DateFin" />
      </Datagrid>
    </List>
  );
};
