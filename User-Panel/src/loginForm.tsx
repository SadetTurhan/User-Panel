import { useForm } from "react-hook-form";
import { Outlet, Link } from "react-router-dom";
import { Button,
  Card,
  Input,
  Typography,} from "@material-tailwind/react";

function LoginForm() {
  type FormData = {
    email: string;
    password: string;
  };
  
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));
  
    return (
      <Card className="h-screen flex items-center justify-center" color="transparent" shadow={false}>
      <form className="w-60 max-w-screen-lg sm:w-96" onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
      <Typography variant="h3" color="blue-gray">MALWATION</Typography>
        <Typography color="gray" className="mt-1 font-normal">Log in to your account</Typography>
        <Typography color="gray" className="mt-1 font-normal">Welcome back! Please enter your details.</Typography>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">E-mail</label>
        <Input size="lg" type="text" placeholder="e-mail" {...register("email", { required: true , pattern: /^\S+@\S+$/i})} />
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <Input size="lg" type="password" placeholder="******" {...register("password", { required: true })} />
        </div>
        <a>Forgot your password?</a>
        <Link to="/users">
        <Button fullWidth type="button">
          Sign In
        </Button>
        </Link>  
        <h4>Don't have an account?<a>Sign Up</a></h4>
      </form>
      </Card>
    );
  }

export { LoginForm };