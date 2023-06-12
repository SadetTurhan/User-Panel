import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { Sidebar } from '../sidebar';
import { Card, Typography, Tooltip } from "@material-tailwind/react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteUser, setUsers } from '../redux/usersSlice';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect, useState } from 'react';
import { UserType } from '../types/UserType';
import Swal from 'sweetalert2'
import axios from 'axios';

function UserPanel() {
  const users = useSelector((state: RootState) => state.users.users);
  const userName = useSelector((state: RootState) => state.users.userName);
  const dispatch = useDispatch();

  const handleDelete = async (userId: number) => {
    const confirmDelete = await Swal.fire({
      title: 'Attention!',
      text: 'The user will be deleted',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    });

    if (confirmDelete.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/users/${userId}`);
        dispatch(deleteUser(userId));
      } catch (error) {
        console.log('Error deleting user:', error);
      }
    } else {
      console.log('Delete cancelled by the user');
    }
  };

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
  const rowsPerPage = 7;
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers: UserType[] = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / rowsPerPage);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='grid grid-cols-5 bg-gradient-to-r from-green-50 to-green-100'>
      <Sidebar />
      <div className='col-start-2 col-end-6 mt-8 ml-8 mr-8 p-6 mb-6'>
        <Typography variant="h3" className="mt-12">Welcome, {userName}!</Typography>
        <Card className="w-full mt-5">
          <TableContainer style={{ maxHeight: '700px' }}>
            <Table className="w-full min-w-max">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Active</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentUsers.map((user: UserType) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.isActive ? (<CheckCircleIcon style={{ color: 'green' }} />) : <CancelIcon style={{ color: 'red' }} />}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDelete(user.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      <Link key={user.id} to={`/updateuser/${user.id}`}>
                        <Tooltip content="Update the user information from here">
                          Update User
                        </Tooltip>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
