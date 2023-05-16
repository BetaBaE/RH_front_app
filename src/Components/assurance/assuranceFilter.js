import {
    Filter,
    TextInput,
  } from "ra-ui-materialui";




const assuranceFilter = (props) => {
    (
        <Filter {...props}>
           <TextInput label="CIN" source="cin" />
           <TextInput source="assure" />
           <TextInput source="NomComplet" />
        </Filter>
    )
}

export default assuranceFilter