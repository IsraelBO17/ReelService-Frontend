'use client'
import Link from 'next/link'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input'

const ForgotPasswordSchema = z.object({
  email:  z.string().email({ message: 'Invalid email address' }),
});

const ForgotPasswordForm = () => {

  const form =  useForm({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const { register, handleSubmit, formState } = form
  const { errors } = formState;

  function onSubmit(values: z.infer<typeof ForgotPasswordSchema>) {
    console.log(values)
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2'>
      <div>
        <label className='font-medium uppercase text-xs mb-1' htmlFor='email'>Email</label>
        <Input type='email' id='email' placeholder='Enter your email address' {...register("email")} />
        {errors.email && <p className='text-xs text-destructive'>{errors.email.message}</p>}
      </div>
        <button type="submit" className='px-4 py-2 my-4 rounded-md bg-primary text-primary-foreground shadow-primary'>Send reset link</button>
    </form>
  )
}

export default ForgotPasswordForm