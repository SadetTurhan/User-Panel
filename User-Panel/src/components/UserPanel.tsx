import { useSelector } from 'react-redux';
import {  User } from '../types/User';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { Sidebar } from '../sidebar';
import { Card, Typography, Input, Button} from "@material-tailwind/react";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser } from '../redux/usersSlice';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import React,{ useState } from 'react';

function UserPanel(){
  
  
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  const handleDelete = (userId: number) => {
    dispatch(deleteUser(userId));
  };
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
  <div className='grid grid-cols-5 bg-gradient-to-r from-light-green-50 to-light-green-100'>
      <Sidebar></Sidebar>
      <div className='col-start-2 col-end-6 mt-12 ml-8 mr-8' >
        <Typography variant="h2">Users</Typography>
        <Input label="Search User" className='w-2/4' />
      <Card className="col-start-2 col-end-5 overflow-auto hover:overflow-scroll h-3/4 w-full mt-5">
      <table className="col-start-2 col-end-5 h-full w-full min-w-max table-auto text-left">
      <thead>
        <tr className='border-b border-blue-gray-100 bg-blue-gray-50 p-2'> 
          <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none ">Name</Typography></th>
          <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Email</Typography></th>
          <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Phone</Typography></th>
          <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Role</Typography></th>
          <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Active</Typography></th>
          <th className='p-4'></th>
          <th className='p-4'></th>
        </tr>
      </thead>
      <tbody className='col-start-2 col-end-5'>
        {currentUsers.map((user: User) => (
         <tr key={user.id}>
            <td className='p-4'><Typography variant="small" color="blue-gray" className="font-normal">{user.name}</Typography></td>
           <td className='p-4'> <Typography variant="small" color="blue-gray" className="font-normal">{user.email}</Typography></td>
           <td className='p-4'><Typography variant="small" color="blue-gray" className="font-normal">{user.phone}</Typography></td>
           <td className='p-4'><Typography variant="small" color="blue-gray" className="font-normal">{user.role}</Typography></td>
           <td className='p-4'><Typography variant="small" color="blue-gray" className="font-normal"> {user.isActive ? (<CheckCircleIcon/>) :  <CancelIcon />}</Typography></td>
           <td className='p-4'><button onClick={() => handleDelete(user.id)}><DeleteIcon></DeleteIcon></button></td>
           <td className='p-4'><Link to="/updateuser">Update User</Link></td>
          </tr>
        ))}
        
      </tbody>
      </table>
      <div className='flex justify-center mt-5'>
          <Button className="flex items-center gap-2" color="blue-gray" onClick={() => paginate(currentPage - 1)}disabled={currentPage === 1}>Previous</Button>
          <Button className="flex items-center gap-2" color="blue-gray" onClick={() => paginate(currentPage + 1)}disabled={indexOfLastUser >= users.length}>Next</Button>
        </div>
    </Card>
    </div>
    </div>
  );
};
export  { UserPanel } ;