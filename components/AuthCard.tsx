import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  title: string
  subtitle: string
  link_text: string
  link_url: string
  sub_text?: string
}

const AuthCard = ({children, title, subtitle, link_text, link_url, sub_text} : Props) => {
  return (
    <div className='bg-card rounded-lg flex flex-col p-6 border-0 shadow-card relative z-10 break-words'>
      <Link href='' className='flex items-center justify-center gap-2 mb-10'>
        <span className='overflow-hidden grow-0 shrink-0'>
          <Image src='/sneat.svg' alt='Reeltech logo' width={22} height={38} />
        </span>
        <span className='font-bold shrink-0 opacity-100 text-[1.75rem] text-foreground'>
          ReelService
        </span>
      </Link>
      <h3 className='mb-2 text-xl font-medium'>{title}</h3>
      <p className='mb-6 text-sm font-normal'>{subtitle}</p>
      {children}
      <p className='text-center text-sm'>
        <span>{sub_text}</span>
        <Link href={link_url}>
          <span>  {link_text}</span>
        </Link>
      </p>
    </div>
  )
}

export default AuthCard