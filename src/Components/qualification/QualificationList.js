import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

export const QualificationList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="libelle" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
