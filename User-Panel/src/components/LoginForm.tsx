import userData from '../users.json'; 
import { SubmitHandler, FieldValues, useForm} from 'react-hook-form';
import { Card, Input, Button, Typography, CardHeader, CardBody } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";


const validationSchema = z.object({
    email: z.string().min(1, { message: "Invalid email or password" }).email({message: "Invalid email or password",}),
    password: z.string().min(6, { message: "Invalid email or password" }),
  })
  type ValidationSchema = z.infer<typeof validationSchema>;

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ValidationSchema>({resolver: zodResolver(validationSchema)});
  const nav = useNavigate();
  const onSubmit = ((data: CustomFieldValues) => {
  const { email, password } = data;
  const users = userData.find((user) => user.email === email);
    if (users && users.password === password) {
      nav("/userpanel");
    } else {
    console.log('Invalid email or password');
    }
  }) as SubmitHandler<FieldValues>;

type CustomFieldValues = FieldValues & FormData & ValidationSchema;
  
  return (
    <div className="h-screen bg-gradient-to-r from-green-300 to-green-400">
    <div className="flex justify-center text-center">
    <Card className="flex-row w-full h-full max-w-[48rem] mx-8 my-8">
      <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
        <img 
          src="./src/assets/signup.jpg" 
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
        <Button color="light-green" className='mt-1' type="submit" fullWidth>submit</Button>
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
