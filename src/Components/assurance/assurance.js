import {
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
} from "react-admin";
import { makeStyles } from "@material-ui/styles";
// import assuranceFilter from "./assuranceFilter";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "30px",
  },
}));

const AssuranceRow = (record, index) => {
  let dateNow = new Date();
  let dateAssurance = new Date(record.dateAssurance);
  let dateFinal = (dateAssurance - dateNow) / (1000 * 24 * 60 * 60);

  if (record.assure === "non") {
    if (dateFinal < 0)
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
  const classes = useStyles(props);
  return (
    <List filters={<assuranceFilter />} className={classes.root} {...props}>
      <Datagrid rowStyle={AssuranceRow} rowClick="edit">
        <TextField source="id" />
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
        <DateField source="DateEmbauche" />
        <DateField source="dateAssurance" />
        <DateField source="DateFin" />
      </Datagrid>
    </List>
  );
};
