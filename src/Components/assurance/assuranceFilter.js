import {
    Filter,
    TextInput,
  } from "ra-ui-materialui";




const AssuranceFilter = (props) => {
   return (
        <Filter {...props}>
           <TextInput label="CIN" source="cin" />
           <TextInput source="assure" />
           <TextInput source="NomComplet" />
        </Filter>
    )
}

export default AssuranceFilter