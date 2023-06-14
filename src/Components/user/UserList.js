import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
} from "react-admin";
import UserFilter from "./UserFilter";

export const UserList = () => (
  <List filters={<UserFilter />}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="fullname" />
      <TextField source="username" />
      <TextField source="Role" />
      <FunctionField
        label="isActivated"
        render={(record) =>
          record.isActivated === "true" ? "activer" : "desactiver"
        }
      />
      <DateField source="created" />
    </Datagrid>
  </List>
);
