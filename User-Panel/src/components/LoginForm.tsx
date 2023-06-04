import userData from '../users.json'; 
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { SubmitHandler, FieldValues, useForm } from 'react-hook-form';

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const users = useSelector((state: RootState) => state.users.users);
  const onSubmit = ((data: CustomFieldValues) => {
  const { email, password } = data;

  const users = userData.find((user) => user.email === email);

  if (users && users.password === password) {
    console.log('Login successful');
  } else {
    console.log('Invalid email or password');
  }
}) as SubmitHandler<FieldValues>;
type CustomFieldValues = FieldValues & FormData;
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="email" {...register("email", {required: true})} />

      <input  type="text" placeholder='password' {...register("password", {required: true })} />

      <button type="submit"  />
    </form>
  );
}
