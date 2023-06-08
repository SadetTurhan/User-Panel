import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { Sidebar } from '../sidebar';
import { Card, Typography, Button, Tooltip } from "@material-tailwind/react";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser, setUsers } from '../redux/usersSlice';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect, useState } from 'react';
import { UserType } from '../types/UserType';
import axios from 'axios';



function UserPanel() {
    const users = useSelector((state: RootState) => state.users.users);
    const dispatch = useDispatch();
  
    const handleDelete = async (userId: number) => {
      const confirmDelete = window.confirm('Are you sure you want to delete the user?');
  if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/users/${userId}`);
        dispatch(deleteUser(userId));
      } catch (error) {
        console.log('Error deleting user:', error);
      }
    };
    }
    useEffect(() => {
      axios.get<UserType[]>(`http://localhost:3000/users`)
        .then(response => {
          dispatch(setUsers(response.data));
        })
        .catch(error => {
          console.log('Error fetching users:', error);
        });
    }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers: UserType[] = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / rowsPerPage);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const totalUsers = users.length;

  return (

    <div className='grid grid-cols-5 bg-gradient-to-r from-green-50 to-green-100'>
      <Sidebar></Sidebar>
      <div className='col-start-2 col-end-6 mt-8 ml-8 mr-8 p-6 mb-6'>
        <Typography variant="h3" className="mb-12">Users</Typography>
        <Card className="col-start-2 col-end-5 overflow-auto hover:overflow-scroll w-full mt-5">
          <table className="col-start-2 col-end-5 h-full w-full min-w-max table-auto text-left">
            <thead>
              <tr className='border-b border-blue-gray-100 bg-blue-gray-50 p-2'>
                <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none">Name</Typography></th>
                <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Email</Typography></th>
                <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Phone</Typography></th>
                <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Role</Typography></th>
                <th className='p-4'><Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">Active</Typography></th>
                <th className='p-4'></th>
                <th className='p-4'></th>
              </tr>
            </thead>
            <tbody className='col-start-2 col-end-5 h-full w-full min-w-max text-left mb-5'>
            {currentUsers.map((user: UserType) => (
                <tr key={user.id}>
                  <td className='p-4 w-1/7'><Typography variant="small" color="blue-gray" className="font-normal">{user.name}</Typography></td>
                  <td className='p-4 w-1/7'><Typography variant="small" color="blue-gray" className="font-normal">{user.email}</Typography></td>
                  <td className='p-4 w-1/7'><Typography variant="small" color="blue-gray" className="font-normal">{user.phone}</Typography></td>
                  <td className='p-4 w-1/7'><Typography variant="small" color="blue-gray" className="font-normal">{user.role}</Typography></td>
                  <td className='p-4 w-1/7'><Typography variant="small" color="blue-gray" className="font-normal">{user.isActive ? (<CheckCircleIcon style={{ color: "green" }}/>) : <CancelIcon style={{ color: "red" }} />}</Typography></td>
                  <td className='p-4 w-1/7'><button onClick={() => handleDelete(user.id)}><DeleteIcon /></button></td>
                  <td className='p-4 w-1/7'><Link key={user.id} to={`/updateuser/${user.id}`}><Tooltip content="Update the user information from here">Update User</Tooltip></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <div className="flex justify-center mt-5">
        <button
          className="mr-2 px-4 py-2 bg-green-300 text-white rounded-md"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex items-center mx-4 text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </div>
        <button
          className="ml-2 px-4 py-2 bg-green-300 text-white rounded-md"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
          
        </Card>
      </div>
    </div>
  );
}

export { UserPanel };