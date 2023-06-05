import { Sidebar } from "../sidebar";
import {
    Card,
    Input,
    Button,
    Typography,
    CardBody,
    Checkbox
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import TransitEnterexitIcon from '@mui/icons-material/TransitEnterexit';
export function UpdateUser(){
    return (
        <div className='grid grid-cols-5'>
      <Sidebar></Sidebar>
      <div className='col-start-2 col-end-5'>
        <div className="mx-8 my-8"><Link to="/userpanel"><Typography variant="h2"><TransitEnterexitIcon className="mr-8"></TransitEnterexitIcon>Back to users</Typography></Link></div>
        <Card className="w-full">
          <Typography variant="h2" className="text-center">Update User information</Typography>
        <CardBody className='h-full'>
        <form>
          <div className="ml-72 my-8 w-1/2">
          <label>Name<Input></Input></label>
          <label>Mail<Input></Input></label>
          <label>Phone<Input></Input></label>
          <label >Role<Input></Input></label>
          </div>
          <div className="flex justify-center mx-8 my-8">
          <label>Active<Checkbox  ripple={true}></Checkbox></label>
          <Button>Update User</Button>
          </div>
        </form>
        </CardBody>
      </Card>
    </div>
    </div>
    );
  };
  