import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";
import RenouvellementFilter from "./RenouvellementFilter";

export const RenouvellementList = ({ ...props }) => {
  return (
    <List
      filters={<RenouvellementFilter />}
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
        <DateField source="DateEmbauche" />
        <DateField source="Renouvellement" />
        <DateField source="DateFin" />
        <DateField source="DateInsertion" />
      </Datagrid>
    </List>
  );
};
