'use client'

import React from 'react'
import { projects } from '@/data/webinars'
import { HoverEffect } from "./ui/card-hover-effect";
import Link from 'next/link';

const Upcoming_Webinars = () => {
  return (
   <>
 <div className='py-12 bg-gray-900 dark:text-white'>
         <div>
             <div className='text-center'>
                 <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Webinars</h2>
                 <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhanced Your Musical Journey</p>
             </div>
         </div>
   <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    <div className='mt-16 text-center'>
<Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
View All Courses
</Link>
        </div>
   </div>
   </>
  )
}

export default Upcoming_Webinars