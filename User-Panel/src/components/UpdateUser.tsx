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
import { useForm, SubmitHandler } from "react-hook-form"


type FormValues = {
  name: string
  email: string
  phone: string
  role: string
}
function UpdateUser(){
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
    return (
        <div className='grid grid-cols-5 h-screen bg-gradient-to-r from-light-green-50 to-light-green-100'>
      <Sidebar></Sidebar>
      <div className='p-6 col-start-2 col-end-5 mt-8 mr-8 mb-6' >
        <Link to="/userpanel"><Typography className="mb-8 ml-6" variant="h2"><TransitEnterexitIcon className="ml-2"></TransitEnterexitIcon>Back to users</Typography></Link>
        <Card className="col-start-2 col-end-5 mt-10 ml-8 mr-4 p-8">
        <CardBody className='h-full'>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h1" className="text-center text-black-500">Update User information</Typography>
          <Typography variant="h5" className="text-center text-sm text-red-400">Please be careful! <br />People like to prank each other a lot , But you wouldn't, would you?</Typography>
            <div className="flex p-8 grid grid-cols-2 gap-4">
          <label>Name<Input {...register("name")} /></label>
          <label>Email<Input {...register("email")} /></label>
          <label>Phone<Input {...register("phone")} /></label>
          <label>Role<Input {...register("role")} /></label>
          </div>
          <label>Status<Checkbox defaultChecked></Checkbox></label>
          <Button color="blue" className="float-right mt-4 w-1/8" type="submit">Update User</Button>
          </form>
        </CardBody>
      </Card>
    </div>
    </div>
    );
  };
export { UpdateUser };