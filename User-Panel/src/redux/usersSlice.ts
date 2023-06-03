import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/User';
import usersData from '../users.json'; 

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
    users: usersData.map((user) => ({
      ...user,
      role: 'user', 
    })),
  };
  

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: { deleteUser: (state, action: PayloadAction<number>) => {
    state.users = state.users.filter(user => user.id !== action.payload);
  },},
});

export const { deleteUser } = usersSlice.actions;
export default usersSlice.reducer;