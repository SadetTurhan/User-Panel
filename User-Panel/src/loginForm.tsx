import { useForm } from "react-hook-form";
import { Outlet, Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

function LoginForm() {
  type FormData = {
    email: string;
    password: string;
  };
  
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));
  
    return (
      <div className="container mx-auto my-8 px-4 w-2/4 h-3/4">
      <form className="bg-white shadow-md rounded w-full h-full px-8 pt-6 pb-8 mb-2" onSubmit={onSubmit}>
        <h1>MALWATION</h1>
        <h2>Log in to your account</h2>
        <h3>Welcome back! Please enter your details.</h3>
        <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">E-mail</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="e-mail" {...register("email", { required: true , pattern: /^\S+@\S+$/i})} />
        </div>
        <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="******" {...register("password", { required: true })} />
        </div>
        <a>Forgot your password?</a>
        <Link to="/users">
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </Button>
        </Link>  
        <h4>Don't have an account?<a>Sign Up</a></h4>
      </form>
      </div>
    );
  }

export { LoginForm };