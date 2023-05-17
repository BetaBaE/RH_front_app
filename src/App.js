import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { MemberList } from "./Components/member/MemberList";
import { MemberCreate } from "./Components/member/MemberCreate";
import { MemberEdit } from "./Components/member/MemberEdit";
import { ImUsers } from "react-icons/im";
import { QualificationList } from "./Components/qualification/QualificationList";
import { QualificationCreate } from "./Components/qualification/QualificationCreate";
import { QualificationEdit } from "./Components/qualification/QualificationEdit";
import Dashboard from "./Components/dashboard/dashboard";
import { defaultTheme } from "react-admin";
import { RenouvellementList } from "./Components/renouvellement/RnouvellementList";
import { AssuranceEdit } from "./Components/assurance/assuranceEdit";
import { AssuranceList } from "./Components/assurance/assurance";

function App(props) {
  // const createPath = useCreatePath();
  console.log(defaultTheme);
  const theme = {
    ...defaultTheme,
  };
  return (
    <Admin
      {...props}
      dataProvider={restProvider("http://localhost:8081")}
      // layout={CustomLayout}
      theme={theme}
      // layout={MyLayout}
      // dashboard={Dashboard}
    >
      <Resource
        name="members"
        list={MemberList}
        create={MemberCreate}
        edit={MemberEdit}
        icon={ImUsers}
      />
      <Resource
        name="qualification"
        list={QualificationList}
        create={QualificationCreate}
        edit={QualificationEdit}
        // icon={ImUsers}
      />
      {/* <Resource
        name="renouvellement"
        list={RenouvellementList}
        // edit={QualificationEdit}
        // create={QualificationCreate}
        // icon={ImUsers}
      /> */}
      <Resource
        name="renouvellement"
        list={RenouvellementList}

        // edit={QualificationEdit}
        // create={QualificationCreate}
        // icon={ImUsers}
      />
      <Resource
        name="assurances"
        list={AssuranceList}
        // create={AssurancesCreate}
        edit={AssuranceEdit}
        // create={QualificationCreate}
        // icon={ImUsers}
      />
    </Admin>
  );
}

export default App;
