'use client'
import React from 'react'
import { RxMoon, RxSun } from "react-icons/rx"
import { useTheme } from 'next-themes'


export default function AuthLayout({ children }:{ children: React.ReactNode}) {
  const { theme, setTheme } = useTheme()
  return (
    <div className="container">
      <div className='py-7 flex items-center justify-center overflow-hidden w-full min-h-screen'>
        <button className='absolute top-5 left-5 text-2xl focus-visible:outline-0' onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>{theme === 'light' ? <RxMoon /> : <RxSun />}</button>
        <div className='w-full max-w-[400px] relative before:w-[148px] before:h-[148px] before:absolute before:-top-10 before:-right-10 before:bg-[url("/before.svg")] after:w-[243px] after:h-[240px] after:absolute after:-bottom-[68px] after:-left-[46px] after:bg-[url("/after.svg")]'>
          {children}
        </div>
      </div>
    </div>
  );
}