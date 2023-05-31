import { Sidebar } from '/home/sadet/repos/User-Panel/User-Panel/src/sidebar';
import data from "./users.json"
import { Usertype } from "./usertypes";
const user = data as Usertype[];
console.log(user[0].id)
function Users() {

    return (
      <div>
      <Sidebar></Sidebar>
      <div>
        <p className="text-4xl">Users</p>
        <label>search</label>
        <input></input>
        <p>{user[0].name}{user[0].id}</p>
        <p>{user[1].name}</p>
        <p>{user[2].name}</p>
      </div>
      </div>
    );
}

export { Users };