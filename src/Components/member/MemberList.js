import { Datagrid, DateField, List, TextField } from "react-admin";
import MemberFilter from "./MemberFilter";

const memberRowStyle = (record, index) => {
  let today = new Date();
  let dateFin = new Date(record.DateFin);
  let datefinRenouvellement = new Date(record.datefinRenouvellement);
  let nbDay = (dateFin - today) / (1000 * 24 * 60 * 60);
  let nbfr = (datefinRenouvellement - today) / (1000 * 24 * 60 * 60);

  if (datefinRenouvellement !== "") {
    if (nbfr < -10 && nbDay < -10) {
      return {
        backgroundColor: "#fff",
      };
    } else if (nbfr < -1 && nbDay < -1) {
      return {
        backgroundColor: "#fff380",
      };
    } else if (nbfr < 30 && nbDay < 30)
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
  return (
    <List filters={<MemberFilter />}>
      <Datagrid
        bulkActionButtons={false}
        rowStyle={memberRowStyle}
        rowClick="edit"
        {...props}
      >
        <TextField source="Matricule" />
        <TextField label="CIN" source="id" />
        <TextField source="NomComplet" />
        <TextField source="Qualification" />
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
