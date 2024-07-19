"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'
function Page() {
    const user=useUser();
    console.log(user);
  return (
    <div >
         <div class=" py-6 sm:py-8 lg:py-12 mt-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="flex flex-col items-center">
        {/* <!-- logo - start --> */}
        <a href="/start/" class="mb-8 inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
          <img src='/brain.gif' className='h-80 w-80 rounded-xl' />
  
        </a>
        {/* <!-- logo - end --> */}
        <UserButton></UserButton>
        <p class="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">Brainrot</p>
        <h1 class="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">Start Your Meeting</h1>
  
        <p class="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">Your Companion for Mental Wellness</p>
  
        <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Start</a>
      </div>
    </div>
  </div></div>
  )
}

export default Page