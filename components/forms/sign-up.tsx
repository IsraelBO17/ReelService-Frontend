'use client'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input';

const SignupSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .refine((password) => /[A-Z]/.test(password), {
      message: 'Password must contain at least one uppercase English letter.',
    })
    .refine((password) => /[a-z]/.test(password), {
      message: 'Password must contain at least one lowercase English letter.',
    })
    .refine((password) => /[0-9]/.test(password), {
      message: 'Password must contain at least one digit.',
    })
    .refine((password) => /[#?!@$%^&*-]/.test(password), {
      message: "Password must contain at least one special character",
    }),
  password2: z
    .string()
}).refine((data) => data.password === data.password2, {
    message: 'Passwords do not match.',
    path: ['password2'],
  });


const SignUpForm = () => {

  const form =  useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      email: '',
      password: '',
      password2: '',
    },
  });

  const { register, handleSubmit, formState } = form
  const { errors } = formState;

  function onSubmit(values: z.infer<typeof SignupSchema>) {
    console.log(values)
    form.reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-2'>
        <div>
          <label className='font-medium uppercase text-xs mb-1' htmlFor='email'>Email</label>
          <Input type='email' id='email' placeholder='Enter your email address' {...register("email")} />
          {errors.email && <p className='text-xs text-destructive'>{errors.email.message}</p>}
        </div>
        <div>
          <label className='font-medium uppercase text-xs mb-1' htmlFor='password'>Password</label>
          <Input type='password' id='password' placeholder='Enter your password' {...register("password")} />
          {errors.password && <p className='text-xs text-destructive'>{errors.password.message}</p>}
        </div>
        <div>
          <label className='font-medium uppercase text-xs mb-1' htmlFor='password2'>Confirm Password</label>
          <Input type='password' id='password2' placeholder='Confirm your password' {...register("password2")} />
          {errors.password2 && <p className='text-xs text-destructive'>{errors.password2.message}</p>}
        </div>
        <button type='submit' className='px-4 py-2 my-4 rounded-md bg-primary text-primary-foreground shadow-primary'>Sign Up</button>
      </form>
  )

}

export default SignUpForm