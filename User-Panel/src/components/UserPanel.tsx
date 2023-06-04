import React from 'react';
import { useSelector } from 'react-redux';
import { User } from '../types/User';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { Sidebar } from '../sidebar';
import { Card, Typography, Switch } from "@material-tailwind/react";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser } from '../redux/usersSlice';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
function UserPanel(){
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  const handleDelete = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  return (
  <div className='grid grid-cols-5'>
      <Sidebar></Sidebar>
      <div className='col-start-2 col-end-5'>
        <h1>Users Panel</h1>
        <input></input>
      </div>
      <Card className="col-start-2 col-end-5 overflow-scroll h-full w-full">
      <table className="col-start-2 col-end-5 w-full min-w-max table-auto text-left">
      <thead>
        <tr className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'> 
          <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Name</Typography></th>
          <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Email</Typography></th>
          <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Phone</Typography></th>
          <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Role</Typography></th>
          <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Active</Typography></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody className='col-start-2 col-end-5'>
        {users.map((user: User) => (
          <tr key={user.id}>
           <td className='p-4'><Typography variant="small" color="blue-gray" className="font-normal">{user.name}</Typography></td>
           <td className='p-4'> <Typography variant="small" color="blue-gray" className="font-normal">{user.email}</Typography></td>
           <td className='p-4'><Typography variant="small" color="blue-gray" className="font-normal">{user.phone}</Typography></td>
           <td className='p-4'><Typography variant="small" color="blue-gray" className="font-normal">{user.role}</Typography></td>
           <td className='p-4'><Typography variant="small" color="blue-gray" className="font-normal"> {user.isActive ? (<CheckCircleIcon color="green"/>) :  <CancelIcon />}</Typography></td>
           <td className='p-4'><button onClick={() => handleDelete(user.id)}><DeleteIcon></DeleteIcon></button></td>
           <td className='p-4'><Link to="/updateuser">Update User</Link></td>
          </tr>
        ))}
        
      </tbody>
      </table>
    </Card>
    </div>
  );
};

export { UserPanel } ;