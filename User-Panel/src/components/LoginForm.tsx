import { UserType } from '../types/UserType';
import { SubmitHandler, FieldValues, useForm} from 'react-hook-form';
import { Card, Input, Button, Typography, CardHeader, CardBody } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import signupimg from "../assets/signup.jpg"
import { z } from "zod";
import axios from 'axios';
import { setUserName } from '../redux/usersSlice';
import { useDispatch } from 'react-redux';

const validationSchema = z.object({
    email: z.string().min(1, { message: "Invalid email or password" }).email({message: "Invalid email or password",}),
    password: z.string().min(6, { message: "Invalid email or password" }),
  })
  type ValidationSchema = z.infer<typeof validationSchema>;

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ValidationSchema>({resolver: zodResolver(validationSchema)});
  const dispatch = useDispatch();
  const nav = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { email, password } = data;
    try {
      const response = await axios.get<UserType[]>(`http://localhost:3000/users?email=${email}&password=${password}`);
      const users = response.data;
      if (users.length > 0) {
        const { name } = users[0];
        dispatch(setUserName(name));
        nav("/userpanel");
      } else {
        console.log('Invalid email or password');
      }
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  }


  
  return (
    <div className="h-screen bg-gradient-to-r from-green-100 to-green-200">
    <div className="flex justify-center text-center">
    <Card className="flex-row w-full h-full max-w-[48rem] mx-8 my-8">
      <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
        <img 
          src={signupimg} 
          alt="image" 
          className="w-full h-full object-cover"
        />
      </CardHeader>
      <CardBody className='h-full'>
        <Typography className="mt-8" variant="h1" color="light-green"  textGradient>Malwation</Typography>
      <Typography color="gray" variant="h3" className="mt-2 font-normal">Log in to your account</Typography>
        <form className="mx-8 my-8 p-8 w-96 h-full max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
        <label>Email<Input className="p-2" type="text" size="lg" placeholder="email" {...register("email", {required: true})} />  {errors.email && (
          <p className="text-xs italic text-red-500">{errors.email?.message}</p>)}</label>
        <label>Password<Input className="p-6"  type="password" size="lg" placeholder='password' {...register("password", {required: true })} />{errors.email && (
          <p className="text-xs italic text-red-500">{errors.password?.message}</p>)}</label>
        <Button color="light-green" className='mt-1' type="submit" fullWidth>Log In</Button>
          <a href="#" className="font-medium text-blue-500 transition-colors hover:text-blue-700">Forgot Password?</a>
        <Typography color="gray" className="text-center font-normal">Don't have an account?
          <br/><a href="#" className="font-medium text-blue-500 transition-colors hover:text-blue-700">Sign In</a>
          </Typography>
        </div>
        </form>
        </CardBody>
      </Card>
    </div>
    </div>
  );
}
