import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/usersSlice';

interface UserProps {
  user: UserType;
}

const UserS: React.FC<UserProps> = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserS;