import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React, { useEffect } from "react";
import { UserType } from "../types/UserType";
import axios from 'axios';
import { useDispatch } from "react-redux";

interface UsersState {
  users: UserType[];
  userName: string;
}

const initialState: UsersState = {
  users: [],
  userName: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { setUsers, deleteUser, setUserName } = usersSlice.actions;
export default usersSlice.reducer;

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get<UserType[]>("http://localhost:3000/Users")
      .then(response => {
        dispatch(setUsers(response.data));
      })
      .catch(error => {
        console.log('Error fetching users:', error);
      });
  }, [dispatch]);
  
};

export  { UserList };