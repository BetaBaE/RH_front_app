import { Datagrid, List, TextField } from "react-admin";

export const QualificationList = (props) => {
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <TextField source="libelle" />
      </Datagrid>
    </List>
  );
};
