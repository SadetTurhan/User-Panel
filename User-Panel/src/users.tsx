import React, { useState } from "react";
import { Sidebar } from '/home/sadet/repos/User-Panel/User-Panel/src/sidebar';
import data from "./users.json"
import { Usertype } from "./usertypes";
import UserCard from './components/UserSection';
import { useSelector, useDispatch} from "react-redux";
import { RootState } from "./store";
import { addUser } from "./features/UserSlice";
const user = data as Usertype[];
function Users() {
  const [userNameInput, setUserNameInput] = useState("")
  const users = useSelector((state:RootState) => state.users.value)
  const dispatch = useDispatch()
  const handleAddUsers = () => {
    if(!userNameInput) return;
    dispatch(addUser(userNameInput));
    setUserNameInput("")
  }
    return (
      <div>
      <Sidebar></Sidebar>
      <div>
        <p className="text-4xl">Users</p>
        {users.map((name,index) => {
                return <UserCard name={name} index={index} />
                })}
                <input value={userNameInput} onChange={(e) => setUserNameInput(e.target.value)}/>
                <button onClick={handleAddUsers}>Add</button>
      </div>
      </div>
    );
}

export { Users };