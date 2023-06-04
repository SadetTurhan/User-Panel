import userData from '../users.json'; 
import { SubmitHandler, FieldValues, useForm} from 'react-hook-form';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z
  .object({
    email: z.string().min(1, { message: "Invalid email or password" }).email({message: "Invalid email or password",}),
    password: z.string().min(6, { message: "Invalid email or password" }),
  })
  type ValidationSchema = z.infer<typeof validationSchema>;

  export default function LoginForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ValidationSchema>({resolver: zodResolver(validationSchema)});
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
  console.log(errors);
  
  return (
    <div className="flex justify-center items-center">
    <Card className="mt-8 w-96">
    <Typography variant="h1" color="blue-gray">
      Malwation
    </Typography>
    <Typography color="gray" variant="h2" className="mt-1 font-normal">
      Log in to your account
    </Typography>
    <form className="mt-8 p-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-4 flex flex-col gap-6">
      <Input id="email" className="p-4" type="text" size="lg" placeholder="email" {...register("email", {required: true})} />  {errors.email && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.email?.message}
          </p>   )}

      <Input className="p-4"  type="password" size="lg" placeholder='password' {...register("password", {required: true })} />{errors.email && (
          <p className="text-xs italic text-red-500 mt-2">
            {errors.password?.message}
          </p>   )}

      <Button color="blue" type="submit" fullWidth>submit</Button>
      <a href="#" className="font-medium text-blue-500 transition-colors hover:text-blue-700">Forgot Password?</a>
      <Typography color="gray" className="mt-4 text-center font-normal">Don't have an account?
      <br/><a href="#" className="font-medium text-blue-500 transition-colors hover:text-blue-700">Sign In</a>
        </Typography>
      </div>
    </form>
    </Card>
    </div>
  );
}
