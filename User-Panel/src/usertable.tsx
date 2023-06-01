import _users from "./users.json"
import { User } from "./store/UserType";
const users = _users as User[];
const renderUsers = users.map((item) =><div>{item.name}</div>);
const renderEmail = users.map((item) =><div>{item.email}</div>);
const renderPhone = users.map((item) =><div>{item.phone}</div>);
function UserTable(){
    return(
        <div>
            <div className="grid grid-cols-4">
            <h1 className="col-span-1">{renderUsers} </h1>
            <h1 className="col-span-2">{renderEmail}</h1>
            <h1>{renderPhone}</h1>
            <h1>role</h1>
            </div>
        </div>
    )
};

export default UserTable;