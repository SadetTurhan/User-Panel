import { Sidebar } from "../sidebar";
import {
    Card,
    Input,
    Button,
    Typography,
    Checkbox,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
function UpdateUser(){
    return (
        <div className='grid grid-cols-5'>
      <Sidebar></Sidebar>
      <div className='col-start-2 col-end-5'>
        <Link to="/userpanel"><h1>Back to users</h1></Link>
        <h2>Update Users</h2>
        Name<Input></Input>
        Email<Input></Input>
        Phone<Input></Input>
        Role<Input></Input>
        <Input ></Input>
        <Checkbox defaultChecked />
        <Button>Update User</Button>
    </div>
    </div>
    );
  };
  
  export  { UpdateUser };