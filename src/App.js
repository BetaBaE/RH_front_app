import { Admin, EditGuesser, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { MemberList } from "./Components/member/MemberList";
import { MemberCreate } from "./Components/member/MemberCreate";
import { MemberEdit } from "./Components/member/MemberEdit";
import { ImPrinter } from "react-icons/im";
import { BsBriefcase, BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineHistory, AiOutlineUser } from "react-icons/ai";
import { IoMedkitOutline } from "react-icons/io5";
import { QualificationList } from "./Components/qualification/QualificationList";
import { QualificationCreate } from "./Components/qualification/QualificationCreate";
import { QualificationEdit } from "./Components/qualification/QualificationEdit";
import { RenouvellementList } from "./Components/renouvellement/RnouvellementList";
import { AssuranceEdit } from "./Components/assurance/assuranceEdit";
import { AssuranceList } from "./Components/assurance/assurance";
import { UserCreate } from "./Components/user/UserCreate";
import { UserList } from "./Components/user/UserList";
import { UserEdit } from "./Components/user/UserEdit";
import { auth } from "./authProvider";
import PrintPdf from "./Components/print/PrintPdf";
import { PersonnelList } from "./Components/personnel/PersonnelList";
import { PersonnelCreate } from "./Components/personnel/PersonnelCreate";
import { PersonnelEdit } from "./Components/personnel/PersonnelEdit";

function App(props) {
  return (
    <Admin
      // authProvider={auth}
      // {...props}
      dataProvider={restProvider("http://localhost:8081")}
      // http://10.111.1.68
      // layout={MyLayout}
      darkTheme={{ palette: { mode: "dark" } }}
    >
      {(permissions) => [
        permissions === "gKIJQelDba8s4YdO" ? (
          <Resource
            name="users"
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
            // create={QualificationCreate}
            icon={AiOutlineUser}
          />
        ) : null,
        permissions === "gKIJQelDba8s4YdO" ||
        permissions === "FlOpM57clI8qFthm" ? (
          <Resource
            name="members"
            list={MemberList}
            create={MemberCreate}
            edit={MemberEdit}
            icon={BsPersonLinesFill}
          />
        ) : null,

        <Resource
          name="Personnel"
          list={PersonnelList}
          create={PersonnelCreate}
          edit={PersonnelEdit}
          // icon={BsPersonLinesFill}
        />,
        permissions === "gKIJQelDba8s4YdO" ||
        permissions === "FlOpM57clI8qFthm" ? (
          <Resource
            name="qualification"
            list={QualificationList}
            create={QualificationCreate}
            edit={QualificationEdit}
            icon={BsBriefcase}
          />
        ) : null,

        permissions === "gKIJQelDba8s4YdO" ||
        permissions === "FlOpM57clI8qFthm" ? (
          <Resource
            name="renouvellement"
            list={RenouvellementList}
            // edit={QualificationEdit}
            // create={QualificationCreate}
            icon={AiOutlineHistory}
          />
        ) : null,

        permissions === "gKIJQelDba8s4YdO" ||
        permissions === "FlOpM57clI8qFthm" ? (
          <Resource
            name="assurances"
            list={AssuranceList}
            // create={AssurancesCreate}
            edit={AssuranceEdit}
            // create={QualificationCreate}
            icon={IoMedkitOutline}
          />
        ) : null,
        //   permissions === "gKIJQelDba8s4YdO" ||
        //   permissions === "FlOpM57clI8qFthm" ? (
        //     <Resource
        //       name="print"
        //       list={PrintPdf}
        //       // create={QualificationCreate}
        //       icon={ImPrinter}
        //     />
        //   ) : null,
      ]}
    </Admin>
  );
}

export default App;
