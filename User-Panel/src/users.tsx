import { Sidebar } from '/home/sadet/repos/User-Panel/User-Panel/src/sidebar';
import UserTable from "./usertable";
function Users() {

  
    return (
      <div>
      <Sidebar></Sidebar>
      <div>
        <p className="text-4xl">Users</p>
      <UserTable></UserTable>
      </div>
      </div>
    );
}

export { Users };