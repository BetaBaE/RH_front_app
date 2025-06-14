import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";
import AssuranceFilter from "./assuranceFilter";
// import assuranceFilter from "./assuranceFilter";

const AssuranceRow = (record, index) => {
  let dateNow = new Date();
  let dateAssurance = new Date(record.dateAssurance);
  let dateFinal = (dateAssurance - dateNow) / (1000 * 24 * 60 * 60);

  if (record.assure === "non") {
    if (dateFinal < -10)
      return {
        backgroundColor: "#fff",
      };
    else if (dateFinal < 0)
      return {
        backgroundColor: "#fff380",
      };
    else if (dateFinal < 31)
      return {
        backgroundColor: "#ffcbd0",
      };
  } else if (record.assure === "oui") {
    record.dateAssurance = "";
  }
};
export const AssuranceList = ({ ...props }) => {
  return (
    <List filters={<AssuranceFilter />} {...props}>
      <Datagrid
        bulkActionButtons={false}
        rowStyle={AssuranceRow}
        rowClick="edit"
      >
        <TextField source="cin" />
        <TextField source="assure" />
        <TextField source="NomComplet" />
        <FunctionField
          label="Jours"
          render={(record) =>
            (
              (new Date(record.dateAssurance) - new Date()) /
              (1000 * 24 * 60 * 60)
            ).toFixed() > 0
              ? (
                  (new Date(record.dateAssurance) - new Date()) /
                  (1000 * 24 * 60 * 60)
                ).toFixed()
              : ""
          }
        />
        <ReferenceField source="Qualification" reference="Qualification">
          <TextField source="libelle" />
        </ReferenceField>
        <DateField source="DateEmbauche" />
        <DateField source="dateAssurance" />
        <DateField source="DateFin" />
      </Datagrid>
    </List>
  );
};
