import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserState {
    value: string[];
}

const initialState: UserState = {
    value: ["asda","asdad","asdsad","asdda","asdsa"]
}
export const UserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action:PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeUser: (state, action:PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
    },
})

export const { addUser, removeUser} = UserSlice.actions

export default UserSlice.reducer;