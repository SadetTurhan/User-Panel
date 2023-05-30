import { Sidebar } from '/home/sadet/repos/User-Panel/User-Panel/src/sidebar';
import users from "./users.json"
import { Usertype } from "./usertypes";
const user = users as Usertype[];
console.log(user[0].id)
export default function Users() {

    return (
      <div>
      <Sidebar></Sidebar>
      <div>
        <p className="text-4xl">Users</p>
        <input></input>
      </div>
      </div>
    );
}

