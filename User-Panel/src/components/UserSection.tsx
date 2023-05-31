import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../features/UserSlice";

interface UserCard {
    name:string;
    index: number
}

export default function UserCard({name, index}:UserCard){
    const dispatch = useDispatch()
    return(
        <div onClick={() => {
            dispatch(removeUser(index))
        }}
        className="reservation-card-container">{name}</div>
    )
}