import { useForm } from "react-hook-form";

export default function LoginForm() {
  type FormData = {
    email: string;
    password: string;
  };
  
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));
  
    return (
      <form onSubmit={onSubmit}>
        <h1>Malwation</h1>
        <h2>Log in to your account</h2>
        <h3>Welcome back! Please enter your details.</h3>
        <input type="text" placeholder="e-mail" {...register("email", { required: true , pattern: /^\S+@\S+$/i})} />
        <input type="text" placeholder="password" {...register("password", { required: true })} />
        <a>Forgot your password?</a>
        <button
        type="button"
        onClick={() => {
        }}
      >
        Sign In
      </button>
        <h4>Don't have an account?<a>Sign Up</a></h4>
      </form>
    );
  }