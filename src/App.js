import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { MemberList } from "./Components/member/MemberList";
import { MemberCreate } from "./Components/member/MemberCreate";
import { MemberEdit } from "./Components/member/MemberEdit";
import { ImUsers } from "react-icons/im";
import { QualificationList } from "./Components/qualification/QualificationList";
import { QualificationCreate } from "./Components/qualification/QualificationCreate";
import { QualificationEdit } from "./Components/qualification/QualificationEdit";
import { defaultTheme } from "react-admin";
import { RenouvellementList } from "./Components/renouvellement/RnouvellementList";
import { AssuranceEdit } from "./Components/assurance/assuranceEdit";
import { AssuranceList } from "./Components/assurance/assurance";
import { UserCreate } from "./Components/user/UserCreate";
import { UserList } from "./Components/user/UserList";
import { UserEdit } from "./Components/user/UserEdit";
import { auth } from "./authProvider";
function App(props) {
  // const createPath = useCreatePath();
  console.log(defaultTheme);
  const theme = {
    ...defaultTheme,
  };
  return (
    <Admin
      {...props}
      dataProvider={restProvider("http://http://10.111.1.95:8081")}
      authProvider={auth}
      theme={theme}
      // layout={MyLayout}
      // dashboard={Dashboard}
    >
      {(permissions) => [
        permissions === "administration rh" ||
        permissions === "assistante rh" ? (
          <Resource
            name="members"
            list={MemberList}
            create={MemberCreate}
            edit={MemberEdit}
            icon={ImUsers}
          />
        ) : null,
        permissions === "administration rh" ||
        permissions === "assistante rh" ? (
          <Resource
            name="qualification"
            list={QualificationList}
            create={QualificationCreate}
            edit={QualificationEdit}
            // icon={ImUsers}
          />
        ) : null,

        permissions === "administration rh" ||
        permissions === "assistante rh" ? (
          <Resource
            name="renouvellement"
            list={RenouvellementList}

            // edit={QualificationEdit}
            // create={QualificationCreate}
            // icon={ImUsers}
          />
        ) : null,

        permissions === "administration rh" ||
        permissions === "assistante rh" ? (
          <Resource
            name="assurances"
            list={AssuranceList}
            // create={AssurancesCreate}
            edit={AssuranceEdit}
            // create={QualificationCreate}
            // icon={ImUsers}
          />
        ) : null,
        permissions === "administration rh" ? (
          <Resource
            name="users"
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
            // create={QualificationCreate}
            // icon={ImUsers}
          />
        ) : null,
      ]}
    </Admin>
  );
}

export default App;
