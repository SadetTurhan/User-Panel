import { User, UserList } from "./UserType";

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export type ActionTypes = {type: typeof ADD_USER; payload: UserList} | {type: typeof DELETE_USER; payload: UserList}
export const addUser = (name:string, id:number) => ({type: ADD_USER,payload: name, id})
export const deleteUser = (name:string, id:number) => ({type: DELETE_USER, payload: name,id})