'use client'
import Link from 'next/link'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'

const signInSchema = z.object({
  email:  z.string().email({ message: 'Invalid email address' }),
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
    })
});

const SignInForm = () => {

  const form =  useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { register, handleSubmit, formState } = form
  const { errors } = formState;

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values)
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2'>
        <div>
          <label className='font-medium uppercase text-xs mb-1' htmlFor='email'>Email</label>
          {/* <input 
            type="email"
            id="email"
            className={`text-sm leading-6 border border-input bg-transparent rounded-md py-2 px-3.5 w-full focus-visible:outline-0 focus-visible:border-primary ${errors.email ? 'border-destructive focus-visible:border-destructive' : ''}`}
            autoComplete='off'
            placeholder='Enter your email address'
            {...register("email")}
          /> */}
          <Input type='email' id='email' placeholder='Enter your email address' {...register("email")} />
          {errors.email && <p className='text-xs text-destructive'>{errors.email.message}</p>}
        </div>
        <div>
          <div className='flex justify-between items-center mb-1'>
            <label className='font-medium uppercase text-xs' htmlFor='password'>Password</label>
            <small><Link href='/forgot-password'>Forgot Password?</Link></small>
          </div>
            <Input type='password' id='password' placeholder='Enter your password' {...register("password")} />
            {errors.password && <p className='text-xs text-destructive'>{errors.password.message}</p>}
          </div>
        <button type="submit" className='px-4 py-2 my-4 rounded-md bg-primary text-primary-foreground shadow-primary'>Sign In</button>
      </form>
  )

}

export default SignInForm