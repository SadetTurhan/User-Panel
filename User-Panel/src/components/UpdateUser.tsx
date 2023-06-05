import { Sidebar } from "../sidebar";
import {
    Card,
    Input,
    Button,
    Typography,
    CardBody,
    Checkbox,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
function UpdateUser(){
    return (
        <div className='grid grid-cols-5'>
      <Sidebar></Sidebar>
      <div className='col-start-2 col-end-5'>
        <div className="mx-8 my-8"><Link to="/userpanel"><Typography variant="h2"><TransitEnterexitIcon className="mr-8"></TransitEnterexitIcon>Back to users</Typography></Link></div>
        <Card className="w-full">
        <CardBody className='h-full'>
        <form>
          <div className="grid grid-cols-2">
          <label>Name<Input></Input></label>
          <label>Mail<Input></Input></label>
          <label>Phone<Input></Input></label>
          <label>Role<Input></Input></label>
          <label>Active<Checkbox  ripple={true}></Checkbox></label>
          <Button className=" w-1/4 mx-8 my-8">Update User</Button>
          </div>
        </form>
        </CardBody>
      </Card>
    </div>
    </div>
    );
  };
  
  export  { UpdateUser };