import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Card, Input, Button, Typography, CardBody, Checkbox, CardHeader} from '@material-tailwind/react';
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { UserType } from '../types/UserType';
import { Sidebar } from '../sidebar';
import updateuser from "../assets/updateuser.jpg"

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email area cannot be empty' }).email({ message: 'Wrong email format' }),
  name: z.string().min(6, { message: 'Name area cannot be empty' }),
  phone: z.string(),
  role: z.enum(['user', 'admin']).refine(
    (value) => value === 'user' || value === 'admin',
    {
      message: 'Invalid role',
    }
  ),
});

type ValidationSchema = z.infer<typeof validationSchema>;

function UpdateUser() {
  const nav = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const { userId } = useParams();
  const [user, setUser] = useState<UserType | null>(null);
  const onSubmit = (data: ValidationSchema) => {
    const updatedUserData = { ...data, isActive };
    axios
      .put(`http://localhost:3000/users/${userId}`, updatedUserData)
      .then((response) => {
        console.log('User updated successfully:', response.data);
        setUser(response.data);
        nav('/userpanel');
      })
      .catch((error) => {
        console.log('Error updating user:', error);
      });
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`);
        const userData = response.data;
        setUser(userData);
        setIsActive(userData.isActive);
        setValue('name', userData.name);
        setValue('email', userData.email);
        setValue('phone', userData.phone);
        setValue('role', userData.role);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId, setValue]);
  const [isActive, setIsActive] = useState(user?.isActive || false);
  return (
    <div className="grid grid-cols-5 h-screen bg-gradient-to-r from-green-50 to-light-green-100">
      <Sidebar></Sidebar>
      <div className="p-6 col-start-2 col-end-5 mt-8 mr-8 mb-6">
        <Link to="/userpanel">
          <Typography className="mb-8 ml-6" variant="h3">
            <TransitEnterexitIcon className="ml-2" />
            Back to users
          </Typography>
        </Link>
        <Card className="col-start-2 col-end-5 mt-10 ml-8 mr-4 p-8">
        <CardHeader className="relative h-48 w-full mr-8 p-1">
        <img src={updateuser} alt="img-blur-shadow"  />
      </CardHeader>
          <CardBody className="h-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="h1" className="text-center text-black-500 mb-5">
                Update User information
              </Typography>
              <Typography variant="h5" className="text-center text-sm text-red-400 mt-5">
                Please be careful! <br />
                People like to prank each other a lot, But you wouldn't, would you?
              </Typography>
              <div className="flex p-8 grid grid-cols-2 gap-4">
                <label>
                  Name
                  <Input type="text" {...register('name', { required: true })} defaultValue={user?.name} />
                  {errors.name && <p className="text-xs italic text-red-500">{errors.name.message}</p>}
                </label>
                <label>
                  Email
                  <Input type="text" {...register('email', { required: true })} defaultValue={user?.email} />
                  {errors.email && <p className="text-xs italic text-red-500">{errors.email.message}</p>}
                </label>
                <label>
                  Phone
                  <Input type="text" {...register('phone', { required: true })} defaultValue={user?.phone} />
                  {errors.phone && <p className="text-xs italic text-red-500">{errors.phone.message}</p>}
                </label>
                <label>
                  Role
                  <select
                    {...register('role', { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={user?.role}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </label>
              </div>
              <label>
        Status
        <Checkbox
  checked={isActive}
  onChange={(e) => setIsActive(e.target.checked)}
/>
            </label>
              <Button color="blue" className="float-right mt-4 w-1/8" type="submit">
                Update User
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export { UpdateUser };