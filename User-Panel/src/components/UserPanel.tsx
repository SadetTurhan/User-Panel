
import React from 'react';
import { useSelector } from 'react-redux';
import { User } from '../types/User';
import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';
import { User as UserType } from '../types/User';
import { deleteUser } from '../redux/usersSlice';
interface UserProps {
    user: UserType;
  }


function UserPanel(){
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(users));
  };

  return (
    <div>
      <h2>User Panel</h2>
      {users.map((user: User) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          
        </div>
      ))}
    </div>
  );
};

export { UserPanel };